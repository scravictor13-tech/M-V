// ─────────────────────────────────────────────
//  Roblox GUI Builder — script.js
// ─────────────────────────────────────────────

const canvas = document.getElementById("canvas");

let elements    = [];
let selected    = null;
let idCounter   = 0;

// Drag
let dragging    = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

// Resize
let resizing      = false;
let resizeHandle  = "";
let resizeStartX  = 0;
let resizeStartY  = 0;
let resizeStartProps = null;

// Zoom
let zoomLevel = 1;

// Undo/Redo
let history    = [];  // array of snapshots
let historyIdx = -1;

// ── ID Generator ──────────────────────────────
function generateId(type) {
  idCounter++;
  return `${type}_${idCounter}`;
}

// ── Snapshot for undo/redo ────────────────────
function snapshot() {
  // Deep-clone elements (without DOM refs)
  const snap = elements.map(e => ({ id: e.id, type: e.type, props: { ...e.props } }));
  history = history.slice(0, historyIdx + 1);
  history.push(snap);
  if (history.length > 60) history.shift();
  historyIdx = history.length - 1;
}

function undo() {
  if (historyIdx <= 0) return;
  historyIdx--;
  restoreSnapshot(history[historyIdx]);
}

function redo() {
  if (historyIdx >= history.length - 1) return;
  historyIdx++;
  restoreSnapshot(history[historyIdx]);
}

function restoreSnapshot(snap) {
  // Remove all DOM elements
  elements.forEach(e => e.el.remove());
  elements = [];
  selected = null;

  snap.forEach(s => {
    const el = document.createElement("div");
    el.className = `roblox-element roblox-${s.type}`;
    el.dataset.id = s.id;
    const props = { ...s.props };
    applyPropsToEl(el, props, s.type);
    attachDragListeners(el);
    canvas.appendChild(el);
    elements.push({ id: s.id, type: s.type, el, props });
  });

  updateHierarchy();
  document.getElementById("noSelection").style.display = "block";
  document.getElementById("propsContent").style.display = "none";
  removeResizeHandles();
}

// ── Default props ─────────────────────────────
function defaultProps(type) {
  return {
    name:               generateId(type),
    x: 60, y: 60,
    width:              type === "frame" ? 150 : 120,
    height:             type === "frame" ? 100 : 36,
    color:              type === "frame" ? "#3a7bd5" : type === "textlabel" ? "#2c2c2c" : "#e74c3c",
    transparency:       0,
    text:               type === "textlabel" ? "Label" : type === "textbutton" ? "Button" : "",
    textColor:          "#ffffff",
    fontSize:           14,
    font:               "GothamBold",
    textXAlign:         "Center",
    textYAlign:         "Center",
    textTruncate:       false,
    cornerEnabled:      false,
    cornerRadius:       8,
    strokeEnabled:      false,
    strokeColor:        "#ffffff",
    strokeThickness:    2,
    strokeTransparency: 0,
    shadowEnabled:      false,
    shadowColor:        "#000000",
    shadowBlur:         10,
    shadowX:            4,
    shadowY:            4,
    shadowOpacity:      0.5,
    // Blur
    blurEnabled:        false,
    blurAmount:         10,
    // Gradient
    gradientEnabled:    false,
    gradientType:       "linear",
    gradientAngle:      90,
    gradientColor1:     "#3a7bd5",
    gradientColor2:     "#e74c3c",
    gradientStop1:      0,
    gradientStop2:      1,
    // Texture
    textureEnabled:     false,
    textureFile:        "",
    textureUrl:         "",
    textureOpacity:     0.3,
    textureBlendMode:   "overlay",
    textureTileSize:    64,
  };
}

// ── Font map ──────────────────────────────────
const FONT_MAP = {
  "GothamBold":    "'Nunito', sans-serif",
  "Gotham":        "'Nunito', sans-serif",
  "Arial":         "Arial, sans-serif",
  "ArialBold":     "Arial, sans-serif",
  "SourceSansPro": "'Source Sans Pro', sans-serif",
  "RobotoMono":    "'Roboto Mono', monospace",
  "Ubuntu":        "'Ubuntu', sans-serif",
  "Code":          "'Courier New', monospace",
  "Cartoon":       "'Fredoka One', cursive",
  "Arcade":        "'Press Start 2P', cursive",
};
const FONT_WEIGHT_MAP = { "GothamBold": "700", "ArialBold": "700" };

(function loadFonts() {
  const link = document.createElement("link");
  link.rel  = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Source+Sans+Pro&family=Roboto+Mono&family=Ubuntu&family=Fredoka+One&family=Press+Start+2P&display=swap";
  document.head.appendChild(link);
})();

// ── Texture presets ───────────────────────────
// ── Texture registry (loaded from textures/ folder) ──
let TEXTURE_FILES = []; // { name, file, url }
const TEXTURE_MAP = {}; // filename → base64 data URL

async function loadTexturesFromFolder() {
  const select = document.getElementById("propTexturePreset");
  if (!window.electronAPI) return;
  try {
    TEXTURE_FILES = await window.electronAPI.getTextures();
  } catch(e) {
    TEXTURE_FILES = [];
  }

  // Store in map for fast lookup
  TEXTURE_FILES.forEach(t => { TEXTURE_MAP[t.file] = t.url; });

  // Rebuild select — value = filename (not the huge base64)
  select.innerHTML = '<option value="">— Aucune texture —</option>';
  if (TEXTURE_FILES.length === 0) {
    const opt = document.createElement("option");
    opt.disabled = true;
    opt.textContent = "📂 Dossier textures/ vide";
    select.appendChild(opt);
  } else {
    TEXTURE_FILES.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.file;       // ← just the filename as key
      opt.textContent = t.name;
      select.appendChild(opt);
    });
  }
}

// ── Apply props to DOM ────────────────────────
function applyPropsToEl(el, props, type) {
  el.style.left        = props.x + "px";
  el.style.top         = props.y + "px";
  el.style.width       = props.width + "px";
  el.style.height      = props.height + "px";
  el.style.opacity     = 1 - props.transparency;
  el.style.borderRadius = props.cornerEnabled ? props.cornerRadius + "px" : "3px";

  // ── Background: couleur / dégradé sur l'élément ──
  if (props.gradientEnabled) {
    const c1 = props.gradientColor1;
    const c2 = props.gradientColor2;
    const s1 = Math.round(props.gradientStop1 * 100);
    const s2 = Math.round(props.gradientStop2 * 100);
    el.style.background = props.gradientType === "radial"
      ? `radial-gradient(circle, ${c1} ${s1}%, ${c2} ${s2}%)`
      : `linear-gradient(${props.gradientAngle}deg, ${c1} ${s1}%, ${c2} ${s2}%)`;
  } else {
    el.style.background = props.color;
  }

  // ── Texture : overlay div indépendant avec sa propre opacité ──
  const texUrl = props.textureEnabled ? (props.textureUrl || "") : "";
  let overlay = el.querySelector(".tex-overlay");

  if (texUrl) {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "tex-overlay";
      el.appendChild(overlay);
    }
    overlay.style.position        = "absolute";
    overlay.style.inset           = "0";
    overlay.style.pointerEvents   = "none";
    overlay.style.borderRadius    = "inherit";
    overlay.style.zIndex          = "2";
    overlay.style.backgroundImage = 'url("' + texUrl + '")';
    overlay.style.backgroundSize  = props.textureTileSize + "px " + props.textureTileSize + "px";
    overlay.style.backgroundRepeat= "repeat";
    overlay.style.opacity         = props.textureOpacity;
    overlay.style.mixBlendMode    = props.textureBlendMode;
    overlay.style.display         = "block";
  } else {
    if (overlay) overlay.remove();
  }

  if (props.strokeEnabled) {
    const sa = 1 - props.strokeTransparency;
    el.style.outline       = `${props.strokeThickness}px solid ${hexToRgba(props.strokeColor, sa)}`;
    el.style.outlineOffset = "0px";
  } else {
    el.style.outline = "none";
  }

  if (props.shadowEnabled) {
    el.style.boxShadow = `${props.shadowX}px ${props.shadowY}px ${props.shadowBlur}px ${hexToRgba(props.shadowColor, props.shadowOpacity)}`;
  } else {
    el.style.boxShadow = "none";
  }

  // Blur (glassmorphism)
  if (props.blurEnabled) {
    el.style.backdropFilter         = `blur(${props.blurAmount}px)`;
    el.style.webkitBackdropFilter   = `blur(${props.blurAmount}px)`;
  } else {
    el.style.backdropFilter         = "none";
    el.style.webkitBackdropFilter   = "none";
  }

  if (type === "textlabel" || type === "textbutton") {
    // Use a span for text so overlay div is preserved
    let textSpan = el.querySelector(".el-text");
    if (!textSpan) {
      textSpan = document.createElement("span");
      textSpan.className = "el-text";
      el.insertBefore(textSpan, el.firstChild);
    }
    textSpan.textContent   = props.text;
    el.style.color         = props.textColor;
    el.style.fontSize      = props.fontSize + "px";
    el.style.fontFamily    = FONT_MAP[props.font] || "sans-serif";
    el.style.fontWeight    = FONT_WEIGHT_MAP[props.font] || "600";
    el.style.display       = "flex";
    el.style.alignItems    = props.textYAlign === "Top" ? "flex-start" : props.textYAlign === "Bottom" ? "flex-end" : "center";
    el.style.justifyContent= props.textXAlign === "Left" ? "flex-start" : props.textXAlign === "Right" ? "flex-end" : "center";
    el.style.overflow      = props.textTruncate ? "hidden" : "visible";
    el.style.whiteSpace    = props.textTruncate ? "nowrap" : "normal";
    el.style.textOverflow  = props.textTruncate ? "ellipsis" : "";
    el.style.padding       = "4px 8px";
    textSpan.style.position = "relative";
    textSpan.style.zIndex   = "3";
  } else {
    // For frames, clear only text nodes not child divs
    el.querySelectorAll(".el-text").forEach(n => n.remove());
  }
}

// ── Create Element ────────────────────────────
function createElement(type) {
  snapshot();
  const props = defaultProps(type);
  const el = document.createElement("div");
  el.className = `roblox-element roblox-${type}`;
  el.dataset.id = props.name;
  applyPropsToEl(el, props, type);
  attachDragListeners(el);
  canvas.appendChild(el);
  const entry = { id: props.name, type, el, props };
  elements.push(entry);
  updateHierarchy();
  selectElement(props.name);
  snapshot();
}

// ── Duplicate ─────────────────────────────────
function duplicateSelected() {
  if (!selected) return;
  const src = getEntry(selected);
  if (!src) return;
  snapshot();
  idCounter++;
  const newId = `${src.type}_${idCounter}`;
  const props = { ...src.props, name: newId, x: src.props.x + 20, y: src.props.y + 20 };
  const el = document.createElement("div");
  el.className = `roblox-element roblox-${src.type}`;
  el.dataset.id = newId;
  applyPropsToEl(el, props, src.type);
  attachDragListeners(el);
  canvas.appendChild(el);
  elements.push({ id: newId, type: src.type, el, props });
  updateHierarchy();
  selectElement(newId);
  snapshot();
}

// ── Drag ──────────────────────────────────────
function attachDragListeners(el) {
  el.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("resize-handle")) return;
    e.stopPropagation();
    selectElement(el.dataset.id);
    dragging = true;
    const rect = canvas.getBoundingClientRect();
    dragOffsetX = (e.clientX - rect.left) / zoomLevel - parseInt(el.style.left);
    dragOffsetY = (e.clientY - rect.top)  / zoomLevel - parseInt(el.style.top);
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup",   onDragEnd);
  });
}

function onDragMove(e) {
  if (!dragging || !selected) return;
  const entry = getEntry(selected);
  if (!entry) return;
  const rect = canvas.getBoundingClientRect();
  let nx = (e.clientX - rect.left) / zoomLevel - dragOffsetX;
  let ny = (e.clientY - rect.top)  / zoomLevel - dragOffsetY;
  nx = Math.max(0, Math.min(nx, canvas.offsetWidth  - entry.props.width));
  ny = Math.max(0, Math.min(ny, canvas.offsetHeight - entry.props.height));
  entry.props.x = Math.round(nx);
  entry.props.y = Math.round(ny);
  entry.el.style.left = nx + "px";
  entry.el.style.top  = ny + "px";
  document.getElementById("propX").value = entry.props.x;
  document.getElementById("propY").value = entry.props.y;
  repositionHandles(entry.el);
}

function onDragEnd() {
  if (dragging) snapshot();
  dragging = false;
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup",   onDragEnd);
}

// ── Resize Handles ────────────────────────────
const HANDLES = ["nw","n","ne","e","se","s","sw","w"];

function addResizeHandles(el) {
  removeResizeHandles();
  HANDLES.forEach(dir => {
    const h = document.createElement("div");
    h.className = `resize-handle rh-${dir}`;
    h.dataset.dir = dir;
    positionHandle(h, dir, el);
    h.addEventListener("mousedown", onResizeStart);
    canvas.appendChild(h);
  });
}

function removeResizeHandles() {
  canvas.querySelectorAll(".resize-handle").forEach(h => h.remove());
}

function positionHandle(h, dir, el) {
  const x = parseInt(el.style.left);
  const y = parseInt(el.style.top);
  const w = parseInt(el.style.width);
  const ht = parseInt(el.style.height);
  const S = 8;
  const half = S / 2;
  const positions = {
    nw: [x - half,         y - half],
    n:  [x + w/2 - half,   y - half],
    ne: [x + w - half,     y - half],
    e:  [x + w - half,     y + ht/2 - half],
    se: [x + w - half,     y + ht - half],
    s:  [x + w/2 - half,   y + ht - half],
    sw: [x - half,         y + ht - half],
    w:  [x - half,         y + ht/2 - half],
  };
  h.style.left = positions[dir][0] + "px";
  h.style.top  = positions[dir][1] + "px";
}

function repositionHandles(el) {
  HANDLES.forEach(dir => {
    const h = canvas.querySelector(`.rh-${dir}`);
    if (h) positionHandle(h, dir, el);
  });
}

function onResizeStart(e) {
  e.stopPropagation();
  resizing = true;
  resizeHandle = e.target.dataset.dir;
  resizeStartX = e.clientX;
  resizeStartY = e.clientY;
  const entry = getEntry(selected);
  if (entry) resizeStartProps = { ...entry.props };
  document.addEventListener("mousemove", onResizeMove);
  document.addEventListener("mouseup",   onResizeEnd);
}

function onResizeMove(e) {
  if (!resizing || !selected) return;
  const entry = getEntry(selected);
  if (!entry || !resizeStartProps) return;

  const dx = (e.clientX - resizeStartX) / zoomLevel;
  const dy = (e.clientY - resizeStartY) / zoomLevel;
  const MIN = 16;
  let { x, y, width, height } = resizeStartProps;

  const dir = resizeHandle;
  if (dir.includes("e")) width  = Math.max(MIN, width  + dx);
  if (dir.includes("s")) height = Math.max(MIN, height + dy);
  if (dir.includes("w")) { width = Math.max(MIN, width - dx); if (width > MIN) x = resizeStartProps.x + dx; }
  if (dir.includes("n")) { height = Math.max(MIN, height - dy); if (height > MIN) y = resizeStartProps.y + dy; }

  entry.props.x      = Math.round(x);
  entry.props.y      = Math.round(y);
  entry.props.width  = Math.round(width);
  entry.props.height = Math.round(height);

  entry.el.style.left   = entry.props.x + "px";
  entry.el.style.top    = entry.props.y + "px";
  entry.el.style.width  = entry.props.width  + "px";
  entry.el.style.height = entry.props.height + "px";

  repositionHandles(entry.el);

  document.getElementById("propX").value      = entry.props.x;
  document.getElementById("propY").value      = entry.props.y;
  document.getElementById("propWidth").value  = entry.props.width;
  document.getElementById("propHeight").value = entry.props.height;
}

function onResizeEnd() {
  if (resizing) snapshot();
  resizing = false;
  document.removeEventListener("mousemove", onResizeMove);
  document.removeEventListener("mouseup",   onResizeEnd);
}

// ── Zoom ──────────────────────────────────────
const canvasWrapper = document.querySelector(".canvas-wrapper");

document.querySelector(".editor").addEventListener("wheel", (e) => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  zoomLevel = Math.min(3, Math.max(0.25, zoomLevel - e.deltaY * 0.001));
  applyZoom();
}, { passive: false });

function applyZoom() {
  canvas.style.transform = `scale(${zoomLevel})`;
  canvas.style.transformOrigin = "top left";
  document.getElementById("zoomDisplay").textContent = Math.round(zoomLevel * 100) + "%";
}

document.getElementById("btnZoomIn").addEventListener("click",    () => { zoomLevel = Math.min(3,    zoomLevel + 0.1); applyZoom(); });
document.getElementById("btnZoomOut").addEventListener("click",   () => { zoomLevel = Math.max(0.25, zoomLevel - 0.1); applyZoom(); });
document.getElementById("btnZoomReset").addEventListener("click", () => { zoomLevel = 1; applyZoom(); });

// ── Canvas Resolution ─────────────────────────
const RESOLUTIONS = {
  "480p":   [854,  480],
  "720p":   [1280, 720],
  "1080p":  [1920, 1080],
  "custom": null,
};

document.getElementById("resolutionSelect").addEventListener("change", (e) => {
  const val = e.target.value;
  if (val === "custom") {
    document.getElementById("customResWrap").style.display = "flex";
    return;
  }
  document.getElementById("customResWrap").style.display = "none";
  const [w, h] = RESOLUTIONS[val];
  applyResolution(w, h);
});

document.getElementById("btnApplyRes").addEventListener("click", () => {
  const w = parseInt(document.getElementById("customW").value) || 600;
  const h = parseInt(document.getElementById("customH").value) || 500;
  applyResolution(w, h);
});

function applyResolution(w, h) {
  // Scale canvas to fit in editor while keeping aspect ratio
  const DISPLAY_MAX_W = 700;
  const DISPLAY_MAX_H = 520;
  const scale = Math.min(DISPLAY_MAX_W / w, DISPLAY_MAX_H / h, 1);
  canvas.style.width  = w + "px";
  canvas.style.height = h + "px";
  document.getElementById("resLabel").textContent = `${w} × ${h}`;
  zoomLevel = parseFloat(scale.toFixed(2));
  applyZoom();
}

// ── Selection ─────────────────────────────────
function selectElement(id) {
  if (selected) {
    const prev = getEntry(selected);
    if (prev) prev.el.classList.remove("selected");
  }
  removeResizeHandles();
  selected = id;
  const entry = getEntry(id);
  if (!entry) return;
  entry.el.classList.add("selected");
  addResizeHandles(entry.el);
  populateProps(entry);
  highlightHierarchy(id);
  document.getElementById("noSelection").style.display = "none";
  document.getElementById("propsContent").style.display = "block";
  document.getElementById("sectionText").style.display =
    (entry.type === "textlabel" || entry.type === "textbutton") ? "block" : "none";
}

canvas.addEventListener("mousedown", (e) => {
  if (e.target !== canvas) return;
  if (selected) { const prev = getEntry(selected); if (prev) prev.el.classList.remove("selected"); }
  removeResizeHandles();
  selected = null;
  document.getElementById("noSelection").style.display = "block";
  document.getElementById("propsContent").style.display = "none";
  highlightHierarchy(null);
});

// ── Props Panel ───────────────────────────────
function populateProps(entry) {
  const p = entry.props;
  document.getElementById("propName").value              = p.name;
  document.getElementById("propX").value                 = p.x;
  document.getElementById("propY").value                 = p.y;
  document.getElementById("propWidth").value             = p.width;
  document.getElementById("propHeight").value            = p.height;
  document.getElementById("propColor").value             = p.color;
  document.getElementById("propTransparency").value      = p.transparency;
  document.getElementById("propTransparencyVal").textContent = p.transparency;
  document.getElementById("propText").value              = p.text;
  document.getElementById("propTextColor").value         = p.textColor;
  document.getElementById("propFontSize").value          = p.fontSize;
  document.getElementById("propFont").value              = p.font;
  document.getElementById("propTextTruncate").checked    = p.textTruncate;
  document.getElementById("propCornerEnabled").checked   = p.cornerEnabled;
  document.getElementById("propCornerRadius").value      = p.cornerRadius;
  document.getElementById("propStrokeEnabled").checked   = p.strokeEnabled;
  document.getElementById("propStrokeColor").value       = p.strokeColor;
  document.getElementById("propStrokeThickness").value   = p.strokeThickness;
  document.getElementById("propStrokeTransparency").value= p.strokeTransparency;
  document.getElementById("propStrokeTransparencyVal").textContent = p.strokeTransparency;
  document.getElementById("propShadowEnabled").checked   = p.shadowEnabled;
  document.getElementById("propShadowColor").value       = p.shadowColor;
  document.getElementById("propShadowBlur").value        = p.shadowBlur;
  document.getElementById("propShadowX").value           = p.shadowX;
  document.getElementById("propShadowY").value           = p.shadowY;
  document.getElementById("propShadowOpacity").value     = p.shadowOpacity;
  document.getElementById("propShadowOpacityVal").textContent = p.shadowOpacity;
  setAlignActive("propTextXAlign", p.textXAlign);
  setAlignActive("propTextYAlign", p.textYAlign);
  // Blur
  document.getElementById("propBlurEnabled").checked  = p.blurEnabled;
  document.getElementById("propBlurAmount").value     = p.blurAmount;
  document.getElementById("propBlurAmountVal").textContent = p.blurAmount;
  // Gradient
  document.getElementById("propGradientEnabled").checked   = p.gradientEnabled;
  document.querySelectorAll("#propGradientType button").forEach(b =>
    b.classList.toggle("active", b.dataset.val === p.gradientType)
  );
  updateGradientPreview(p);
  document.getElementById("propGradientType").value        = p.gradientType;
  document.getElementById("propGradientAngle").value       = p.gradientAngle;
  document.getElementById("propGradientColor1").value      = p.gradientColor1;
  document.getElementById("propGradientColor2").value      = p.gradientColor2;
  document.getElementById("propGradientStop1").value       = p.gradientStop1;
  document.getElementById("propGradientStop2").value       = p.gradientStop2;
  document.getElementById("propGradientStop1Val").textContent = p.gradientStop1;
  document.getElementById("propGradientStop2Val").textContent = p.gradientStop2;
  // Texture
  document.getElementById("propTextureEnabled").checked    = p.textureEnabled;
  document.getElementById("propTexturePreset").value       = p.textureFile || "";
  document.getElementById("propTextureOpacity").value      = p.textureOpacity;
  document.getElementById("propTextureOpacityVal").textContent = p.textureOpacity;
  document.getElementById("propTextureBlendMode").value    = p.textureBlendMode;
  document.getElementById("propTextureTileSize").value     = p.textureTileSize;
}

function bind(id, propKey, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", () => {
    if (!selected) return;
    const entry = getEntry(selected);
    if (!entry) return;
    let val = el.value;
    if (type === "number")   val = parseInt(val)   || 0;
    if (type === "float")    val = parseFloat(val) || 0;
    if (type === "checkbox") val = el.checked;
    entry.props[propKey] = val;
    const display = document.getElementById(id + "Val");
    if (display) display.textContent = parseFloat(val).toFixed(2).replace(/\.?0+$/, '') || "0";
    applyPropsToEl(entry.el, entry.props, entry.type);
    repositionHandles(entry.el);
    if (propKey === "name") { entry.id = val; entry.el.dataset.id = val; updateHierarchy(); }
  });
  // snapshot on change (not input) for number/color fields
  el.addEventListener("change", () => { if (selected) snapshot(); });
}

bind("propName",               "name");
bind("propX",                  "x",                  "number");
bind("propY",                  "y",                  "number");
bind("propWidth",              "width",              "number");
bind("propHeight",             "height",             "number");
bind("propColor",              "color");
bind("propTransparency",       "transparency",       "float");
bind("propText",               "text");
bind("propTextColor",          "textColor");
bind("propFontSize",           "fontSize",           "number");
bind("propFont",               "font");
bind("propTextTruncate",       "textTruncate",       "checkbox");
bind("propCornerEnabled",      "cornerEnabled",      "checkbox");
bind("propCornerRadius",       "cornerRadius",       "number");
bind("propStrokeEnabled",      "strokeEnabled",      "checkbox");
bind("propStrokeColor",        "strokeColor");
bind("propStrokeThickness",    "strokeThickness",    "number");
bind("propStrokeTransparency", "strokeTransparency", "float");
bind("propShadowEnabled",      "shadowEnabled",      "checkbox");
bind("propShadowColor",        "shadowColor");
bind("propShadowBlur",         "shadowBlur",         "number");
bind("propShadowX",            "shadowX",            "number");
bind("propShadowY",            "shadowY",            "number");
bind("propShadowOpacity",      "shadowOpacity",      "float");

bind("propBlurEnabled",        "blurEnabled",        "checkbox");
bind("propBlurAmount",         "blurAmount",         "number");

bind("propGradientEnabled",    "gradientEnabled",    "checkbox");
bind("propGradientType",       "gradientType");
// propGradientAngle is handled by custom listener above (live preview)
bind("propGradientColor1",     "gradientColor1");
bind("propGradientColor2",     "gradientColor2");
bind("propGradientStop1",      "gradientStop1",      "float");
bind("propGradientStop2",      "gradientStop2",      "float");

bind("propTextureEnabled",     "textureEnabled",     "checkbox");
bind("propTextureOpacity",     "textureOpacity",     "float");
bind("propTextureBlendMode",   "textureBlendMode");
bind("propTextureTileSize",    "textureTileSize",    "number");

// Texture select → store filename key, resolve data URL at render time
document.getElementById("propTexturePreset").addEventListener("change", (e) => {
  if (!selected) return;
  const entry = getEntry(selected);
  if (!entry) return;
  entry.props.textureFile = e.target.value;  // filename key
  entry.props.textureUrl  = TEXTURE_MAP[e.target.value] || "";  // data URL
  applyPropsToEl(entry.el, entry.props, entry.type);
  snapshot();
});

// Reload textures button
document.getElementById("btnReloadTextures").addEventListener("click", () => {
  loadTexturesFromFolder();
});

// Gradient type toggle buttons
document.querySelectorAll("#propGradientType button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!selected) return;
    const entry = getEntry(selected);
    if (!entry) return;
    entry.props.gradientType = btn.dataset.val;
    document.querySelectorAll("#propGradientType button").forEach(b =>
      b.classList.toggle("active", b.dataset.val === btn.dataset.val)
    );
    applyPropsToEl(entry.el, entry.props, entry.type);
    updateGradientPreview(entry.props);
    snapshot();
  });
});

// Gradient angle live display
document.getElementById("propGradientAngle").addEventListener("input", (e) => {
  document.getElementById("propGradientAngleVal").textContent = e.target.value;
  if (!selected) return;
  const entry = getEntry(selected);
  if (!entry) return;
  entry.props.gradientAngle = parseInt(e.target.value);
  applyPropsToEl(entry.el, entry.props, entry.type);
  updateGradientPreview(entry.props);
});

function updateGradientPreview(props) {
  const bar = document.getElementById("gradPreviewBar");
  if (!bar) return;
  const c1 = props.gradientColor1, c2 = props.gradientColor2;
  const s1 = Math.round(props.gradientStop1 * 100), s2 = Math.round(props.gradientStop2 * 100);
  if (props.gradientType === "radial") {
    bar.style.background = `radial-gradient(circle, ${c1} ${s1}%, ${c2} ${s2}%)`;
  } else {
    bar.style.background = `linear-gradient(${props.gradientAngle}deg, ${c1} ${s1}%, ${c2} ${s2}%)`;
  }
}

// Update preview when gradient colors/stops change
["propGradientColor1","propGradientColor2","propGradientStop1","propGradientStop2"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    if (!selected) return;
    const entry = getEntry(selected);
    if (entry) updateGradientPreview(entry.props);
  });
});

function setAlignActive(groupId, val) {
  document.querySelectorAll(`#${groupId} button`).forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === val);
  });
}

["propTextXAlign", "propTextYAlign"].forEach(groupId => {
  document.querySelectorAll(`#${groupId} button`).forEach(btn => {
    btn.addEventListener("click", () => {
      if (!selected) return;
      const entry = getEntry(selected);
      if (!entry) return;
      const propKey = groupId === "propTextXAlign" ? "textXAlign" : "textYAlign";
      entry.props[propKey] = btn.dataset.val;
      setAlignActive(groupId, btn.dataset.val);
      applyPropsToEl(entry.el, entry.props, entry.type);
      snapshot();
    });
  });
});

// ── Hierarchy ─────────────────────────────────
function updateHierarchy() {
  const hier = document.getElementById("hierarchy");
  hier.innerHTML = "";
  elements.forEach(entry => {
    const item = document.createElement("div");
    item.className = "hier-item";
    item.dataset.id = entry.id;
    const icon = entry.type === "frame" ? "▪" : entry.type === "textlabel" ? "T" : "▶";
    item.innerHTML = `<span class="hier-icon">${icon}</span><span class="hier-name">${entry.props.name}</span>`;
    item.addEventListener("click", () => selectElement(entry.id));
    const del = document.createElement("span");
    del.className = "hier-delete";
    del.textContent = "✕";
    del.addEventListener("click", (e) => { e.stopPropagation(); deleteElement(entry.id); });
    item.appendChild(del);
    hier.appendChild(item);
  });
}

function highlightHierarchy(id) {
  document.querySelectorAll(".hier-item").forEach(item => {
    item.classList.toggle("active", item.dataset.id === id);
  });
}

// ── Delete ────────────────────────────────────
function deleteElement(id) {
  snapshot();
  const entry = getEntry(id);
  if (!entry) return;
  entry.el.remove();
  elements = elements.filter(e => e.id !== id);
  if (selected === id) {
    selected = null;
    removeResizeHandles();
    document.getElementById("noSelection").style.display = "block";
    document.getElementById("propsContent").style.display = "none";
  }
  updateHierarchy();
  snapshot();
}

// ── Utils ─────────────────────────────────────
function getEntry(id) { return elements.find(e => e.id === id); }

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? { r: parseInt(r[1],16), g: parseInt(r[2],16), b: parseInt(r[3],16) } : {r:255,g:255,b:255};
}

function hexToRgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ── Save / Load JSON ──────────────────────────
function saveProject() {
  const data = {
    version: 1,
    canvasW: canvas.offsetWidth,
    canvasH: canvas.offsetHeight,
    elements: elements.map(e => ({ id: e.id, type: e.type, props: { ...e.props } })),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "gui_project.json";
  a.click();
  URL.revokeObjectURL(url);
}

function loadProject() {
  const input = document.createElement("input");
  input.type  = "file";
  input.accept = ".json";
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        // Restore canvas size
        if (data.canvasW && data.canvasH) applyResolution(data.canvasW, data.canvasH);
        // Restore elements
        elements.forEach(el => el.el.remove());
        elements = [];
        selected = null;
        removeResizeHandles();
        data.elements.forEach(s => {
          const el = document.createElement("div");
          el.className = `roblox-element roblox-${s.type}`;
          el.dataset.id = s.id;
          applyPropsToEl(el, s.props, s.type);
          attachDragListeners(el);
          canvas.appendChild(el);
          elements.push({ id: s.id, type: s.type, el, props: { ...s.props } });
          // Keep idCounter above loaded ids
          const num = parseInt(s.id.split("_").pop());
          if (num >= idCounter) idCounter = num + 1;
        });
        updateHierarchy();
        document.getElementById("noSelection").style.display = "block";
        document.getElementById("propsContent").style.display = "none";
        snapshot();
      } catch (err) {
        alert("Fichier JSON invalide.");
      }
    };
    reader.readAsText(file);
  });
  input.click();
}

// ── Export PNG ───────────────────────────────
async function exportPng() {
  if (elements.length === 0) { alert("Aucun élément à exporter !"); return; }

  // Hide handles and selection
  removeResizeHandles();
  const prevSelected = selected;
  if (prevSelected) {
    const entry = getEntry(prevSelected);
    if (entry) entry.el.classList.remove("selected");
  }

  // Compute bounding box of ALL elements
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  elements.forEach(({ props }) => {
    minX = Math.min(minX, props.x);
    minY = Math.min(minY, props.y);
    maxX = Math.max(maxX, props.x + props.width);
    maxY = Math.max(maxY, props.y + props.height);
  });
  const PAD  = 10; // small padding around content
  minX = Math.max(0, minX - PAD);
  minY = Math.max(0, minY - PAD);
  maxX = Math.min(canvas.offsetWidth,  maxX + PAD);
  maxY = Math.min(canvas.offsetHeight, maxY + PAD);
  const cropW = maxX - minX;
  const cropH = maxY - minY;

  // Save zoom state and reset to 1:1 for capture
  const prevTransform       = canvas.style.transform;
  const prevTransformOrigin = canvas.style.transformOrigin;
  canvas.style.transform       = "scale(1)";
  canvas.style.transformOrigin = "top left";

  // Build an off-screen wrapper with only the cropped area
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: ${cropW}px;
    height: ${cropH}px;
    overflow: hidden;
    background: transparent;
  `;

  // Clone canvas, shift it so content starts at (0,0)
  const clone = canvas.cloneNode(true);
  clone.style.position        = "absolute";
  clone.style.left            = -minX + "px";
  clone.style.top             = -minY + "px";
  clone.style.transform       = "none";
  clone.style.border          = "none";
  clone.style.boxShadow       = "none";
  clone.style.background      = "transparent";
  clone.style.backgroundImage = "none";
  clone.style.backgroundSize  = "0";
  // Remove selection outlines from cloned elements
  clone.querySelectorAll(".roblox-element").forEach(el => {
    el.style.outline = "none";
  });
  clone.querySelectorAll(".resize-handle").forEach(el => el.remove());

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  try {
    const captureCanvas = await html2canvas(wrapper, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      width:  cropW,
      height: cropH,
      logging: false,
    });
    showPngModal(captureCanvas);
  } catch (err) {
    alert("Erreur lors de la capture : " + err.message);
  } finally {
    document.body.removeChild(wrapper);
    canvas.style.transform       = prevTransform;
    canvas.style.transformOrigin = prevTransformOrigin;
    if (prevSelected) {
      selected = prevSelected;
      const entry = getEntry(selected);
      if (entry) { entry.el.classList.add("selected"); addResizeHandles(entry.el); }
    }
  }
}

function showPngModal(captureCanvas) {
  const existing = document.getElementById("pngModal");
  if (existing) existing.remove();

  const dataUrl = captureCanvas.toDataURL("image/png");

  const modal = document.createElement("div");
  modal.id = "pngModal";
  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-box png-modal-box">
        <div class="modal-header">
          <span>🖼️ Export PNG</span>
          <button class="modal-close" id="pngCloseBtn">✕</button>
        </div>
        <div class="png-preview-wrap">
          <div class="png-checkerboard">
            <img id="pngPreviewImg" src="${dataUrl}" alt="preview" />
          </div>
          <div class="png-info">
            <span>${captureCanvas.width} × ${captureCanvas.height}px</span>
            <span>Fond transparent ✓</span>
          </div>
        </div>
        <div class="modal-actions">
          <button id="pngDownloadBtn">⬇️ Télécharger PNG</button>
          <button id="pngCloseBtn2">Fermer</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);

  document.getElementById("pngCloseBtn").addEventListener("click",  () => modal.remove());
  document.getElementById("pngCloseBtn2").addEventListener("click", () => modal.remove());
  document.getElementById("pngDownloadBtn").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href     = dataUrl;
    a.download = "gui_export.png";
    a.click();
  });
}

// ── Export Lua ────────────────────────────────
function exportLua() {
  if (elements.length === 0) { alert("Aucun élément à exporter !"); return; }
  const cW = canvas.offsetWidth;
  const cH = canvas.offsetHeight;
  let lua = `-- Generated by Roblox GUI Builder\n`;
  lua += `local ScreenGui = Instance.new("ScreenGui")\n`;
  lua += `ScreenGui.Name = "MyGui"\n`;
  lua += `ScreenGui.ResetOnSpawn = false\n`;
  lua += `ScreenGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")\n\n`;

  elements.forEach(({ props, type }) => {
    const rType = type === "frame" ? "Frame" : type === "textlabel" ? "TextLabel" : "TextButton";
    const n   = props.name;
    const xS  = (props.x / cW).toFixed(4);
    const yS  = (props.y / cH).toFixed(4);
    const wS  = (props.width  / cW).toFixed(4);
    const hS  = (props.height / cH).toFixed(4);
    const rgb = hexToRgb(props.color);

    lua += `-- ${n}\nlocal ${n} = Instance.new("${rType}")\n`;
    lua += `${n}.Name = "${n}"\n`;
    lua += `${n}.Position = UDim2.new(${xS}, 0, ${yS}, 0)\n`;
    lua += `${n}.Size = UDim2.new(${wS}, 0, ${hS}, 0)\n`;
    lua += `${n}.BackgroundColor3 = Color3.fromRGB(${rgb.r}, ${rgb.g}, ${rgb.b})\n`;
    lua += `${n}.BackgroundTransparency = ${props.transparency}\n`;
    lua += `${n}.BorderSizePixel = 0\n`;

    if (type !== "frame") {
      const tc = hexToRgb(props.textColor);
      lua += `${n}.Text = "${props.text}"\n`;
      lua += `${n}.TextColor3 = Color3.fromRGB(${tc.r}, ${tc.g}, ${tc.b})\n`;
      lua += `${n}.TextSize = ${props.fontSize}\n`;
      lua += `${n}.Font = Enum.Font.${props.font}\n`;
      lua += `${n}.TextXAlignment = Enum.TextXAlignment.${props.textXAlign}\n`;
      lua += `${n}.TextYAlignment = Enum.TextYAlignment.${props.textYAlign}\n`;
      lua += `${n}.TextTruncate = ${props.textTruncate ? 'Enum.TextTruncate.AtEnd' : 'Enum.TextTruncate.None'}\n`;
    }
    // UIGradient
    if (props.gradientEnabled) {
      const c1 = hexToRgb(props.gradientColor1);
      const c2 = hexToRgb(props.gradientColor2);
      const s1 = props.gradientStop1.toFixed(3);
      const s2 = props.gradientStop2.toFixed(3);
      const angle = props.gradientType === "radial" ? "" :
        `\n${n}_Grad.Rotation = ${props.gradientAngle}`;
      lua += `local ${n}_Grad = Instance.new("UIGradient")\n`;
      lua += `${n}_Grad.Color = ColorSequence.new({\n`;
      lua += `    ColorSequenceKeypoint.new(${s1}, Color3.fromRGB(${c1.r}, ${c1.g}, ${c1.b})),\n`;
      lua += `    ColorSequenceKeypoint.new(${s2}, Color3.fromRGB(${c2.r}, ${c2.g}, ${c2.b}))\n`;
      lua += `})\n`;
      if (props.gradientType === "linear") lua += `${n}_Grad.Rotation = ${props.gradientAngle}\n`;
      lua += `${n}_Grad.Parent = ${n}\n`;
    }

    if (props.cornerEnabled) {
      lua += `local ${n}_Corner = Instance.new("UICorner")\n${n}_Corner.CornerRadius = UDim.new(0, ${props.cornerRadius})\n${n}_Corner.Parent = ${n}\n`;
    }
    if (props.strokeEnabled) {
      const sc = hexToRgb(props.strokeColor);
      lua += `local ${n}_Stroke = Instance.new("UIStroke")\n${n}_Stroke.Color = Color3.fromRGB(${sc.r}, ${sc.g}, ${sc.b})\n${n}_Stroke.Thickness = ${props.strokeThickness}\n${n}_Stroke.Transparency = ${props.strokeTransparency}\n${n}_Stroke.Parent = ${n}\n`;
    }
    if (props.shadowEnabled) {
      const sh = hexToRgb(props.shadowColor);
      lua += `local ${n}_Shadow = Instance.new("Frame")\n${n}_Shadow.Size = UDim2.new(${wS}, ${props.shadowBlur*2}, ${hS}, ${props.shadowBlur*2})\n${n}_Shadow.Position = UDim2.new(${xS}, ${props.shadowX - props.shadowBlur}, ${yS}, ${props.shadowY - props.shadowBlur})\n${n}_Shadow.BackgroundColor3 = Color3.fromRGB(${sh.r}, ${sh.g}, ${sh.b})\n${n}_Shadow.BackgroundTransparency = ${(1 - props.shadowOpacity).toFixed(2)}\n${n}_Shadow.BorderSizePixel = 0\n${n}_Shadow.ZIndex = ${n}.ZIndex - 1\n${n}_Shadow.Parent = ScreenGui\n`;
      if (props.cornerEnabled) lua += `local ${n}_SC = Instance.new("UICorner")\n${n}_SC.CornerRadius = UDim.new(0, ${props.cornerRadius})\n${n}_SC.Parent = ${n}_Shadow\n`;
    }
    if (type === "textbutton") lua += `${n}.MouseButton1Click:Connect(function()\n    -- TODO\nend)\n`;
    lua += `${n}.Parent = ScreenGui\n\n`;
  });
  showLuaModal(lua);
}

function showLuaModal(lua) {
  const existing = document.getElementById("luaModal");
  if (existing) existing.remove();
  const modal = document.createElement("div");
  modal.id = "luaModal";
  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-box">
        <div class="modal-header"><span>Export Lua</span><button class="modal-close" id="modalCloseBtn">✕</button></div>
        <textarea class="modal-code" readonly>${lua}</textarea>
        <div class="modal-actions">
          <button id="modalCopyBtn">📋 Copier</button>
          <button id="modalCloseBtn2">Fermer</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById("modalCloseBtn").addEventListener("click",  () => modal.remove());
  document.getElementById("modalCloseBtn2").addEventListener("click", () => modal.remove());
  document.getElementById("modalCopyBtn").addEventListener("click", () => {
    modal.querySelector(".modal-code").select();
    document.execCommand("copy");
    document.getElementById("modalCopyBtn").textContent = "✅ Copié !";
    setTimeout(() => document.getElementById("modalCopyBtn").textContent = "📋 Copier", 1500);
  });
}

// ── Keyboard shortcuts ────────────────────────
document.addEventListener("keydown", (e) => {
  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return;

  if (e.ctrlKey && e.key === "z") { e.preventDefault(); undo(); }
  if (e.ctrlKey && e.key === "y") { e.preventDefault(); redo(); }
  if (e.ctrlKey && e.key === "d") { e.preventDefault(); duplicateSelected(); }
  if (e.key === "Delete" && selected) deleteElement(selected);
});

// ── Topbar buttons ────────────────────────────
document.getElementById("btnFrame").addEventListener("click",       () => createElement("frame"));
document.getElementById("btnTextLabel").addEventListener("click",   () => createElement("textlabel"));
document.getElementById("btnTextButton").addEventListener("click",  () => createElement("textbutton"));
document.getElementById("btnExport").addEventListener("click",      () => exportLua());
document.getElementById("btnExportPng").addEventListener("click",   () => exportPng());
document.getElementById("btnSave").addEventListener("click",        () => saveProject());
document.getElementById("btnLoad").addEventListener("click",        () => loadProject());
document.getElementById("btnUndo").addEventListener("click",        () => undo());
document.getElementById("btnRedo").addEventListener("click",        () => redo());
document.getElementById("btnDuplicate").addEventListener("click",   () => duplicateSelected());

// ── Init ──────────────────────────────────────
snapshot(); // initial empty snapshot
initPresetsTab();
loadTexturesFromFolder();
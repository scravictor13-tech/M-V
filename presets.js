// ─────────────────────────────────────────────
//  presets.js — Roblox GUI Presets
// ─────────────────────────────────────────────

const PRESETS = {

  "Buttons": [
    {
      name: "Modern Blue",
      type: "textbutton",
      thumb: { bg: "#3a7bd5", text: "#fff", radius: 8, shadow: true },
      props: {
        width: 160, height: 44, color: "#3a7bd5", transparency: 0,
        text: "Click Me", textColor: "#ffffff", fontSize: 16, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: false, strokeColor: "#ffffff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#1a3a6e", shadowBlur: 12, shadowX: 0, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Green Success",
      type: "textbutton",
      thumb: { bg: "#27ae60", text: "#fff", radius: 8, shadow: true },
      props: {
        width: 160, height: 44, color: "#27ae60", transparency: 0,
        text: "Confirm", textColor: "#ffffff", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: false, strokeColor: "#1e8449", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#1a5c32", shadowBlur: 10, shadowX: 0, shadowY: 4, shadowOpacity: 0.45,
      }
    },
    {
      name: "Red Danger",
      type: "textbutton",
      thumb: { bg: "#e74c3c", text: "#fff", radius: 8, shadow: true },
      props: {
        width: 160, height: 44, color: "#e74c3c", transparency: 0,
        text: "Delete", textColor: "#ffffff", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: false, strokeColor: "#922b21", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7b241c", shadowBlur: 10, shadowX: 0, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Ghost Outline",
      type: "textbutton",
      thumb: { bg: "transparent", text: "#fff", radius: 8, border: "#ffffff" },
      props: {
        width: 160, height: 44, color: "#1a1a2e", transparency: 0.6,
        text: "Cancel", textColor: "#ffffff", fontSize: 15, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#ffffff", strokeThickness: 2, strokeTransparency: 0.3,
        shadowEnabled: false, shadowColor: "#000000", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.3,
      }
    },
    {
      name: "Sci-Fi Cyan",
      type: "textbutton",
      thumb: { bg: "#0a1628", text: "#00eaff", radius: 4, border: "#00eaff" },
      props: {
        width: 170, height: 42, color: "#0a1628", transparency: 0,
        text: "LAUNCH", textColor: "#00eaff", fontSize: 14, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#00eaff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 14, shadowX: 0, shadowY: 0, shadowOpacity: 0.5,
      }
    },
    {
      name: "Cartoon Yellow",
      type: "textbutton",
      thumb: { bg: "#f1c40f", text: "#222", radius: 12, border: "#c49b0a" },
      props: {
        width: 160, height: 50, color: "#f1c40f", transparency: 0,
        text: "Play!", textColor: "#2c2c2c", fontSize: 18, font: "Cartoon",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 12,
        strokeEnabled: true, strokeColor: "#c49b0a", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7d6608", shadowBlur: 0, shadowX: 0, shadowY: 5, shadowOpacity: 0.7,
      }
    },
    {
      name: "RPG Gold",
      type: "textbutton",
      thumb: { bg: "#8B6914", text: "#ffe599", radius: 6, border: "#d4a017" },
      props: {
        width: 170, height: 46, color: "#8B6914", transparency: 0,
        text: "⚔ Attack", textColor: "#ffe599", fontSize: 15, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#d4a017", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#3d2b07", shadowBlur: 8, shadowX: 0, shadowY: 3, shadowOpacity: 0.7,
      }
    },
    {
      name: "Dark Flat",
      type: "textbutton",
      thumb: { bg: "#23232e", text: "#aaa", radius: 6 },
      props: {
        width: 150, height: 40, color: "#23232e", transparency: 0,
        text: "Settings", textColor: "#aaaaaa", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#3a3a4a", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: false, shadowColor: "#000000", shadowBlur: 6, shadowX: 0, shadowY: 2, shadowOpacity: 0.3,
      }
    },
  ],

  "Labels": [
    {
      name: "Modern Title",
      type: "textlabel",
      thumb: { bg: "transparent", text: "#fff", radius: 0 },
      props: {
        width: 200, height: 40, color: "#00000000", transparency: 1,
        text: "My Game", textColor: "#ffffff", fontSize: 24, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: false, strokeColor: "#000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 8, shadowX: 1, shadowY: 2, shadowOpacity: 0.6,
      }
    },
    {
      name: "Badge Red",
      type: "textlabel",
      thumb: { bg: "#e74c3c", text: "#fff", radius: 20 },
      props: {
        width: 80, height: 28, color: "#e74c3c", transparency: 0,
        text: "NEW", textColor: "#ffffff", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: false, strokeColor: "#fff", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7b241c", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "Pill Tag",
      type: "textlabel",
      thumb: { bg: "#1a3a5c", text: "#00b4d8", radius: 20, border: "#00b4d8" },
      props: {
        width: 100, height: 28, color: "#1a3a5c", transparency: 0,
        text: "VIP", textColor: "#00b4d8", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: true, strokeColor: "#00b4d8", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: false, shadowColor: "#000", shadowBlur: 6, shadowX: 0, shadowY: 2, shadowOpacity: 0.3,
      }
    },
    {
      name: "Sci-Fi HUD Text",
      type: "textlabel",
      thumb: { bg: "#0a1628", text: "#00eaff", radius: 3, border: "#00eaff" },
      props: {
        width: 180, height: 36, color: "#0a1628", transparency: 0,
        text: "HP: 100 / 100", textColor: "#00eaff", fontSize: 13, font: "RobotoMono",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 3,
        strokeEnabled: true, strokeColor: "#00eaff", strokeThickness: 1, strokeTransparency: 0.5,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "RPG Stat",
      type: "textlabel",
      thumb: { bg: "#1a0a00", text: "#ffcc00", radius: 4, border: "#8B6914" },
      props: {
        width: 160, height: 36, color: "#1a0a00", transparency: 0,
        text: "⚔ ATK: 45", textColor: "#ffcc00", fontSize: 14, font: "ArialBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#8B6914", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: false, shadowColor: "#000", shadowBlur: 4, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "Cartoon Score",
      type: "textlabel",
      thumb: { bg: "#f39c12", text: "#fff", radius: 10 },
      props: {
        width: 130, height: 40, color: "#f39c12", transparency: 0,
        text: "⭐ 1250", textColor: "#ffffff", fontSize: 16, font: "Cartoon",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#c47e0a", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7d5308", shadowBlur: 0, shadowX: 0, shadowY: 4, shadowOpacity: 0.8,
      }
    },
  ],

  "Frames": [
    {
      name: "Dark Card",
      type: "frame",
      thumb: { bg: "#16213e", radius: 12, border: "#0f3460" },
      props: {
        width: 220, height: 140, color: "#16213e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 12,
        strokeEnabled: true, strokeColor: "#0f3460", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 20, shadowX: 0, shadowY: 8, shadowOpacity: 0.6,
      }
    },
    {
      name: "Glass Panel",
      type: "frame",
      thumb: { bg: "#ffffff20", radius: 10, border: "#ffffff" },
      props: {
        width: 220, height: 140, color: "#aaccff", transparency: 0.7,
        text: "", textColor: "#fff", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#ffffff", strokeThickness: 1, strokeTransparency: 0.3,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 16, shadowX: 0, shadowY: 6, shadowOpacity: 0.35,
      }
    },
    {
      name: "Sci-Fi Panel",
      type: "frame",
      thumb: { bg: "#050d1a", radius: 4, border: "#00eaff" },
      props: {
        width: 240, height: 150, color: "#050d1a", transparency: 0,
        text: "", textColor: "#00eaff", fontSize: 14, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#00eaff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 18, shadowX: 0, shadowY: 0, shadowOpacity: 0.35,
      }
    },
    {
      name: "RPG Parchment",
      type: "frame",
      thumb: { bg: "#c8a96e", radius: 6, border: "#7d5a2c" },
      props: {
        width: 230, height: 150, color: "#c8a96e", transparency: 0,
        text: "", textColor: "#3d2b07", fontSize: 14, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#7d5a2c", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#3d2b07", shadowBlur: 10, shadowX: 2, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Cartoon Bubble",
      type: "frame",
      thumb: { bg: "#ffffff", radius: 20, border: "#333" },
      props: {
        width: 200, height: 120, color: "#ffffff", transparency: 0,
        text: "", textColor: "#333", fontSize: 14, font: "Cartoon",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 20,
        strokeEnabled: true, strokeColor: "#333333", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#333333", shadowBlur: 0, shadowX: 4, shadowY: 4, shadowOpacity: 1,
      }
    },
    {
      name: "Minimal Dark",
      type: "frame",
      thumb: { bg: "#1a1a2e", radius: 8, border: "#2a2a4a" },
      props: {
        width: 200, height: 120, color: "#1a1a2e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#2a2a4a", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: false, shadowColor: "#000", shadowBlur: 8, shadowX: 0, shadowY: 4, shadowOpacity: 0.4,
      }
    },
  ],

  "Notifications": [
    {
      name: "Toast Success",
      type: "frame",
      thumb: { bg: "#1e4d2b", radius: 10, border: "#27ae60" },
      props: {
        width: 260, height: 54, color: "#1e4d2b", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#27ae60", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#27ae60", shadowBlur: 12, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Toast Error",
      type: "frame",
      thumb: { bg: "#4d1e1e", radius: 10, border: "#e74c3c" },
      props: {
        width: 260, height: 54, color: "#4d1e1e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#e74c3c", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#e74c3c", shadowBlur: 12, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Toast Warning",
      type: "frame",
      thumb: { bg: "#4d3b1e", radius: 10, border: "#f39c12" },
      props: {
        width: 260, height: 54, color: "#4d3b1e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#f39c12", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#f39c12", shadowBlur: 12, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Sci-Fi Alert",
      type: "frame",
      thumb: { bg: "#0a0a1a", radius: 4, border: "#ff003c" },
      props: {
        width: 260, height: 60, color: "#0a0a1a", transparency: 0,
        text: "", textColor: "#ff003c", fontSize: 13, font: "RobotoMono",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#ff003c", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff003c", shadowBlur: 16, shadowX: 0, shadowY: 0, shadowOpacity: 0.5,
      }
    },
  ],

  "HUD": [
    {
      name: "Health Bar",
      type: "frame",
      thumb: { bg: "#e74c3c", radius: 6, border: "#222" },
      props: {
        width: 200, height: 22, color: "#e74c3c", transparency: 0,
        text: "", textColor: "#fff", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#222222", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7b241c", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "Mana Bar",
      type: "frame",
      thumb: { bg: "#2980b9", radius: 6, border: "#222" },
      props: {
        width: 200, height: 22, color: "#2980b9", transparency: 0,
        text: "", textColor: "#fff", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#222222", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#1a5276", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "XP Bar",
      type: "frame",
      thumb: { bg: "#8e44ad", radius: 6, border: "#222" },
      props: {
        width: 220, height: 18, color: "#8e44ad", transparency: 0,
        text: "", textColor: "#fff", fontSize: 11, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#222222", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#4a235a", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "Minimap Frame",
      type: "frame",
      thumb: { bg: "#0d0d0d", radius: 50, border: "#555" },
      props: {
        width: 110, height: 110, color: "#0d0d0d", transparency: 0,
        text: "", textColor: "#fff", fontSize: 12, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 55,
        strokeEnabled: true, strokeColor: "#555555", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 14, shadowX: 0, shadowY: 4, shadowOpacity: 0.6,
      }
    },
    {
      name: "Coin Counter",
      type: "textlabel",
      thumb: { bg: "#1a1a2e", text: "#f1c40f", radius: 20, border: "#f1c40f" },
      props: {
        width: 130, height: 36, color: "#1a1a2e", transparency: 0,
        text: "🪙 1,250", textColor: "#f1c40f", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 18,
        strokeEnabled: true, strokeColor: "#f1c40f", strokeThickness: 1, strokeTransparency: 0.3,
        shadowEnabled: true, shadowColor: "#f1c40f", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.2,
      }
    },
    {
      name: "Kill Feed",
      type: "textlabel",
      thumb: { bg: "#0a0a0a", text: "#ff4444", radius: 4, border: "#333" },
      props: {
        width: 200, height: 30, color: "#0a0a0a", transparency: 0.2,
        text: "Player1 ☠ Player2", textColor: "#ff6666", fontSize: 12, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: true,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#333333", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: false, shadowColor: "#000", shadowBlur: 4, shadowX: 0, shadowY: 1, shadowOpacity: 0.5,
      }
    },
  ],
};

// ─────────────────────────────────────────────
//  EXTRA PRESETS — injected into PRESETS object
// ─────────────────────────────────────────────

Object.assign(PRESETS, {

  "Buttons II": [
    {
      name: "Neon Purple",
      type: "textbutton",
      thumb: { bg: "#1a0a2e", text: "#bf5fff", radius: 8, border: "#bf5fff" },
      props: {
        width: 160, height: 44, color: "#1a0a2e", transparency: 0,
        text: "Select", textColor: "#bf5fff", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#bf5fff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#bf5fff", shadowBlur: 16, shadowX: 0, shadowY: 0, shadowOpacity: 0.55,
      }
    },
    {
      name: "Ice Blue",
      type: "textbutton",
      thumb: { bg: "#d6eeff", text: "#1a6fa8", radius: 10 },
      props: {
        width: 160, height: 44, color: "#d6eeff", transparency: 0,
        text: "Accept", textColor: "#1a6fa8", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#a8d4f5", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#1a6fa8", shadowBlur: 12, shadowX: 0, shadowY: 4, shadowOpacity: 0.3,
      }
    },
    {
      name: "Sunset Orange",
      type: "textbutton",
      thumb: { bg: "#ff6b35", text: "#fff", radius: 8 },
      props: {
        width: 160, height: 44, color: "#ff6b35", transparency: 0,
        text: "Continue", textColor: "#ffffff", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: false, strokeColor: "#c44a18", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#8a2a00", shadowBlur: 12, shadowX: 0, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Midnight Black",
      type: "textbutton",
      thumb: { bg: "#0a0a0a", text: "#fff", radius: 6, border: "#333" },
      props: {
        width: 160, height: 44, color: "#0a0a0a", transparency: 0,
        text: "Stealth", textColor: "#ffffff", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#333333", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 18, shadowX: 0, shadowY: 6, shadowOpacity: 0.8,
      }
    },
    {
      name: "Pink Pop",
      type: "textbutton",
      thumb: { bg: "#ff4d94", text: "#fff", radius: 22 },
      props: {
        width: 150, height: 44, color: "#ff4d94", transparency: 0,
        text: "Like ♥", textColor: "#ffffff", fontSize: 15, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 22,
        strokeEnabled: false, strokeColor: "#c4006b", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#c4006b", shadowBlur: 14, shadowX: 0, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Toxic Green",
      type: "textbutton",
      thumb: { bg: "#0a1a0a", text: "#39ff14", radius: 4, border: "#39ff14" },
      props: {
        width: 160, height: 42, color: "#0a1a0a", transparency: 0,
        text: "HACK", textColor: "#39ff14", fontSize: 14, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#39ff14", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#39ff14", shadowBlur: 16, shadowX: 0, shadowY: 0, shadowOpacity: 0.55,
      }
    },
    {
      name: "Retro Arcade",
      type: "textbutton",
      thumb: { bg: "#000080", text: "#ffff00", radius: 0, border: "#ffff00" },
      props: {
        width: 160, height: 44, color: "#000080", transparency: 0,
        text: "INSERT COIN", textColor: "#ffff00", fontSize: 11, font: "Arcade",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: true, strokeColor: "#ffff00", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ffff00", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Soft Pastel",
      type: "textbutton",
      thumb: { bg: "#fde8f5", text: "#9b59b6", radius: 14 },
      props: {
        width: 150, height: 42, color: "#fde8f5", transparency: 0,
        text: "Continue", textColor: "#9b59b6", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: true, strokeColor: "#d7a8e8", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#9b59b6", shadowBlur: 10, shadowX: 0, shadowY: 3, shadowOpacity: 0.25,
      }
    },
    {
      name: "Military",
      type: "textbutton",
      thumb: { bg: "#3b4a2f", text: "#c8d6a0", radius: 3, border: "#5a6e3a" },
      props: {
        width: 160, height: 44, color: "#3b4a2f", transparency: 0,
        text: "DEPLOY", textColor: "#c8d6a0", fontSize: 13, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 3,
        strokeEnabled: true, strokeColor: "#5a6e3a", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#0a0f06", shadowBlur: 8, shadowX: 2, shadowY: 3, shadowOpacity: 0.6,
      }
    },
    {
      name: "Lava Red",
      type: "textbutton",
      thumb: { bg: "#3d0000", text: "#ff6b35", radius: 6, border: "#ff2200" },
      props: {
        width: 160, height: 44, color: "#3d0000", transparency: 0,
        text: "🔥 Rage", textColor: "#ff6b35", fontSize: 15, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#ff2200", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff2200", shadowBlur: 18, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
  ],

  "Labels II": [
    {
      name: "Level Badge",
      type: "textlabel",
      thumb: { bg: "#1a1a2e", text: "#ffd700", radius: 6, border: "#ffd700" },
      props: {
        width: 90, height: 30, color: "#1a1a2e", transparency: 0,
        text: "LVL 42", textColor: "#ffd700", fontSize: 13, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#ffd700", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ffd700", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.35,
      }
    },
    {
      name: "Neon Subtitle",
      type: "textlabel",
      thumb: { bg: "transparent", text: "#00eaff", radius: 0 },
      props: {
        width: 200, height: 30, color: "#000000", transparency: 1,
        text: "PLAYER ONE", textColor: "#00eaff", fontSize: 16, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: false, strokeColor: "#000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 14, shadowX: 0, shadowY: 0, shadowOpacity: 0.7,
      }
    },
    {
      name: "Online Tag",
      type: "textlabel",
      thumb: { bg: "#0f2a0f", text: "#2ecc71", radius: 20, border: "#2ecc71" },
      props: {
        width: 90, height: 26, color: "#0f2a0f", transparency: 0,
        text: "● Online", textColor: "#2ecc71", fontSize: 11, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 13,
        strokeEnabled: true, strokeColor: "#2ecc71", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#2ecc71", shadowBlur: 8, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Chat Bubble",
      type: "textlabel",
      thumb: { bg: "#ffffff", text: "#222", radius: 14, border: "#ddd" },
      props: {
        width: 180, height: 40, color: "#ffffff", transparency: 0,
        text: "Hello world!", textColor: "#222222", fontSize: 13, font: "SourceSansPro",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: true, strokeColor: "#dddddd", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#aaaaaa", shadowBlur: 10, shadowX: 0, shadowY: 3, shadowOpacity: 0.3,
      }
    },
    {
      name: "Damage Number",
      type: "textlabel",
      thumb: { bg: "transparent", text: "#ff4444", radius: 0 },
      props: {
        width: 80, height: 36, color: "#000000", transparency: 1,
        text: "-248", textColor: "#ff4444", fontSize: 22, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: false, strokeColor: "#000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 6, shadowX: 1, shadowY: 2, shadowOpacity: 0.8,
      }
    },
    {
      name: "Crit Number",
      type: "textlabel",
      thumb: { bg: "transparent", text: "#ffcc00", radius: 0 },
      props: {
        width: 90, height: 40, color: "#000000", transparency: 1,
        text: "CRIT! 999", textColor: "#ffcc00", fontSize: 18, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: false, strokeColor: "#000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff6600", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.7,
      }
    },
    {
      name: "Admin Tag",
      type: "textlabel",
      thumb: { bg: "#2c0a0a", text: "#ff4444", radius: 4, border: "#ff4444" },
      props: {
        width: 90, height: 26, color: "#2c0a0a", transparency: 0,
        text: "ADMIN", textColor: "#ff4444", fontSize: 11, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#ff4444", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff0000", shadowBlur: 8, shadowX: 0, shadowY: 0, shadowOpacity: 0.45,
      }
    },
    {
      name: "Dev Tag",
      type: "textlabel",
      thumb: { bg: "#0a1a2e", text: "#00b4d8", radius: 4, border: "#00b4d8" },
      props: {
        width: 90, height: 26, color: "#0a1a2e", transparency: 0,
        text: "DEV", textColor: "#00b4d8", fontSize: 11, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#00b4d8", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00b4d8", shadowBlur: 8, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Pastel Title",
      type: "textlabel",
      thumb: { bg: "transparent", text: "#ff9ecd", radius: 0 },
      props: {
        width: 200, height: 40, color: "#000000", transparency: 1,
        text: "My Game ✨", textColor: "#ff9ecd", fontSize: 22, font: "Cartoon",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: false, cornerRadius: 0,
        strokeEnabled: false, strokeColor: "#000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff4d94", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.5,
      }
    },
  ],

  "Frames II": [
    {
      name: "Neon Frame",
      type: "frame",
      thumb: { bg: "#050510", radius: 6, border: "#00eaff" },
      props: {
        width: 220, height: 140, color: "#050510", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#00eaff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 22, shadowX: 0, shadowY: 0, shadowOpacity: 0.45,
      }
    },
    {
      name: "Frosted White",
      type: "frame",
      thumb: { bg: "#f5f5f5", radius: 14, border: "#e0e0e0" },
      props: {
        width: 220, height: 140, color: "#f5f5f5", transparency: 0.15,
        text: "", textColor: "#333", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: true, strokeColor: "#e0e0e0", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#999999", shadowBlur: 20, shadowX: 0, shadowY: 6, shadowOpacity: 0.3,
      }
    },
    {
      name: "Ocean Deep",
      type: "frame",
      thumb: { bg: "#021b2e", radius: 10, border: "#0a5f7a" },
      props: {
        width: 220, height: 140, color: "#021b2e", transparency: 0,
        text: "", textColor: "#7ed6f7", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#0a5f7a", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00b4d8", shadowBlur: 16, shadowX: 0, shadowY: 4, shadowOpacity: 0.25,
      }
    },
    {
      name: "Fire Frame",
      type: "frame",
      thumb: { bg: "#1a0500", radius: 8, border: "#ff4500" },
      props: {
        width: 220, height: 140, color: "#1a0500", transparency: 0,
        text: "", textColor: "#ff6b35", fontSize: 14, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#ff4500", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff2200", shadowBlur: 20, shadowX: 0, shadowY: 0, shadowOpacity: 0.45,
      }
    },
    {
      name: "Retro Terminal",
      type: "frame",
      thumb: { bg: "#0a0a00", radius: 2, border: "#39ff14" },
      props: {
        width: 240, height: 150, color: "#0a0a00", transparency: 0,
        text: "", textColor: "#39ff14", fontSize: 12, font: "Code",
        textXAlign: "Left", textYAlign: "Top", textTruncate: false,
        cornerEnabled: true, cornerRadius: 2,
        strokeEnabled: true, strokeColor: "#39ff14", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#39ff14", shadowBlur: 12, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Purple Galaxy",
      type: "frame",
      thumb: { bg: "#1a0a2e", radius: 12, border: "#7b2ff7" },
      props: {
        width: 220, height: 140, color: "#1a0a2e", transparency: 0,
        text: "", textColor: "#bf5fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 12,
        strokeEnabled: true, strokeColor: "#7b2ff7", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7b2ff7", shadowBlur: 22, shadowX: 0, shadowY: 0, shadowOpacity: 0.45,
      }
    },
    {
      name: "Sand Desert",
      type: "frame",
      thumb: { bg: "#d4a96a", radius: 4, border: "#a07040" },
      props: {
        width: 210, height: 130, color: "#d4a96a", transparency: 0,
        text: "", textColor: "#3d2007", fontSize: 14, font: "ArialBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#a07040", strokeThickness: 3, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#3d2007", shadowBlur: 10, shadowX: 3, shadowY: 4, shadowOpacity: 0.5,
      }
    },
    {
      name: "Arctic White",
      type: "frame",
      thumb: { bg: "#e8f4ff", radius: 10, border: "#b8d8f0" },
      props: {
        width: 210, height: 130, color: "#e8f4ff", transparency: 0,
        text: "", textColor: "#2c5f8a", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#b8d8f0", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#2c5f8a", shadowBlur: 14, shadowX: 0, shadowY: 5, shadowOpacity: 0.2,
      }
    },
  ],

  "Popups": [
    {
      name: "Confirm Dialog",
      type: "frame",
      thumb: { bg: "#16213e", radius: 14, border: "#0f3460" },
      props: {
        width: 280, height: 180, color: "#16213e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 14,
        strokeEnabled: true, strokeColor: "#0f3460", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 30, shadowX: 0, shadowY: 10, shadowOpacity: 0.7,
      }
    },
    {
      name: "Shop Panel",
      type: "frame",
      thumb: { bg: "#1a1200", radius: 10, border: "#ffd700" },
      props: {
        width: 260, height: 200, color: "#1a1200", transparency: 0,
        text: "", textColor: "#ffd700", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#ffd700", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ffd700", shadowBlur: 18, shadowX: 0, shadowY: 0, shadowOpacity: 0.25,
      }
    },
    {
      name: "Level Up!",
      type: "frame",
      thumb: { bg: "#0d0015", radius: 16, border: "#bf5fff" },
      props: {
        width: 280, height: 160, color: "#0d0015", transparency: 0,
        text: "", textColor: "#bf5fff", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 16,
        strokeEnabled: true, strokeColor: "#bf5fff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#7b2ff7", shadowBlur: 28, shadowX: 0, shadowY: 0, shadowOpacity: 0.6,
      }
    },
    {
      name: "Death Screen",
      type: "frame",
      thumb: { bg: "#1a0000", radius: 6, border: "#8b0000" },
      props: {
        width: 280, height: 160, color: "#1a0000", transparency: 0,
        text: "", textColor: "#ff4444", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#8b0000", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff0000", shadowBlur: 24, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Mission Complete",
      type: "frame",
      thumb: { bg: "#001a06", radius: 10, border: "#00ff66" },
      props: {
        width: 280, height: 160, color: "#001a06", transparency: 0,
        text: "", textColor: "#00ff66", fontSize: 14, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#00ff66", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00ff66", shadowBlur: 24, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Inventory Slot",
      type: "frame",
      thumb: { bg: "#1e1e1e", radius: 6, border: "#444" },
      props: {
        width: 64, height: 64, color: "#1e1e1e", transparency: 0,
        text: "", textColor: "#fff", fontSize: 14, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#444444", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.5,
      }
    },
    {
      name: "Tooltip Box",
      type: "frame",
      thumb: { bg: "#111118", radius: 6, border: "#2a2a3a" },
      props: {
        width: 180, height: 70, color: "#111118", transparency: 0.1,
        text: "", textColor: "#cccccc", fontSize: 12, font: "SourceSansPro",
        textXAlign: "Left", textYAlign: "Top", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#2a2a3a", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 12, shadowX: 0, shadowY: 4, shadowOpacity: 0.5,
      }
    },
  ],

  "HUD II": [
    {
      name: "Shield Bar",
      type: "frame",
      thumb: { bg: "#1a3a5c", radius: 6, border: "#00b4d8" },
      props: {
        width: 200, height: 22, color: "#1a3a5c", transparency: 0,
        text: "", textColor: "#fff", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#00b4d8", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#00b4d8", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.4,
      }
    },
    {
      name: "Stamina Bar",
      type: "frame",
      thumb: { bg: "#2a1a00", radius: 6, border: "#ff9900" },
      props: {
        width: 200, height: 22, color: "#2a1a00", transparency: 0,
        text: "", textColor: "#fff", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#ff9900", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff9900", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.4,
      }
    },
    {
      name: "Ammo Counter",
      type: "textlabel",
      thumb: { bg: "#111", text: "#fff", radius: 4, border: "#444" },
      props: {
        width: 110, height: 36, color: "#111111", transparency: 0,
        text: "🔫 12 / 30", textColor: "#ffffff", fontSize: 14, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#444444", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 8, shadowX: 0, shadowY: 2, shadowOpacity: 0.6,
      }
    },
    {
      name: "Speed Display",
      type: "textlabel",
      thumb: { bg: "#0a1628", text: "#00eaff", radius: 4, border: "#00eaff" },
      props: {
        width: 100, height: 34, color: "#0a1628", transparency: 0,
        text: "187 km/h", textColor: "#00eaff", fontSize: 13, font: "RobotoMono",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 4,
        strokeEnabled: true, strokeColor: "#00eaff", strokeThickness: 1, strokeTransparency: 0.5,
        shadowEnabled: true, shadowColor: "#00eaff", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Timer HUD",
      type: "textlabel",
      thumb: { bg: "#1a1a1a", text: "#ffffff", radius: 8, border: "#333" },
      props: {
        width: 110, height: 42, color: "#1a1a1a", transparency: 0,
        text: "⏱ 02:45", textColor: "#ffffff", fontSize: 16, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#333333", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 10, shadowX: 0, shadowY: 3, shadowOpacity: 0.5,
      }
    },
    {
      name: "Kill Streak",
      type: "textlabel",
      thumb: { bg: "#2c0a0a", text: "#ff4444", radius: 6, border: "#8b0000" },
      props: {
        width: 130, height: 36, color: "#2c0a0a", transparency: 0,
        text: "🔥 x5 STREAK", textColor: "#ff6666", fontSize: 12, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#8b0000", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff0000", shadowBlur: 12, shadowX: 0, shadowY: 0, shadowOpacity: 0.4,
      }
    },
    {
      name: "Gem Counter",
      type: "textlabel",
      thumb: { bg: "#1a0a2e", text: "#bf5fff", radius: 20, border: "#7b2ff7" },
      props: {
        width: 120, height: 34, color: "#1a0a2e", transparency: 0,
        text: "💎 3,400", textColor: "#bf5fff", fontSize: 13, font: "GothamBold",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 17,
        strokeEnabled: true, strokeColor: "#7b2ff7", strokeThickness: 1, strokeTransparency: 0.3,
        shadowEnabled: true, shadowColor: "#7b2ff7", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "Crosshair Frame",
      type: "frame",
      thumb: { bg: "transparent", radius: 50, border: "#ffffff" },
      props: {
        width: 30, height: 30, color: "#000000", transparency: 1,
        text: "", textColor: "#fff", fontSize: 12, font: "Gotham",
        textXAlign: "Center", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 15,
        strokeEnabled: true, strokeColor: "#ffffff", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 4, shadowX: 0, shadowY: 0, shadowOpacity: 0.8,
      }
    },
  ],

  "Notifications II": [
    {
      name: "Chat Message",
      type: "frame",
      thumb: { bg: "#111118", radius: 8, border: "#2a2a3a" },
      props: {
        width: 260, height: 52, color: "#111118", transparency: 0.15,
        text: "", textColor: "#cccccc", fontSize: 13, font: "SourceSansPro",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 8,
        strokeEnabled: true, strokeColor: "#2a2a3a", strokeThickness: 1, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#000000", shadowBlur: 10, shadowX: 0, shadowY: 3, shadowOpacity: 0.4,
      }
    },
    {
      name: "VIP Announce",
      type: "frame",
      thumb: { bg: "#1a1200", radius: 10, border: "#ffd700" },
      props: {
        width: 270, height: 56, color: "#1a1200", transparency: 0,
        text: "", textColor: "#ffd700", fontSize: 14, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 10,
        strokeEnabled: true, strokeColor: "#ffd700", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ffd700", shadowBlur: 14, shadowX: 0, shadowY: 0, shadowOpacity: 0.3,
      }
    },
    {
      name: "System Message",
      type: "frame",
      thumb: { bg: "#0a0a1a", radius: 6, border: "#4466ff" },
      props: {
        width: 270, height: 52, color: "#0a0a1a", transparency: 0,
        text: "", textColor: "#99aaff", fontSize: 12, font: "Gotham",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#4466ff", strokeThickness: 1, strokeTransparency: 0.3,
        shadowEnabled: true, shadowColor: "#4466ff", shadowBlur: 10, shadowX: 0, shadowY: 0, shadowOpacity: 0.25,
      }
    },
    {
      name: "Ban Warning",
      type: "frame",
      thumb: { bg: "#1a0000", radius: 6, border: "#ff0000" },
      props: {
        width: 270, height: 60, color: "#1a0000", transparency: 0,
        text: "", textColor: "#ff4444", fontSize: 13, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 6,
        strokeEnabled: true, strokeColor: "#ff0000", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ff0000", shadowBlur: 16, shadowX: 0, shadowY: 0, shadowOpacity: 0.45,
      }
    },
    {
      name: "Achievement",
      type: "frame",
      thumb: { bg: "#1a1200", radius: 12, border: "#ffd700" },
      props: {
        width: 270, height: 64, color: "#1a1200", transparency: 0,
        text: "", textColor: "#ffd700", fontSize: 14, font: "GothamBold",
        textXAlign: "Left", textYAlign: "Center", textTruncate: false,
        cornerEnabled: true, cornerRadius: 12,
        strokeEnabled: true, strokeColor: "#ffd700", strokeThickness: 2, strokeTransparency: 0,
        shadowEnabled: true, shadowColor: "#ffd700", shadowBlur: 18, shadowX: 0, shadowY: 0, shadowOpacity: 0.35,
      }
    },
  ],
});

// ─────────────────────────────────────────────
//  Preset UI — onglet dans sidebar gauche
// ─────────────────────────────────────────────

function initPresetsTab() {
  const leftSidebar = document.querySelector(".sidebar.left");

  // Tabs header
  leftSidebar.innerHTML = `
    <div class="sidebar-tabs">
      <button class="stab active" data-tab="hierarchy">Hiérarchie</button>
      <button class="stab" data-tab="presets">Presets</button>
    </div>
    <div id="tab-hierarchy" class="tab-content">
      <div id="hierarchy"></div>
    </div>
    <div id="tab-presets" class="tab-content" style="display:none">
      <div id="preset-categories"></div>
    </div>
  `;

  // Tab switching
  leftSidebar.querySelectorAll(".stab").forEach(btn => {
    btn.addEventListener("click", () => {
      leftSidebar.querySelectorAll(".stab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      document.getElementById("tab-hierarchy").style.display = tab === "hierarchy" ? "block" : "none";
      document.getElementById("tab-presets").style.display   = tab === "presets"   ? "block" : "none";
    });
  });

  buildPresetPanel();
}

function buildPresetPanel() {
  const container = document.getElementById("preset-categories");

  Object.entries(PRESETS).forEach(([category, presets]) => {
    const section = document.createElement("div");
    section.className = "preset-category";

    const header = document.createElement("div");
    header.className = "preset-cat-header";
    header.innerHTML = `<span>${category}</span><span class="preset-cat-arrow">▾</span>`;

    const grid = document.createElement("div");
    grid.className = "preset-grid";

    presets.forEach(preset => {
      const card = document.createElement("div");
      card.className = "preset-card";
      card.title = preset.name;

      // Thumbnail
      const thumb = document.createElement("div");
      thumb.className = "preset-thumb";
      const t = preset.thumb;
      thumb.style.background    = t.bg || "#333";
      thumb.style.borderRadius  = (t.radius || 4) + "px";
      thumb.style.border        = t.border ? `2px solid ${t.border}` : "2px solid #2a2a4a";
      if (t.shadow) thumb.style.boxShadow = `0 3px 8px rgba(0,0,0,0.5)`;
      if (t.text && preset.type !== "frame") {
        thumb.style.color      = t.text;
        thumb.style.display    = "flex";
        thumb.style.alignItems = "center";
        thumb.style.justifyContent = "center";
        thumb.style.fontSize   = "10px";
        thumb.style.fontWeight = "700";
        thumb.textContent      = preset.props.text || "";
      }

      const label = document.createElement("div");
      label.className = "preset-label";
      label.textContent = preset.name;

      card.appendChild(thumb);
      card.appendChild(label);

      card.addEventListener("click", () => applyPreset(preset));
      grid.appendChild(card);
    });

    // Collapse toggle
    header.addEventListener("click", () => {
      const open = grid.style.display !== "none";
      grid.style.display = open ? "none" : "grid";
      header.querySelector(".preset-cat-arrow").textContent = open ? "▸" : "▾";
    });

    section.appendChild(header);
    section.appendChild(grid);
    container.appendChild(section);
  });
}

function applyPreset(preset) {
  // Create a new element with preset props
  idCounter++;
  const id = `${preset.type}_${idCounter}`;
  const props = Object.assign({}, preset.props, { name: id, x: 60, y: 60 });

  const el = document.createElement("div");
  el.className = `roblox-element roblox-${preset.type}`;
  el.dataset.id = id;

  applyPropsToEl(el, props, preset.type);
  attachDragListeners(el);
  canvas.appendChild(el);

  const entry = { id, type: preset.type, el, props };
  elements.push(entry);

  updateHierarchy();
  selectElement(id);

  // Switch back to hierarchy tab to see it
  document.querySelectorAll(".stab").forEach(b => b.classList.remove("active"));
  document.querySelector(".stab[data-tab='hierarchy']").classList.add("active");
  document.getElementById("tab-hierarchy").style.display = "block";
  document.getElementById("tab-presets").style.display   = "none";
}
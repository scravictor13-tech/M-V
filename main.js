const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs   = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      devTools: true,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    }
  });
  win.loadFile("index.html");
  // win.webContents.openDevTools();
}

// Scan textures/ → retourne des data URLs base64
ipcMain.handle("get-textures", () => {
  const texturesDir = path.join(__dirname, "textures");
  if (!fs.existsSync(texturesDir)) { fs.mkdirSync(texturesDir); return []; }

  const mimeMap = {
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif":  "image/gif",
  };

  const allowed = Object.keys(mimeMap);

  return fs.readdirSync(texturesDir)
    .filter(f => allowed.includes(path.extname(f).toLowerCase()))
    .map(f => {
      const filePath = path.join(texturesDir, f);
      const ext      = path.extname(f).toLowerCase();
      const mime     = mimeMap[ext];
      const base64   = fs.readFileSync(filePath).toString("base64");
      const dataUrl  = `data:${mime};base64,${base64}`;
      return {
        name: path.basename(f, ext),
        file: f,
        url:  dataUrl,   // ← data URL, fonctionne partout dans CSS
      };
    });
});

app.whenReady().then(createWindow);
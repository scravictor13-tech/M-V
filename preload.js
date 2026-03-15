const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getTextures: () => ipcRenderer.invoke("get-textures"),
});
const { contextBridge, ipcRenderer } = require("electron");
const { encrypt, decrypt } = require("./crypto");

contextBridge.exposeInMainWorld("db", {
  checkMasterPassword: () => ipcRenderer.invoke("check-master-password"),
  createMasterPassword: password =>
    ipcRenderer.invoke("create-master-password", password),
  authenticate: password => ipcRenderer.invoke("authenticate", password),
  addAccount: data => ipcRenderer.invoke("saveAccount", data),
  getAllAccounts: () => ipcRenderer.invoke("getAllAccounts"),
  saveAccount: data => ipcRenderer.invoke("saveAccount", data),
  deleteAccount: id => ipcRenderer.invoke("deleteAccount", id),
  updateAccount: data => ipcRenderer.invoke("updateAccount", data),
  deleteVault: () => ipcRenderer.invoke("deleteVault"),
  createVault: () => ipcRenderer.invoke("createVault"),
});

contextBridge.exposeInMainWorld("electronCrypto", {
  encrypt,
  decrypt,
});

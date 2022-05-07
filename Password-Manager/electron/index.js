const path = require("path");

const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const {
  connect,
  createTable,
  addAccount,
  getAllAccounts,
  createMasterPassword,
  authenticate,
  checkIfMasterPasswordExists,
  removeAccount,
  updateAccount,
  deleteVault,
} = require("./db");
const { wrap: catchError } = require("./utils");

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1280,
    minHeight: 720,
    title: "Vault",
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.menuBarVisible = false;

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
};

const addHandlers = () => {
  ipcMain.handle(
    "check-master-password",
    catchError(checkIfMasterPasswordExists)
  );
  ipcMain.handle("create-master-password", catchError(createMasterPassword));
  ipcMain.handle("authenticate", catchError(authenticate));
  ipcMain.handle("saveAccount", catchError(addAccount));
  ipcMain.handle("getAllAccounts", catchError(getAllAccounts));
  ipcMain.handle("deleteAccount", catchError(removeAccount));
  ipcMain.handle("updateAccount", catchError(updateAccount));
  ipcMain.handle("deleteVault", catchError(deleteVault));
  ipcMain.handle("createVault", catchError(createTable));
};

app.whenReady().then(async () => {
  try {
    await connect(app);
    await createTable();
    createWindow();

    // Renderer-to-main two-way process communication
    addHandlers();
  } catch (err) {
    dialog.showErrorBox("Error", err.message);
    app.quit();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

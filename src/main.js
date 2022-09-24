const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow();
  win.loadURL("https://lichess.org");
  win.maximize();
};

app.on("window-all-closed", () =>
  process.platform !== "darwin" ? app.quit() : _
);

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

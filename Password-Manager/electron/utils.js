const { dialog } = require("electron");

module.exports.wrap = fn => {
  return async (event, args) => {
    try {
      const data = await fn(args);
      return data;
    } catch (err) {
      dialog.showErrorBox("Error", err.message);
    }
  };
};

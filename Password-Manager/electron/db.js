const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const { hash } = require("./crypto");

let db;

module.exports.connect = app => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(
      path.join(app.getPath("userData"), "password-manager.db"),
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      }
    );
  });
};

module.exports.createTable = () => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS accounts (id TEXT PRIMARY KEY, name TEXT, subName TEXT, email TEXT, password TEXT, url TEXT)`,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

module.exports.checkIfMasterPasswordExists = () => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM MASTER_PASSWORD`, (err, row) => {
      if (err) {
        resolve(false);
      } else {
        if (!row) {
          resolve(false);
        } else {
          resolve(true);
        }
      }
    });
  });
};

module.exports.createMasterPassword = password => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS MASTER_PASSWORD (password TEXT)`,
      err => {
        if (err) {
          reject(false);
        } else {
          db.run(
            `INSERT INTO MASTER_PASSWORD (password) VALUES (?)`,
            [hash(password)],
            err => {
              if (err) {
                reject(false);
              } else {
                resolve(true);
              }
            }
          );
        }
      }
    );
  });
};

module.exports.updateMasterPassword = password => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE MASTER_PASSWORD SET password = ?`, [hash(password)], err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports.authenticate = password => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM MASTER_PASSWORD WHERE password = ?`,
      [hash(password)],
      (err, row) => {
        if (err) {
          reject(false);
        } else {
          if (!row) {
            return resolve(false);
          }
          resolve(true);
        }
      }
    );
  });
};

module.exports.getAllAccounts = () => {
  return new Promise((res, rej) => {
    db.all(`SELECT * FROM accounts`, (err, rows) => {
      if (err) {
        rej(err.message);
      } else {
        res(rows);
      }
    });
  });
};

module.exports.addAccount = data => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO accounts (id, name, subName, email, password, url) VALUES (?, ?, ?, ?, ?, ?)`,
      [data.id, data.name, data.subName, data.email, data.password, data.url],
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

module.exports.removeAccount = id => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM accounts WHERE id = ?`, [id], err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports.updateAccount = data => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE accounts SET name = ?, subName = ?, email = ?, password = ?, url = ? WHERE id = ?`,
      [data.name, data.subName, data.email, data.password, data.url, data.id],
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

module.exports.deleteVault = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE accounts`, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

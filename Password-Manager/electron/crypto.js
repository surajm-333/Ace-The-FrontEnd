const crypto = require("crypto");

const algorithm = "aes-256-ctr";

const encrypt = (data, passphrase) => {
  const secretKey = crypto.createHash("sha256").update(passphrase).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

  return iv.toString("hex") + encrypted.toString("hex");
};

const decrypt = (hash, passphrase) => {
  const secretKey = crypto.createHash("sha256").update(passphrase).digest();
  const iv = Buffer.from(hash.substring(0, 32), "hex");
  const encryptedText = Buffer.from(hash.substring(32), "hex");

  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

const hash = data => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
};

module.exports = {
  encrypt,
  decrypt,
  hash,
};

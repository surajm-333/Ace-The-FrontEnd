const generate = ({
  uppercase = true,
  lowercase = true,
  numbers = true,
  symbols = true,
  length = 8,
  exclude = [],
}) => {
  let chars = [];
  if (uppercase) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  if (lowercase) chars.push(..."abcdefghijklmnopqrstuvwxyz".split(""));
  if (numbers) chars.push(..."0123456789".split(""));
  if (symbols) chars.push(..."!@#$%^&*()".split(""));

  chars = chars.filter(c => !exclude.includes(c));

  return Array(length)
    .fill(0)
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
};

const checkStrength = password => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (password.match(/[a-z]/)) strength += 1;
  if (password.match(/[A-Z]/)) strength += 1;
  if (password.match(/[0-9]/)) strength += 1;
  if (password.match(/[!@#$%^&*()]/)) strength += 1;

  if (strength <= 2) return "Weak";
  if (strength <= 4) return "Medium";
  return "Strong";
};

const getColorFromStrength = strength => {
  switch (strength) {
    case "Weak":
      return "red";
    case "Medium":
      return "orange";
    case "Strong":
      return "green";
    default:
      return "black";
  }
};

export { generate, checkStrength, getColorFromStrength };

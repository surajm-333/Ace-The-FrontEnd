const colors = {
  Red: {
    "50": "#ffebee",
    "100": "#ffcdd2",
    "200": "#ef9a9a",
    "300": "#e57373",
    "400": "#ef5350",
    "500": "#f44336",
    "600": "#e53935",
    "700": "#d32f2f",
    "800": "#c62828",
    "900": "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Pink: {
    "50": "#fce4ec",
    "100": "#f8bbd0",
    "200": "#f48fb1",
    "300": "#f06292",
    "400": "#ec407a",
    "500": "#e91e63",
    "600": "#d81b60",
    "700": "#c2185b",
    "800": "#ad1457",
    "900": "#880e4f",
    A100: "#ff80ab",
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162",
  },
  Purple: {
    "50": "#f3e5f5",
    "100": "#e1bee7",
    "200": "#ce93d8",
    "300": "#ba68c8",
    "400": "#ab47bc",
    "500": "#9c27b0",
    "600": "#8e24aa",
    "700": "#7b1fa2",
    "800": "#6a1b9a",
    "900": "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  "Deep Purple": {
    "50": "#ede7f6",
    "100": "#d1c4e9",
    "200": "#b39ddb",
    "300": "#9575cd",
    "400": "#7e57c2",
    "500": "#673ab7",
    "600": "#5e35b1",
    "700": "#512da8",
    "800": "#4527a0",
    "900": "#311b92",
    A100: "#b388ff",
    A200: "#7c4dff",
    A400: "#651fff",
    A700: "#6200ea",
  },
  Indigo: {
    "50": "#e8eaf6",
    "100": "#c5cae9",
    "200": "#9fa8da",
    "300": "#7986cb",
    "400": "#5c6bc0",
    "500": "#3f51b5",
    "600": "#3949ab",
    "700": "#303f9f",
    "800": "#283593",
    "900": "#1a237e",
    A100: "#8c9eff",
    A200: "#536dfe",
    A400: "#3d5afe",
    A700: "#304ffe",
  },
  Blue: {
    "50": "#e3f2fd",
    "100": "#bbdefb",
    "200": "#90caf9",
    "300": "#64b5f6",
    "400": "#42a5f5",
    "500": "#2196f3",
    "600": "#1e88e5",
    "700": "#1976d2",
    "800": "#1565c0",
    "900": "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  "Light Blue": {
    "50": "#e1f5fe",
    "100": "#b3e5fc",
    "200": "#81d4fa",
    "300": "#4fc3f7",
    "400": "#29b6f6",
    "500": "#03a9f4",
    "600": "#039be5",
    "700": "#0288d1",
    "800": "#0277bd",
    "900": "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Cyan: {
    "50": "#e0f7fa",
    "100": "#b2ebf2",
    "200": "#80deea",
    "300": "#4dd0e1",
    "400": "#26c6da",
    "500": "#00bcd4",
    "600": "#00acc1",
    "700": "#0097a7",
    "800": "#00838f",
    "900": "#006064",
    A100: "#84ffff",
    A200: "#18ffff",
    A400: "#00e5ff",
    A700: "#00b8d4",
  },
  Teal: {
    "50": "#e0f2f1",
    "100": "#b2dfdb",
    "200": "#80cbc4",
    "300": "#4db6ac",
    "400": "#26a69a",
    "500": "#009688",
    "600": "#00897b",
    "700": "#00796b",
    "800": "#00695c",
    "900": "#004d40",
    A100: "#a7ffeb",
    A200: "#64ffda",
    A400: "#1de9b6",
    A700: "#00bfa5",
  },
  Green: {
    "50": "#e8f5e9",
    "100": "#c8e6c9",
    "200": "#a5d6a7",
    "300": "#81c784",
    "400": "#66bb6a",
    "500": "#4caf50",
    "600": "#43a047",
    "700": "#388e3c",
    "800": "#2e7d32",
    "900": "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  "Light Green": {
    "50": "#f1f8e9",
    "100": "#dcedc8",
    "200": "#c5e1a5",
    "300": "#aed581",
    "400": "#9ccc65",
    "500": "#8bc34a",
    "600": "#7cb342",
    "700": "#689f38",
    "800": "#558b2f",
    "900": "#33691e",
    A100: "#ccff90",
    A200: "#b2ff59",
    A400: "#76ff03",
    A700: "#64dd17",
  },
  Lime: {
    "50": "#f9fbe7",
    "100": "#f0f4c3",
    "200": "#e6ee9c",
    "300": "#dce775",
    "400": "#d4e157",
    "500": "#cddc39",
    "600": "#c0ca33",
    "700": "#afb42b",
    "800": "#9e9d24",
    "900": "#827717",
    A100: "#f4ff81",
    A200: "#eeff41",
    A400: "#c6ff00",
    A700: "#aeea00",
  },
  Yellow: {
    "50": "#fffde7",
    "100": "#fff9c4",
    "200": "#fff59d",
    "300": "#fff176",
    "400": "#ffee58",
    "500": "#ffeb3b",
    "600": "#fdd835",
    "700": "#fbc02d",
    "800": "#f9a825",
    "900": "#f57f17",
    A100: "#ffff8d",
    A200: "#ffff00",
    A400: "#ffea00",
    A700: "#ffd600",
  },
  Amber: {
    "50": "#fff8e1",
    "100": "#ffecb3",
    "200": "#ffe082",
    "300": "#ffd54f",
    "400": "#ffca28",
    "500": "#ffc107",
    "600": "#ffb300",
    "700": "#ffa000",
    "800": "#ff8f00",
    "900": "#ff6f00",
    A100: "#ffe57f",
    A200: "#ffd740",
    A400: "#ffc400",
    A700: "#ffab00",
  },
  Orange: {
    "50": "#fff3e0",
    "100": "#ffe0b2",
    "200": "#ffcc80",
    "300": "#ffb74d",
    "400": "#ffa726",
    "500": "#ff9800",
    "600": "#fb8c00",
    "700": "#f57c00",
    "800": "#ef6c00",
    "900": "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  "Deep Orange": {
    "50": "#fbe9e7",
    "100": "#ffccbc",
    "200": "#ffab91",
    "300": "#ff8a65",
    "400": "#ff7043",
    "500": "#ff5722",
    "600": "#f4511e",
    "700": "#e64a19",
    "800": "#d84315",
    "900": "#bf360c",
    A100: "#ff9e80",
    A200: "#ff6e40",
    A400: "#ff3d00",
    A700: "#dd2c00",
  },
  Brown: {
    "50": "#efebe9",
    "100": "#d7ccc8",
    "200": "#bcaaa4",
    "300": "#a1887f",
    "400": "#8d6e63",
    "500": "#795548",
    "600": "#6d4c41",
    "700": "#5d4037",
    "800": "#4e342e",
    "900": "#3e2723",
  },
  Grey: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
  },
  "Blue Grey": {
    "50": "#eceff1",
    "100": "#cfd8dc",
    "200": "#b0bec5",
    "300": "#90a4ae",
    "400": "#78909c",
    "500": "#607d8b",
    "600": "#546e7a",
    "700": "#455a64",
    "800": "#37474f",
    "900": "#263238",
  },
};
const bgc = document.getElementById("bg-color");
const fgc = document.getElementById("color");
const bg = document.getElementById("bg");
const fg = document.getElementById("fg");
const random = document.getElementById("random");
const swap = document.getElementById("swap");
const combocircle = document.getElementById("combocircle");
const gradcircle = document.getElementById("gradcircle");
const navcircles = document.getElementById("navcircles");
const gradcolors = document.getElementById("gradcolors");
const matcolors = document.getElementById("matcolors");
const snackbar = document.getElementById("snackbar");
let picker1 = new Picker({
  parent: bgc,
  color: "#212121",
  popup: "top",
  alpha: false,
  onChange({ rgbaString }) {
    bgc.style.backgroundColor = rgbaString;
  },
});
let picker2 = new Picker({
  parent: fgc,
  color: "#DEDEDE",
  popup: "top",
  alpha: false,
  onChange({ rgbaString }) {
    fgc.style.backgroundColor = rgbaString;
  },
});
const complementaryColor = (color) => {
  let hexColor = color.replace("#", "0x");
  return `#${`000000${("0xffffff" ^ hexColor).toString(16)}`.slice(-6)}`;
};
const processValue = ({ dataType, value }) => {
  switch (dataType) {
    case HEX: {
      return processHEX(value);
    }
  }
};
const processHEX = (val) => {
  let hex = val.length > 6 ? val.substr(1, val.length - 1) : val;
  if (hex.length > 3) {
    var r = hex.substr(0, 2);
    var g = hex.substr(2, 2);
    var b = hex.substr(4, 2);
  } else {
    var r = hex.substr(0, 1) + hex.substr(0, 1);
    var g = hex.substr(1, 1) + hex.substr(1, 1);
    var b = hex.substr(2, 1) + hex.substr(2, 1);
  }
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
};
const updateSpitter = () => {
  let val1RGB = processHEX(picker1.color.hex.slice(0, -2));
  let val2RGB = processHEX(picker2.color.hex.slice(0, -2));
  let colors = [];
  let stepsInt = parseInt(steps.value, 10);
  let stepsPerc = 100 / (stepsInt + 1);
  let valClampRGB = [
    val2RGB[0] - val1RGB[0],
    val2RGB[1] - val1RGB[1],
    val2RGB[2] - val1RGB[2],
  ];
  for (let i = 0; i < stepsInt; i++) {
    let clampedR =
      valClampRGB[0] > 0
        ? pad(
            Math.round((valClampRGB[0] / 100) * (stepsPerc * (i + 1))).toString(
              16
            ),
            2
          )
        : pad(
            Math.round(
              val1RGB[0] + (valClampRGB[0] / 100) * (stepsPerc * (i + 1))
            ).toString(16),
            2
          );
    let clampedG =
      valClampRGB[1] > 0
        ? pad(
            Math.round((valClampRGB[1] / 100) * (stepsPerc * (i + 1))).toString(
              16
            ),
            2
          )
        : pad(
            Math.round(
              val1RGB[1] + (valClampRGB[1] / 100) * (stepsPerc * (i + 1))
            ).toString(16),
            2
          );
    let clampedB =
      valClampRGB[2] > 0
        ? pad(
            Math.round((valClampRGB[2] / 100) * (stepsPerc * (i + 1))).toString(
              16
            ),
            2
          )
        : pad(
            Math.round(
              val1RGB[2] + (valClampRGB[2] / 100) * (stepsPerc * (i + 1))
            ).toString(16),
            2
          );
    colors[i] = ["#", clampedR, clampedG, clampedB].join("");
  }
  let html =
    `<div class='family'><div class='color'><span class='btn gpicker' data-bg-color='${picker1.color.hex.slice(
      0,
      -2
    )}' data-color='` +
    complementaryColor(picker1.color.hex.slice(0, -2)) +
    `' style='background: ${picker1.color.hex.slice(
      0,
      -2
    )};'></span><b>0%</b><input type='text' readonly class='hex' id='${picker1.color.hex.slice(
      0,
      -2
    )}' value='${picker1.color.hex.slice(
      0,
      -2
    )}' onclick='copy(this.id);'></div>`;
  Object.keys(colors).forEach((i) => {
    html +=
      `<div class='color'><span class='btn gpicker' data-bg-color='${colors[i]}' data-color='` +
      complementaryColor(colors[i]) +
      `' style='background: ${colors[i]};'></span><b>`;
    html += +i + +1;
    html += `</b><input type='text' readonly class='hex' id='${colors[i]}' value='${colors[i]}' onclick='copy(this.id);'></div>`;
  });
  html +=
    `<div class='color'><span class='btn gpicker' data-bg-color='${picker2.color.hex.slice(
      0,
      -2
    )}' data-color='` +
    complementaryColor(picker2.color.hex.slice(0, -2)) +
    `' style='background: ${picker2.color.hex.slice(
      0,
      -2
    )};'></span><b>100%</b><input type='text' readonly class='hex' id='${picker2.color.hex.slice(
      0,
      -2
    )}' value='${picker2.color.hex.slice(
      0,
      -2
    )}' onclick='copy(this.id);'></div>`;
  gradcolors.innerHTML = html;
  let themeSwitchers = document.querySelectorAll(".gpicker");
  themeSwitchers.forEach((item) => {
    item.addEventListener("click", ({ target }) => {
      handleThemeUpdate({
        "--primary-bg-color": target.getAttribute("data-bg-color"),
        "--primary-color": target.getAttribute("data-color"),
      });
    });
  });
};
const pad = (n, width, z = "0") => {
  n = `${n}`;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
updateSpitter();
let pallet = "";
let circles = "";
Object.keys(colors).forEach((col) => {
  pallet +=
    `<nav class='title'><span class='circle' style='background:${colors[col][500]};'></span><h4 id='` +
    col.toLowerCase().replace(/\s+/gi, "-") +
    `'>${col}</h4></nav><div class='family'>`;
  circles +=
    `<a href="javascript:void(0);" class='circle' onclick='document.getElementById("` +
    col.toLowerCase().replace(/\s+/gi, "-") +
    `").scrollIntoView({behavior: "smooth"});' style='background:${colors[col][500]};'></a>`;
  Object.keys(colors[col]).forEach((shade) => {
    pallet +=
      `<div class='color'><span class='btn picker' data-bg-color='${colors[col][shade]}' data-color='` +
      complementaryColor(colors[col][shade]) +
      `' style='background: ${colors[col][shade]};'></span><b>${shade}</b><input type='text' readonly class='hex' id='${colors[col][shade]}' value='${colors[col][shade]}' onclick='copy(this.id);'></div>`;
  });
  pallet += "</div>";
});
matcolors.innerHTML = pallet;
navcircles.innerHTML = circles;
let themeSwitchers = document.querySelectorAll(".picker");
const handleThemeUpdate = (cssVars) => {
  let root = document.querySelector(":root");
  let keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
    let pbg = getComputedStyle(document.body)
      .getPropertyValue("--primary-bg-color")
      .replace(/\s+/gi, "");
    let pfg = getComputedStyle(document.body)
      .getPropertyValue("--primary-color")
      .replace(/\s+/gi, "");
    picker1.setColor(pbg);
    picker2.setColor(pfg);
    bg.value = pbg;
    fg.value = pfg;
    combocircle.style.background = `linear-gradient(to right, ${pbg} 50%, ${pfg} 50%)`;
    gradcircle.style.background = `linear-gradient(to right, ${pbg}, ${pfg})`;
    updateSpitter();
    navcircles.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};
themeSwitchers.forEach((item) => {
  item.addEventListener("click", ({ target }) => {
    handleThemeUpdate({
      "--primary-bg-color": target.getAttribute("data-bg-color"),
      "--primary-color": target.getAttribute("data-color"),
    });
  });
});
picker1.onClose = ({ hex }) => {
  handleThemeUpdate({
    "--primary-bg-color": hex.slice(0, -2),
  });
};
picker2.onClose = ({ hex }) => {
  handleThemeUpdate({
    "--primary-color": hex.slice(0, -2),
  });
};
swap.addEventListener("click", ({ target }) => {
  handleThemeUpdate({
    "--primary-bg-color": picker2.color.hex.slice(0, -2),
    "--primary-color": picker1.color.hex.slice(0, -2),
  });
});
random.addEventListener("click", ({ target }) => {
  let primaryBgColor = generateRandomHexColor();
  let primaryColor = complementaryColor(primaryBgColor);
  while (
    !isGoodBrightnessDifference(primaryBgColor, primaryColor) &&
    !isGoodColorDifference(primaryBgColor, primaryColor)
  ) {
    primaryBgColor = generateRandomHexColor();
    primaryColor = complementaryColor(primaryColor);
  }
  handleThemeUpdate({
    "--primary-bg-color": primaryBgColor,
    "--primary-color": primaryColor,
  });
});
const copy = (e) => {
  document.getElementById(e).select();
  document.execCommand("copy");
  snackbar.className = "show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 2000);
};
const hexToRGB = (h, rawValues = false) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
    return rawValues ? { r: +r, g: +g, b: +b } : `rgb(${+r},${+g},${+b})`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
    return rawValues ? { r: +r, g: +g, b: +b } : `rgb(${+r},${+g},${+b})`;
  } else {
    let sep = h.includes(",") ? "," : " ";
    h = h.substr(4).split(")")[0].split(sep);
    let r = (+h[0]).toString(16);
    let g = (+h[1]).toString(16);
    let b = (+h[2]).toString(16);
    if (r.length === 1) {
      r = `0${r}`;
    }
    if (g.length === 1) {
      g = `0${g}`;
    }
    if (b.length === 1) {
      b = `0${b}`;
    }
    return `#${r}${g}${b}`;
  }
};
const convert = () => {
  let inputs = document.querySelectorAll("input[type=text]");
  inputs.forEach((i) => {
    i.value = hexToRGB(i.value);
  });
};
const generateRandomHexColor = () =>
  `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
const isGoodBrightnessDifference = (bgColor, foregroundColor) => {
  const bgColorRGB = hexToRGB(bgColor, true);
  const foregroundColorRGB = hexToRGB(foregroundColor, true);
  const bgColorLuminance =
    0.299 * bgColorRGB.r + 0.587 * bgColorRGB.g + 0.114 * bgColorRGB.b;
  const foregroundColorLuminance =
    0.299 * foregroundColorRGB.r +
    0.587 * foregroundColorRGB.g +
    0.114 * foregroundColorRGB.b;

  return Math.abs(bgColorLuminance - foregroundColorLuminance) >= 125;
};
const isGoodColorDifference = (bgColor, foregroundColor) => {
  const bgColorRGB = hexToRGB(bgColor, true);
  const foregroundColorRGB = hexToRGB(foregroundColor, true);

  return (
    Math.max(bgColorRGB.r, foregroundColorRGB.r) -
      Math.min(bgColorRGB.r, foregroundColorRGB.r) +
      Math.max(bgColorRGB.g, foregroundColorRGB.g) -
      Math.min(bgColorRGB.g, foregroundColorRGB.g) +
      Math.max(bgColorRGB.b, foregroundColorRGB.b) -
      Math.min(bgColorRGB.b, foregroundColorRGB.b) >=
    500
  );
};
let pwaInstalled = localStorage.getItem("pwaInstalled") == "yes";
if (window.matchMedia("(display-mode: standalone)").matches) {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
}
if (window.navigator.standalone === true) {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
}
if (pwaInstalled) {
  document.getElementById("installPWA").style.display = "none";
} else {
  document.getElementById("installPWA").style.display = "inline-flex";
}
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});
async function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(({ outcome }) => {
      if (outcome === "accepted") {
        console.log("Your PWA has been installed");
      } else {
        console.log("User chose to not install your PWA");
      }
      deferredPrompt = null;
    });
  }
}
window.addEventListener("appinstalled", (evt) => {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
  document.getElementById("installPWA").style.display = "none";
});

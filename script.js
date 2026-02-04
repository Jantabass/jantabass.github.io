// --- Header og footer ---
document.getElementById("header").innerHTML = `
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <header>
    <a href ="startside.html"><h1>iPhone-nettside</h1></a>
    <button id="modeBtn">Dark / Light Mode</button>
  </header>
`;
 
document.getElementById("footer").innerHTML = `
  <footer>
    <p>© 2026 Vår nettside</p>
    <ul>
      <li><a href="om_oss.html">Om oss</a></li>
      <li><a href="kontakt_oss.html">Kontakt oss</a></li>
      <li><a href="karriere.html">Jobb hos oss</a></li>
      <li><a href="q&a.html">Spørsmål og svar</a></li>
    </ul>
  </footer>
`;

// Add to your HTML file (before closing body tag)
  document.addEventListener("DOMContentLoaded", function() {
      document.body.classList.add('fade-in');
  });


const soundAdd = new Audio("sounds/add.wav");
soundAdd.preload = "auto";
const soundRemove = new Audio("sounds/remove.wav");
soundRemove.preload = "auto";
const soundToggle = new Audio("sounds/mode.wav");
soundToggle.preload = "auto";

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Initial tomme plasser
 
 
// --- iPhone-data ---
function removeFromCompare(key) {
  compareSlots = compareSlots.filter(p => p !== key);
  playSound(soundRemove);
  renderComparePanel();
  highlightMaxValues();
}
 
 
 
const phones = {
  iphone13: {
    name: "iPhone 13",
    screen: 6.1,
    camera: "Dual 12 MP",
    storage: 128,
    battery: 3240,
    chip: "A15 Bionic",
    weight: 174,
    ram: 4,
    cameraLenses: 2,
    digitalZoom: 5,
    opticZoom: 0,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone13pro: {
    name: "iPhone 13 Pro",
    screen: 6.1,
    camera: "Triple 12 MP",
    storage: 128,
    battery: 3095,
    chip: "A15 Bionic",
    weight: 204,
    ram: 6,
    cameraLenses: 3,
    digitalZoom: 15,
    opticZoom: 3,
    refreshRateHz: 120,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone14: {
    name: "iPhone 14",
    screen: 6.1,
    camera: "Dual 12 MP",
    storage: 512,
    battery: 3240,
    chip: "A15 Bionic",
    weight: 174,
    ram: 6,
    cameraLenses: 2,
    digitalZoom: 5,
    opticZoom: 0,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone14pro: {
    name: "iPhone 14 Pro",
    screen: 6.1,
    camera: "Dual 12 MP",
    storage: 1000,
    battery: 3240,
    chip: "A15 Bionic",
    weight: 174,
    ram: 6,
    cameraLenses: 2,
    digitalZoom: 5,
    opticZoom: 0,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone14promax: {
    name: "iPhone 14 Pro Max",
    screen: 6.7,
    camera: "Dual 12 MP",
    storage: 1000,
    battery: 3240,
    chip: "A15 Bionic",
    weight: 174,
    ram: 6,
    cameraLenses: 2,
    digitalZoom: 5,
    opticZoom: 0,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone14plus: {
    name: "iPhone 14 Plus",
    screen: 6.7,
    camera: "Dual 12 MP",
    storage: 1000,
    battery: 3240,
    chip: "A15 Bionic",
    weight: 174,
    ram: 6,
    cameraLenses: 2,
    digitalZoom: 5,
    opticZoom: 0,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60
  },
  iphone15: {
    name: "iPhone 15",
    screen: 6.1,
    camera: "48 MP + 12 MP",
    storage: 128,
    battery: 3349,
    chip: "A16 Bionic",
    weight: 171,
    ram: 6,
    cameraLenses: 2,
    digitalZoom: 10,
    opticZoom: 2,
    refreshRateHz: 60,
    maxCameraResolution: 4,
    maxCameraFPS: 60,
    videoHours: 20, 
    ppi: 460,
    bluetoothVersion: 5.3
  },
  iphone15pro: {
    name: "iPhone 15 Pro",
    screen: 6.1,
    camera: "48 MP + 12 MP + 12 MP",
    storage: 128,
    battery: 3274,
    chip: "A17 Pro",
    weight: 187,
    ram: 8,
    cameraLenses: 3,
    digitalZoom: 15,
    opticZoom: 3,
    refreshRateHz: 120,
    maxCameraResolution: 4,
    maxCameraFPS: 60,
    videoHours: 26,
    ppi: 460,
    bluetoothVersion: 5.3
  },
iphone15promax: {
  name: "iPhone 15 Pro Max",
  screen: 6.7,
  camera: "48 MP + 12 MP + 12 MP",
  storage: 256,
  battery: 4422,
  chip: "A17 Pro",
  weight: 221,
  ram: 8,
  cameraLenses: 3,
  digitalZoom: 25,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  videoHours: 29,
  ppi: 460,
  bluetoothVersion: 5.3
},
iphone15plus: {
  name: "iPhone 15 Plus",
  screen: 6.7,
  camera: "48 MP + 12 MP + 12 MP",
  storage: 256,
  battery: 4422,
  chip: "A17 Pro",
  weight: 221,
  ram: 8,
  cameraLenses: 3,
  digitalZoom: 25,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  videoHours: 29,
  ppi: 460,
  bluetoothVersion: 5.3
},

iphone17air: {
  name: "iPhone Air",
  screen: 6.6,
  camera: "48 MP",
  storage: 256,
  battery: 4200,
  chip: "A18",
  weight: 160,
  ram: 8,
  cameraLenses: 1,
  digitalZoom: 10,
  opticZoom: 0,
  refreshRateHz: 60,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 5.3
},
iphone16: {
  name: "iPhone 16",
  screen: 6.1,
  camera: "48 MP Fusion + 12 MP Ultra Wide",
  storage: 512,
  battery: 3561,
  chip: "A18",
  weight: 170,
  ram: 8,
  cameraLenses: 2,
  digitalZoom: 10,
  opticZoom: 2,
  refreshRateHz: 60,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 5.3
},
iphone16plus: {
  name: "iPhone 16 Plus",
  screen: 6.7,
  camera: "48 MP Fusion + 12 MP Ultra Wide",
  storage: 512,
  battery: 4674,
  chip: "A18",
  weight: 0,
  ram: 8,
  cameraLenses: 2,
  digitalZoom: 10,
  opticZoom: 2,
  refreshRateHz: 60,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 5.3
},
iphone16e: {
  name: "iPhone 16e",
  screen: 6.1,
  camera: "48 MP + 12 MP",
  storage: 512,
  battery: 4000,
  chip: "A18",
  weight: 167,
  ram: 8,
  cameraLenses: 2,
  digitalZoom: 10,
  opticZoom: 0,
  refreshRateHz: 60,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 5.3
},
iphone16pro: {
  name: "iPhone 16 Pro",
  screen: 6.3,
  camera: "48 MP triple",
  storage: 1024,
  battery: 3582,
  chip: "A18 Pro",
  weight: 0,
  ram: 8,
  cameraLenses: 3,
  digitalZoom: 25,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 4,
  maxCameraFPS: 120,
  bluetoothVersion: 5.3
},
iphone16promax: {
  name: "iPhone 16 Pro Max",
  screen: 6.9,
  camera: "48 MP triple",
  storage: 1024,
  battery: 4685,
  chip: "A18 Pro",
  weight: 227,
  ram: 8,
  cameraLenses: 3,
  digitalZoom: 25,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 5.3
},
iphone17: {
  name: "iPhone 17",
  screen: 6.3,
  camera: "48 MP dual Fusion",
  storage: 512,
  battery: 3692,
  chip: "A19",
  weight: 177,
  ram: 8,
  cameraLenses: 2,
  digitalZoom: 10,
  opticZoom: 0,
  refreshRateHz: 120,
  maxCameraResolution: 4,
  maxCameraFPS: 60,
  bluetoothVersion: 6
},
iphone17pro: {
  name: "iPhone 17 Pro",
  screen: 6.3,
  camera: "48 MP triple",
  storage: 1024,
  battery: 4252,
  chip: "A19 Pro",
  weight: 206,
  ram: 12,
  cameraLenses: 3,
  digitalZoom: 30,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 8,
  maxCameraFPS: 60,
  bluetoothVersion: 6
},
iphone17promax: {
  name: "iPhone 17 Pro Max",
  screen: 6.9,
  camera: "48 MP triple",
  storage: 2048,
  battery: 5088,
  chip: "A19 Pro",
  weight: 233,
  ram: 12,
  cameraLenses: 3,
  digitalZoom: 30,
  opticZoom: 5,
  refreshRateHz: 120,
  maxCameraResolution: 8,
  maxCameraFPS: 60,
  bluetoothVersion: 6
}
};
 
 
 
 
 
document.querySelectorAll(".group-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const phonesDiv = btn.nextElementSibling;
    phonesDiv.classList.toggle("show");  // toggle visning
  });
});



 
 
// --- Sammenlikning ---
// --- Sammenlikning med plass-til-sammenlikning ---
// --- Sammenlikning med pluss-tegn nederst ---
// --- Sammenlikning med ledig slot og mørk skygge ---
// --- Sammenlikning med dynamisk ledig slot ---
// --- Sammenlikning med dynamisk ledig slot ---
let compareSlots = ["empty"];


let MAX_COMPARE = window.innerWidth <= 768 ? 2 : 3;
 
window.addEventListener("resize", () => {
  MAX_COMPARE = window.innerWidth <= 768 ? 2 : 3;

  if (compareSlots.length > MAX_COMPARE) {
    compareSlots = compareSlots.slice(0, MAX_COMPARE);
    renderComparePanel();
    highlightMaxValues();
  }
});
 
// Oppdater panel nederst





function renderComparePanel() {

  if (compareSlots.length === 0) {
  compareSlots = ["empty"];
}
  const panel = document.getElementById("compareBox");
  if (!panel) return;

  let html = ""; // start på nytt hver gang

  compareSlots.forEach((key) => {
     if (key === "empty") {
        html += `
          <div class="compare_phone empty">
          </div>
        `;
        return;
     }
      const p = phones[key];
      html += `
        <div class="compare_phone">
          <button class="remove-btn" data-key="${key}">Fjern</button>
          <h3>${p.name}</h3>
          <p>Skjerm: <span class="highlight-screen">${p.screen}</span></p>
          <p>Kamera: ${p.camera}</p>
          <p>Antall linser: <span class="highlight-cameraLenses">${p.cameraLenses}</span></p>
          <p>Lagringsplass(størst): <span class="highlight-storage">${p.storage} GB</span></p>
          <p>RAM: <span class="highlight-ram">${p.ram} GB</span></p>
          <p>Vekt: <span class="highlight-weight">${p.weight} g</span></p>
          <p>Optisk zoom: <span class="highlight-opticZoom">${p.opticZoom}x</span></p>
          <p>Digital zoom: <span class="highlight-digitalZoom">${p.digitalZoom}x</span></p>
          <p>Max Kameraoppløsning: <span class="highlight-maxCameraResolution">${p.maxCameraResolution}K</span></p>
          <p>Maks kamera FPS: <span class="highlight-maxCameraFPS">${p.maxCameraFPS} FPS</span></p>
          <p>Batterikapasitet: <span  class="highlight-battery">${p.battery} mAh</span></p>
          <p>Skjermoppdateringsfrekvens: <span class="highlight-refreshRateHz">${p.refreshRateHz} Hz</span></p>
          <p>Bluetooth-versjon: <span class="highlight-bluetoothVersion">${p.bluetoothVersion}</span></p>
          <p>Chip: ${p.chip}</p>
        </div>
      `;
  });

  panel.innerHTML = html;

  // Fjern-knapper
  panel.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      removeFromCompare(btn.dataset.key);
    });
  });
}





 
// Funksjon for å fremheve høyeste verdier i compareBox
function highlightMaxValues() {
  if (compareSlots.length < 2) return;
 
  // Hent elementene i panelet
  const panel = document.getElementById("compareBox");
  const items = panel.querySelectorAll(".compare_phone");
 
  // Samle verdier for hver kategori
  let maxValues = {
    screen : 0,
    storage: 0,
    ram: 0,
    weight: 0,
    digitalZoom: 0,
    opticZoom: 0,
    maxCameraResolution: 0,
    battery: 0,
    maxCameraFPS: 0,
    refreshRateHz: 0,
    cameraLenses: 0,
    bluetoothVersion: 0
  };
 
  compareSlots.forEach(key => {
    const p = phones[key];
    if (!p) return;
    maxValues.screen = Math.max(maxValues.screen, p.screen);
    maxValues.storage = Math.max(maxValues.storage, p.storage);
    maxValues.ram = Math.max(maxValues.ram, p.ram);
    maxValues.weight = Math.max(maxValues.weight, p.weight);
    maxValues.digitalZoom = Math.max(maxValues.digitalZoom, p.digitalZoom);
    maxValues.opticZoom = Math.max(maxValues.opticZoom, p.opticZoom);
    maxValues.maxCameraResolution = Math.max(maxValues.maxCameraResolution, p.maxCameraResolution);
    maxValues.battery = Math.max(maxValues.battery, p.battery);
    maxValues.maxCameraFPS = Math.max(maxValues.maxCameraFPS, p.maxCameraFPS);
    maxValues.refreshRateHz = Math.max(maxValues.refreshRateHz, p.refreshRateHz);
    maxValues.cameraLenses = Math.max(maxValues.cameraLenses, p.cameraLenses);
    maxValues.bluetoothVersion = Math.max(maxValues.bluetoothVersion, p.bluetoothVersion);
  });

  ["screen","storage","ram","weight","digitalZoom","opticZoom","maxCameraResolution", "maxCameraFPS", "battery", "refreshRateHz", "cameraLenses", "bluetoothVersion"].forEach(prop => {
    const owners = compareSlots.filter(key => phones[key] && phones[key][prop] === maxValues[prop]);
    const isUniqueMax = owners.length === 1;
 
  // Marker høyeste verdier
  items.forEach(item => {
    const name = item.querySelector("h3").innerText;
    let key = Object.keys(phones).find(k => phones[k].name === name);
    if (!key) return;
    const elem = item.querySelector(`.highlight-${prop}`);
    if (!elem) return;
 
    // Gå gjennom alle verdier vi vil markere
     if (isUniqueMax && phones[key][prop] === maxValues[prop] && maxValues[prop] !== 0) {
          elem.style.backgroundColor = "lightgreen";
        } else {
          elem.style.backgroundColor = "transparent";
        }
      });
    });
}
 
function addToCompare(key) {
  if (!phones[key]) return;
  if (compareSlots.includes(key)) return;
  if (compareSlots.length >= MAX_COMPARE) return;

  compareSlots = compareSlots.filter(k => k !== "empty");

  compareSlots.push(key);
  playSound(soundAdd);
  renderComparePanel();
  highlightMaxValues();
}
 
 
 
 
 
 
 
 
 
// Initial render: tomt panel
renderComparePanel();
highlightMaxValues();
 
 
// --- Dark / Light mode ---
const body = document.body;
 
document.addEventListener("click", (e) => {
  if (e.target.id === "modeBtn") {
    body.classList.toggle("dark-mode");
    playSound(soundToggle);
 
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
});
 
// Last lagret modus
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}
 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".qa-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});



let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

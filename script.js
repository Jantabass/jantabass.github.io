// --- Header og footer ---
document.getElementById("header").innerHTML = `
  <header>
    <a href ="startside.html"<h1>iPhone-nettside</h1></a>
    <button id="modeBtn">Dark / Light Mode</button>
  </header>
`;

document.getElementById("footer").innerHTML = `
  <footer>
    <p>© 2025 iPhone</p>
    <ul>
      <li><a href="om_oss.html">Om oss</a></li>
      <li><a href="kontakt_oss.html">Kontakt oss</a></li>
      <li><a href="karriere.html">Jobb hos oss</a></li>
    </ul>
  </footer>
`;

// --- iPhone-data ---
const phones = {
  iphone13: {
    name: "iPhone 13",
    screen: '6.1"',
    camera: "Dual 12 MP",
    storage: "128 GB",
    battery: "3240 mAh",
    chip: "A15 Bionic",
    weight: "174 g"
  },
  iphone13pro: {
    name: "iPhone 13 Pro",
    screen: '6.1" ProMotion',
    camera: "Triple 12 MP",
    storage: "128 GB",
    battery: "3095 mAh",
    chip: "A15 Bionic",
    weight: "204 g"
  },
  iphone14: {
    name: "iPhone 14",
    screen: '6.1"',
    camera: "Dual 12 MP",
    storage: "128 GB",
    battery: "3240 mAh",
    chip: "A15 Bionic",
    weight: "174 g"
  },
  iphone15: {
    name: "iPhone 15",
    screen: '6.1" ProMotion',
    camera: "Triple 12 MP",
    storage: "128 GB",
    battery: "3095 mAh",
    chip: "A15 Bionic",
    weight: "204 g"
  },
   iphone15pro: {
    name: "iPhone 15 Pro",
    screen: '6.1" ProMotion 120Hz',
    camera: "48 MP + 12 MP + 12 MP",
    storage: "128 GB",
    battery: "3274 mAh",
    chip: "A17 Pro",
    weight: "187 g"
  },
  iphone16: {
    name: "iPhone 16",
    screen: '6.1" OLED',
    camera: "48 MP Fusion + 12 MP Ultra Wide",
    storage: "128–512 GB",
    battery: "3561 mAh circa",
    chip: "A18",
    weight: "170 g"
  },
  iphone16plus: {
    name: "iPhone 16 Plus",
    screen: '6.7" OLED',
    camera: "48 MP Fusion + 12 MP Ultra Wide",
    storage: "128–512 GB",
    battery: "4674 mAh circa",
    chip: "A18",
    weight: "unknown"
  },
  iphone16e: {
    name: "iPhone 16e",
    screen: '6.1" OLED',
    camera: "48 MP + 12 MP",
    storage: "128–512 GB",
    battery: "≈4000 mAh (omtrentlig)",
    chip: "A18",
    weight: "167 g"
  },
  iphone16pro: {
    name: "iPhone 16 Pro",
    screen: '6.3" ProMotion 120Hz',
    camera: "48 MP triple (inkl. tele)",
    storage: "128–1024 GB",
    battery: "3582 mAh circa",
    chip: "A18 Pro",
    weight: "unknown"
  },
  iphone16promax: {
    name: "iPhone 16 Pro Max",
    screen: '6.9" ProMotion 120Hz',
    camera: "48 MP triple (inkl. tele)",
    storage: "256–1024 GB",
    battery: "4685 mAh circa",
    chip: "A18 Pro",
    weight: "227 g"
  },
  iphone17: {
    name: "iPhone 17",
    screen: '6.3" ProMotion 120Hz OLED',
    camera: "48 MP dual Fusion",
    storage: "256–512 GB",
    battery: "3692 mAh circa",
    chip: "A19",
    weight: "177 g"
  },
  iphone17pro: {
    name: "iPhone 17 Pro",
    screen: '6.3" ProMotion 120Hz OLED',
    camera: "48 MP triple (vid + ultra + tele)",
    storage: "256–1024 GB",
    battery: "4252 mAh circa",
    chip: "A19 Pro",
    weight: "206 g"
  },
  iphone17promax: {
    name: "iPhone 17 Pro Max",
    screen: '6.9" ProMotion 120Hz OLED',
    camera: "48 MP triple (vid + ultra + tele)",
    storage: "256–2048 GB",
    battery: "5088 mAh circa",
    chip: "A19 Pro",
    weight: "233 g"
  }
}



// --- Sammenlikning ---
// --- Sammenlikning med plass-til-sammenlikning ---
// --- Sammenlikning med pluss-tegn nederst ---
// --- Sammenlikning med ledig slot og mørk skygge ---
// --- Sammenlikning med dynamisk ledig slot ---
// --- Sammenlikning med dynamisk ledig slot ---
let compareSlots = []; // valgte modeller
const MAX_COMPARE = 4;

// Oppdater panel nederst
function renderComparePanel() {
  const panel = document.getElementById("compareBox");
  let html = "<div style='display:flex; gap:10px; flex-wrap: wrap;'>";

  compareSlots.forEach((key, index) => {
    if (key === "empty") {
      // vis ledig slot
      html += `
        <div style="border:1px dashed black; min-width:150px; min-height:150px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 8px rgba(0,0,0,0.5); position: relative;">
          <span style="font-size:24px; color:gray;">+</span>
        </div>
      `;
    } else {
      const p = phones[key];
      html += `
        <div style="border:1px solid black; padding:10px; min-width:150px; position: relative; box-shadow:0 4px 8px rgba(0,0,0,0.5);">
          <h3>${p.name}</h3>
          <p>Skjerm: ${p.screen}</p>
          <p>Kamera: ${p.camera}</p>
          <p>Lagring: ${p.storage}</p>
          <p>Prosessor: ${p.chip}</p>
          <p>Vekt: ${p.weight}</p>
          <button onclick="removeFromCompare('${key}')">Fjern</button>
    
        </div>
      `;
    }
  });

  html += "</div>";
  panel.innerHTML = html;
}



// Legg til modell fra toppen
function addToCompare(key) {
  if (compareSlots.includes(key)) return; // stopp duplikat

  const emptyIndex = compareSlots.indexOf("empty");

  if (emptyIndex !== -1) {
    compareSlots[emptyIndex] = key;
  } else if (compareSlots.length < MAX_COMPARE) {
    compareSlots.push(key);
  }

  renderComparePanel();
}
// Fjern modell
function removeFromCompare(key) {
  const index = compareSlots.indexOf(key);
  if (index !== -1) {
    compareSlots.splice(index, 1); // fjern modellen
  }
  renderComparePanel();
}

// Initial render: tomt panel
renderComparePanel();

// --- Dark / Light mode ---
const body = document.body;

document.addEventListener("click", (e) => {
  if (e.target.id === "modeBtn") {
    body.classList.toggle("dark-mode");

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

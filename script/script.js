

document.getElementById("header").innerHTML = `
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <header>
    <a href ="startside.html"><h1>ClearPhone</h1></a>
    <div class="headerButtons">
    <button type="button" id="modeBtnContainer" aria-label="Bytt modus">
    <img src="../images/modeKnappenCropped2.png" id="modeBtn" alt="Bytt modus">
    </button>
    <div class="dropDown">
  <button class="dropBtn translate-language" onclick="toggleMenu()"></button>
  <div id="menu" class="dropdownContent">
    <a href="#" onclick="setLanguage('en')">English</a>
    <a href="#" onclick="setLanguage('no')">Norwegian</a>
    </div>
</div>
  </header>
`;
 
document.getElementById("footer").innerHTML = `
  <footer>
    <p>© 2026 ClearPhone</p>
    <ul>
      <li><a class="translate-aboutUs" href="omOss.html">Om oss</a></li>
      <li><a class="translate-contactUs" href="kontaktOss.html">Kontakt oss</a></li>
      <li><a class="translate-career" href="karriere.html">Jobb hos oss</a></li>
      <li><a class="translate-faq" href="q&a.html"></a></li>
    </ul>
  </footer>
`;


  document.addEventListener("DOMContentLoaded", function() {
      document.body.classList.add('fadeIn');
  });


const translations = {
  no: {
    language: "Språk",
    aboutUs: "Om oss",
    contactUs: "Kontakt oss",
    career: "Jobb hos oss",

    faq: "Spørsmål og svar",
    title: "Finn din perfekte iPhone",
    subTitle : "Lei av endeløs scrolling og forvirrende spesifikasjoner?",
    goToCompare: "Sammenlikn modeller",
    introP1: "Vi tilbyr et smart og oversiktelig system som lar deg enkelt få info om de forskjellige modellene.",
    introP2: "Dette er en uavhengig side, som ikke har blitt betalt av Apple. ",
    introP3: "Vi vil derfor være helt nøytrale, og ikke forsøke å få deg til å bruke mest penger.",
    whyUse: "Hvorfor bruke iPhoneGuide?",
    objectiveComparison: "Objektiv sammenlikning",
    objectiveComparisonP: " Spesifikasjoner, pris og ytelse satt opp side-om-side.",
    adjustedToYou: "Tilpasset deg",
    adjustedToYouP: "Finn modellen som passer ditt bruk , ikke Apples markedsplan.",
    updatedRegularly: "Regelmessig oppdatert",
    updatedRegularlyP: "Vi holder siden oppdatert med de nyeste modellene og spesifikasjonene.",

    empty: "Tom plass",
    scrollToCompare: "Scroll for å sammenligne",

    screen: "Skjermstørrelse:",
    camera: "Kamera:",
    cameraLenses: "Kameralinser:",
    storage: "Lagring:",
    ram: "RAM:",
    weight: "Vekt:",
    opticZoom: "Optisk zoom:",
    digitalZoom: "Digital zoom:",
    maxCameraResolution: "Maksimal kameraoppløsning:",
    refreshRateHz: "Skjermoppdateringsfrekvens:",
    bluetoothVersion: "Bluetooth-versjon:",
    chip: "Chip:",
    battery: "Batterikapasitet:",
    maxCameraFPS: "Maks kamera FPS:",





    compareTitle: "Sammenlikn iPhone-modeller",
    compareSubtitle: "Klikk på en modell for å legge den til sammenligningspanelet nedenfor. Du kan sammenligne opptil 3 modeller.",
    series: "serie",
    comparequestion: "Hva betyr disse egenskapene?",
    explain1: "Skjermstørrelse i tommer.",
    explain2: "Kameraegenskaper, inkludert megapiksler og antall linser.",
    explain3: "Antall kameralinser.",
    explain4: "Maksimal lagringskapasitet i GB.",
    explain5: "RAM i GB.",
    explain6: "Vekt i gram.",
    explain7: "Optisk zoom-funksjon i x.",
    explain8: "Digital zoom-funksjon i x.",
    explain9: "Maksimal kameraoppløsning i K.",
    explain10: "Maksimal bildefrekvens for videoopptak.",
    explain11: "Batterikapasitet i mAh.",
    explain12: "Oppdateringsfrekvens for skjermen i Hz.",
    explain13: "Bluetooth-versjon.",
    explain14: "Oppdateringsfrekvens for skjermen i Hz.",

    question1: "Hvilken iPhone passer meg best?",
    answer1: "Det avhenger av budsjett, bruk og behov. Sammenlikn modellene for riktig valg.",
    question2: "Er nyeste iPhone alltid best?",
    answer2: "Nei. Eldre modeller kan være mer enn gode nok for de fleste.",

    question3: "Kan jeg bestille iphone-modeller fra nettsiden?",
    answer3: "Nei, det er ikke mulig.",

    question4: "Er all informasjon om de forskjellige modellene sanne?",
    answer4: "Ja, informasjonen er basert på offisielle spesifikasjoner fra Apple, tatt i betraktning at man kan oppleve små variasjoner i praksis. Det er heller ingen garanti for at det Apple oppgir stemmer 100% med virkeligheten.",

    question5: "Hvordan bruker jeg sammenligningsverktøyet?",
    answer5: "Klikk enkelt på modellene du ønsker å sammenligne, og de vil bli lagt til sammenligningspanelet. Du kan sammenligne opptil 3 modeller samtidig.",

    question6: "Kan jeg sammenligne eldre iPhone-modeller som ikke lenger selges av Apple?",
    answer6: "Ja, men de eldste modellene tilgjengelige her er iPhone 14-serien, da denne nettsiden er for sammenligning av de nyere modellene.",

    question7: "Hva om jeg har et spørsmål som ikke er besvart her?",
    answer7: "Ta gjerne kontakt med oss gjennom kontaktsiden, så skal vi gjøre vårt beste for å svare på spørsmålet ditt så snart som mulig.",

    department: "Avdeling",
    email: "E-post",
    phone: "Telefon",
    sendMsg: "Send melding",
    successMsg: " Takk for din melding!",
    close: "Lukk",
    customerService: "Kundeservice",
    support: "Support",


    carrerquestion: "Vil du jobbe hos oss?",
    openPositions: "Ledige stillinger",
    position: "Stilling",
    workload: "Omfang",
    type: "Type",
    backenddev: "Backend develevoper",
    cssdev: "Css utvikler",
    economics: "Økonomi ansvarlig",
    permanent: "Fast",
    temporary: "Deltid",

    bestEmployees: "Våre beste arbeidere, som har vært med oss siden begynnelse",

    factsAboutUs: "Noen fakta om oss:",
    foundedYear: "Grunnlagt i 2025",
    employees: "2 ansatte",
    plans: "Planer om videre utvikling",
    futurePlans: "Våre fremtidsplaner:",
    y2025: "2025: Første butikk åpnet",
    y2026: "2026: Nettbutikk lansert",
    y2027: "2027: Ny hovedbutikk i Oslo",
    ourVideo: "Vår butikkvideo:",
    weHaveFuturePlans: "Vi har planer for videre utvikling",
    ourPriorities: "ClearPhones prioriteringer:",
    priority1: "Gi den råeste informasjonen mulig",
    priority2: "Sørge for at det er lett å finne frem og sammenlikne",
    priority3: "Oppdatere siden jevnlig med de nyeste modellene og spesifikasjonene",
    bestEmployees: "Våre beste ansatte, som har vært med oss siden begynnelsen"


  },

  en: {
    language: "Language",
    aboutUs: "About us",
    contactUs: "Contact us",
    career: "Career",
    faq: "Questions & answers",

    title: "Find your perfect iPhone",
    subTitle : "Tired of endless scrolling and confusing specs? ",
    goToCompare: "Compare models",
    introP1: "We offer a smart and clear system that allows you to easily get info about the different models.",
    introP2: "This is an independent site, which has not been paid by Apple. ",
    introP3: "We will therefore be completely neutral, and not try to get you to spend the most money.",
    whyUse: "Why use iPhoneGuide?",
    objectiveComparison: "Objective comparison",
    objectiveComparisonP: "Specifications, price and performance set up side-by-side.",
    adjustedToYou: "Adjusted to you",
    adjustedToYouP: "Find the model that suits your use, not Apple's marketing plan.",
    updatedRegularly: "Updated regularly",
    updatedRegularlyP: "We keep the site updated with the latest models and specifications.",

    empty: "Empty slot",
    scrollToCompare: "Scroll to compare",

    screen: "Screen size:",
    camera: "Camera:",
    cameraLenses: "Camera lenses:",
    storage: "Storage:",
    ram: "RAM:",
    weight: "Weight:",
    opticZoom: "Optical zoom:",
    digitalZoom: "Digital zoom:",
    maxCameraResolution: "Max camera resolution:",
    refreshRateHz: "Screen refresh rate:",
    bluetoothVersion: "Bluetooth version:",
    chip: "Chip:",
    battery: "Battery capacity:",
    maxCameraFPS: "Max camera FPS:",





    compareTitle: "Compare iPhone models",
    compareSubtitle: "Click on a model to add it to the comparison panel below. You can compare up to 3 models.",
    series: "series",
    comparequestion: "What do these specs mean?",
    explain1: "Screen size in inches.",
    explain2: "Camera specs, including megapixels and lens count.",
    explain3: "Number of camera lenses.",
    explain4: "Maximum storage capacity in GB.",
    explain5: "RAM in GB.",
    explain6: "Weight in grams.",
    explain7: "Optical zoom capability in x.",
    explain8: "Digital zoom capability in x.",
    explain9: "Maximum camera resolution in K.",
    explain10: "Maximum frames per second for video recording.",
    explain11: "Battery capacity in mAh.",
    explain12: "Screen refresh rate in Hz.",
    explain13: "Bluetooth version.",
    explain14: "Screen refresh rate in Hz.",

      question1: "How much does an iPhone cost?",
      answer1: "This website does not provide pricing information. We only provide technical specifications for the various models.",

      question2: "Is the newest iPhone always the best?",
      answer2: "No. Older models can be more than good enough for most people.",

      question3: "Can I order iPhone models from this website?",
      answer3: "No, that is not possible.",

      question4: "Is all the information about the different models true?",
      answer4: "Yes, the information is based on official specifications from Apple, although small variations may occur in practice. There is no guarantee that everything Apple states is 100% accurate.",

      question5: "How do I use the comparison tool?",
      answer5: "Simply click on the models you want to compare, and they will be added to the comparison panel. You can compare up to 3 models at a time.",

      question6: "Can I compare older iPhone models that are no longer sold by Apple?",
      answer6: "Yes, but the oldest models avalible here are the iPhone 14-series, as this website is for comparing the newer models.",

      question7: "What if I have a question that is not answered here?",
      answer7: "Feel free to contact us through the contact page, and we will do our best to answer your question as soon as possible.",

    department: "Department",
    email: "Email",
    phone: "Phone",
    sendMsg: "Send message",
    successMsg: " Thank you for your message!",
    close: "Close",
    customerService: "Customer Service",
    support: "Support",



    carrerquestion: "Do you want to work with us?",
    openPositions: "Open positions",
    position: "Position",
    workload: "Workload",
    type: "Type",
    backenddev: "Backend developer",
    cssdev: "CSS developer",
    economics: "Economics responsible",
    permanent: "Permanent",
    temporary: "Temporary",


    bestEmployees: "Our best employees, who have been with us since the start",
    factsAboutUs: "Some facts about us:",
    foundedYear: "Founded in 2025",
    employees: "2 employees",
    plans: "Plans for further development",
    futurePlans: "Our future plans:",
    y2025: "2025: First store opened",
    y2026: "2026: Online store launched",
    y2027: "2027: New main store in Oslo",
    ourVideo: "Our store video:",
    weHaveFuturePlans: "We have plans for further development",
    ourPriorities: "ClearPhone's priorities:",
    priority1: "Give the rawest information possible",
    priority2: "Make sure it is easy to find and compare models",
    priority3: "Update our site regurarly with the newest models and specifications",
    bestEmployees: "Our best employees, who have been with us since the beginning"


}
}
let currentLang = localStorage.getItem("preferredLang") || "en"; 


function updateAllText() {
  const lang = translations[currentLang];
  
  Object.keys(lang).forEach(key => {
    const elements = document.querySelectorAll(`.translate-${key}`);
    elements.forEach(element => {
      element.innerText = lang[key];
    });
  });  
}

function toggleLanguage() {
  currentLang = (currentLang === "no") ? "en" : "no";
  localStorage.setItem("preferredLang", currentLang); 
  updateAllText(); 
  renderComparePanel(currentLang); 
  highlightMaxValues();
}




function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  
  document.addEventListener("click", function handler(e) {
    if (!menu.contains(e.target) && !e.target.classList.contains("dropBtn")) {
      menu.classList.remove("show");
      document.removeEventListener("click", handler);
    }
  });
}


function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferredLang", currentLang);
  updateAllText();
  renderComparePanel(currentLang); 
  highlightMaxValues();
  const menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
}


const soundAdd = new Audio("../sounds/add.wav");
soundAdd.preload = "auto";
const soundRemove = new Audio("../sounds/remove.wav");
soundRemove.preload = "auto";
const soundToggle = new Audio("../sounds/mode.wav");
soundToggle.preload = "auto";
const soundGroupOpen = new Audio("../sounds/groupOpen.wav");
soundGroupOpen.preload = "auto";
const soundGroupClose = new Audio("../sounds/groupClose.wav");
soundGroupClose.preload = "auto";

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}


 
 
// --- iPhone-data ---
function removeFromCompare(key) {
  compareSlots = compareSlots.filter(p => p !== key);
  playSound(soundRemove);
  renderComparePanel(currentLang);
  highlightMaxValues();
}
 
 
 
const phones = {

  emptyphone: {
    name: null,
    screen: null,
    camera: null,
    storage: null,
    battery: null,
    chip: null,
    weight: null,
    ram: null,
    cameraLenses: null,
    digitalZoom: null,
    opticZoom: null,
    refreshRateHz: null,
    maxCameraResolution: null,
    maxCameraFPS: null,
  }
  ,
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
 
 
 
 
 
document.querySelectorAll(".groupBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const phonesDiv = btn.nextElementSibling;
    if (phonesDiv.classList.contains("show")) {
      playSound(soundGroupClose);}
      else {   
        playSound(soundGroupOpen);}
    phonesDiv.classList.toggle("show")
  });
});



 
 
let compareSlots = ["emptyphone"];


let MAXCOMPARE = window.innerWidth <= 768 ? 2 : 3;
 
window.addEventListener("resize", () => {
  MAXCOMPARE = window.innerWidth <= 768 ? 2 : 3;

  if (compareSlots.length > MAXCOMPARE) {
    compareSlots = compareSlots.slice(0, MAXCOMPARE);
    renderComparePanel();
    highlightMaxValues();
  }
});
 



function showPhoneSpecs(key, currentLang) {
  const p = phones[key];
  const lang = translations[currentLang];
  if (!p) return "";

  const phoneName = key === "emptyphone" ? lang.empty : p.name;
    return `
        <div class="comparePhone">
         ${key !== "emptyphone" ? `<button class="removeBtn" id="remove" data-key="${key}">Fjern</button>` : ""}
          <h3>${phoneName}</h3>
          <p>${lang.screen} ${key !== "emptyphone" ? `<span class="highlight-screen">${p.screen}"</span>` : ""} </p>
          <p>${lang.camera} ${key !== "emptyphone" ? `${p.camera}` : ""}</p>
          <p>${lang.cameraLenses} ${key !== "emptyphone" ? `<span class="highlight-cameraLenses">${p.cameraLenses}</span>` : ""}</p>
          <p>${lang.storage} ${key !== "emptyphone" ? `<span class="highlight-storage">${p.storage} GB</span>` : ""}</p>
          <p>${lang.ram} ${key !== "emptyphone" ? `<span class="highlight-ram">${p.ram} GB</span>` : ""}</p>
          <p>${lang.weight} ${key !== "emptyphone" ? `<span class="highlight-weight">${p.weight} g</span>` : ""}</p>
          <p>${lang.opticZoom} ${key !== "emptyphone" ? `<span class="highlight-opticZoom">${p.opticZoom}x</span>` : ""}</p>
          <p>${lang.digitalZoom} ${key !== "emptyphone" ? `<span class="highlight-digitalZoom">${p.digitalZoom}x</span>` : ""}</p>
          <p>${lang.maxCameraResolution} ${key !== "emptyphone" ? `<span class="highlight-maxCameraResolution">${p.maxCameraResolution}K</span>` : ""}</p>
          <p>${lang.maxCameraFPS} ${key !== "emptyphone" ? `<span class="highlight-maxCameraFPS">${p.maxCameraFPS} FPS</span>` : ""}</p>
          <p>${lang.battery} ${key !== "emptyphone" ? `<span  class="highlight-battery">${p.battery} mAh</span>` : ""}</p>
          <p>${lang.refreshRateHz} ${key !== "emptyphone" ? `<span class="highlight-refreshRateHz">${p.refreshRateHz} Hz</span>` : ""}</p>
          <p>${lang.bluetoothVersion} ${key !== "emptyphone" ? `<span class="highlight-bluetoothVersion">${p.bluetoothVersion}</span>` : ""}</p>
          <p>${lang.chip} ${key !== "emptyphone" ? `${p.chip}` : ""}</p>
        </div>
      `;
}


function renderComparePanel(currentLang) {
  
  const panel = document.getElementById("compareBox");
  if (!panel) return;
  
  let html = ""; 
  
  if (compareSlots.length === 0) {
    compareSlots.push("emptyphone");
  }
  
  if (compareSlots.length > 1 && compareSlots.includes("emptyphone")) {
    compareSlots = compareSlots.filter( k =>k !== "emptyphone");
  }
  
  compareSlots.forEach((key) => {
    const p = phones[key];
    html += showPhoneSpecs(key, currentLang);
  });
  
  panel.innerHTML = html;
  
  panel.querySelectorAll(".removeBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      removeFromCompare(btn.dataset.key);
    });
  });
  console.log(compareSlots.length)
  

}





 

function highlightMaxValues() {
  if (compareSlots.length < 2) return;
 

  const panel = document.getElementById("compareBox");
  const items = panel.querySelectorAll(".comparePhone");
 

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
 

  items.forEach(item => {
    const name = item.querySelector("h3").innerText;
    let key = Object.keys(phones).find(k => phones[k].name === name);
    if (!key) return;
    const elem = item.querySelector(`.highlight-${prop}`);
    if (!elem) return;
 

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
  if (compareSlots.length >= MAXCOMPARE) return;

  compareSlots = compareSlots.filter(k => k !== "empty");

  compareSlots.push(key);
  playSound(soundAdd);
  renderComparePanel(currentLang);
  highlightMaxValues();
}
 
 
 
 
 
 
 
 
 

renderComparePanel(currentLang);
highlightMaxValues();
 
 

const body = document.body;
 
document.addEventListener("click", (e) => {
  if (e.target.closest("#modeBtnContainer")) {
    body.classList.toggle("dark-mode");
    playSound(soundToggle);
 
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
if (e.target.id === "langBtn") {
  toggleLanguage();
}
});
 
// Last lagret modus
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}
else {body.classList.add("dark-mode");}


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);



document.addEventListener("DOMContentLoaded", function() {
  updateAllText();
  
});




document.querySelectorAll(".qaQuestion").forEach(button => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (answer && answer.classList.contains("qaAnswer")) {
      answer.classList.toggle("show");
    }
  });
});





updateAllText();

const indicator = document.querySelector(".scrollIndicator");

window.addEventListener("scroll", () => {
  const fadeDistance = window.innerHeight;
  const scrollY = window.scrollY;
  const opacity = 1 - Math.min(scrollY / fadeDistance*2, 1);
  indicator.style.opacity = opacity;
});




// pop-up for kontakt oss
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contactForm');
  const successBox = document.getElementById('successBox');

  if (!form || !successBox) {
    console.error("error: form or successBox not found");
    return;
  }

  function showSuccess() {
    successBox.classList.add('show');
  }

  function closeBox() {
    successBox.classList.remove('show');
  }

  window.closeBox = closeBox;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccess();
    form.reset();
  });
});


// =====================================================
// Supercar Collection - main JavaScript file
// All brand and car information is stored here in
// arrays of objects, so we don't repeat the same HTML.
// =====================================================

// ----- 1. DATA -----

// The 4 brands. Each brand object has a name and one image.
const brands = [
  { name: "Ferrari",     image: "images/ferrari-488.jpg" },
  { name: "Lamborghini", image: "images/lamborghini-huracan.jpg" },
  { name: "Bugatti",     image: "images/bugatti-chiron.jpg" },
  { name: "McLaren",     image: "images/mclaren-720s.jpg" }
];

// The 16 cars (4 cars for every brand).
const cars = [
  // Ferrari
  {
    name: "Ferrari 488",
    brand: "Ferrari",
    engine: "3.9L V8 Twin-Turbo",
    topSpeed: "330 km/h",
    fuel: "Petrol",
    image: "images/ferrari-488.jpg",
    description: "A mid-engine V8 sports car that replaced the Ferrari 458."
  },
  {
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    engine: "3.9L V8 Twin-Turbo",
    topSpeed: "340 km/h",
    fuel: "Petrol",
    image: "images/ferrari-f8.jpg",
    description: "A powerful V8 berlinetta that celebrates the best of Ferrari's V8 engine."
  },
  {
    name: "Ferrari Roma",
    brand: "Ferrari",
    engine: "3.9L V8 Twin-Turbo",
    topSpeed: "320 km/h",
    fuel: "Petrol",
    image: "images/ferrari-roma.jpg",
    description: "An elegant 2+2 grand tourer with a clean and modern design."
  },
  {
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    engine: "4.0L V8 + Electric Motors",
    topSpeed: "340 km/h",
    fuel: "Hybrid (Petrol + Electric)",
    image: "images/ferrari-sf90.jpg",
    description: "Ferrari's plug-in hybrid supercar with around 1000 horsepower."
  },

  // Lamborghini
  {
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    engine: "5.2L V10",
    topSpeed: "325 km/h",
    fuel: "Petrol",
    image: "images/lamborghini-huracan.jpg",
    description: "A V10 supercar that replaced the famous Lamborghini Gallardo."
  },
  {
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    engine: "6.5L V12",
    topSpeed: "350 km/h",
    fuel: "Petrol",
    image: "images/lamborghini-aventador.jpg",
    description: "A flagship V12 supercar famous for its scissor doors."
  },
  {
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    engine: "6.5L V12 + Electric Motors",
    topSpeed: "350 km/h",
    fuel: "Hybrid (Petrol + Electric)",
    image: "images/lamborghini-revuelto.jpg",
    description: "Lamborghini's newest V12 hybrid supercar that replaced the Aventador."
  },
  {
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    engine: "4.0L V8 Twin-Turbo",
    topSpeed: "305 km/h",
    fuel: "Petrol",
    image: "images/lamborghini-urus.jpg",
    description: "A super SUV - the fast and practical side of Lamborghini."
  },

  // Bugatti
  {
    name: "Bugatti Chiron",
    brand: "Bugatti",
    engine: "8.0L W16 Quad-Turbo",
    topSpeed: "420 km/h (limited)",
    fuel: "Petrol",
    image: "images/bugatti-chiron.jpg",
    description: "A 1500 horsepower hypercar with a famous quad-turbo W16 engine."
  },
  {
    name: "Bugatti Veyron",
    brand: "Bugatti",
    engine: "8.0L W16 Quad-Turbo",
    topSpeed: "407 km/h",
    fuel: "Petrol",
    image: "images/bugatti-veyron.jpg",
    description: "The first hypercar to cross 400 km/h, made from 2005 to 2015."
  },
  {
    name: "Bugatti Divo",
    brand: "Bugatti",
    engine: "8.0L W16 Quad-Turbo",
    topSpeed: "380 km/h",
    fuel: "Petrol",
    image: "images/bugatti-divo.jpg",
    description: "A track-focused version of the Chiron, only 40 cars were made."
  },
  {
    name: "Bugatti Bolide",
    brand: "Bugatti",
    engine: "8.0L W16 Quad-Turbo",
    topSpeed: "490 km/h (track only)",
    fuel: "Petrol",
    image: "images/bugatti-bolide.jpg",
    description: "An extreme track-only Bugatti with around 1850 horsepower."
  },

  // McLaren
  {
    name: "McLaren 720S",
    brand: "McLaren",
    engine: "4.0L V8 Twin-Turbo",
    topSpeed: "341 km/h",
    fuel: "Petrol",
    image: "images/mclaren-720s.jpg",
    description: "McLaren's Super Series car built around a carbon fiber tub."
  },
  {
    name: "McLaren 765LT",
    brand: "McLaren",
    engine: "4.0L V8 Twin-Turbo",
    topSpeed: "330 km/h",
    fuel: "Petrol",
    image: "images/mclaren-765lt.jpg",
    description: "A lighter and more powerful 'long tail' version of the 720S."
  },
  {
    name: "McLaren Artura",
    brand: "McLaren",
    engine: "3.0L V6 Twin-Turbo Hybrid",
    topSpeed: "330 km/h",
    fuel: "Hybrid (Petrol + Electric)",
    image: "images/mclaren-artura.jpg",
    description: "McLaren's new-generation hybrid supercar with a V6 engine."
  },
  {
    name: "McLaren P1",
    brand: "McLaren",
    engine: "3.8L V8 Twin-Turbo + Electric Motor",
    topSpeed: "350 km/h (limited)",
    fuel: "Hybrid (Petrol + Electric)",
    image: "images/mclaren-p1.jpg",
    description: "McLaren's first hybrid hypercar, only 375 cars were made."
  }
];

// ----- 2. SHOWING PAGES -----
// Shows one page (section) and hides all the other pages.
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].id === pageId + "-page") {
      pages[i].classList.remove("hidden");
    } else {
      pages[i].classList.add("hidden");
    }
  }
  window.scrollTo(0, 0); // jump back to the top
}

// ----- 3. HOME PAGE (brand cards) -----
// Builds the 4 brand cards from the "brands" array.
function renderBrands() {
  const brandGrid = document.getElementById("brand-grid");

  brandGrid.innerHTML = brands.map(function (brand) {
    return `
      <div class="card">
        <img src="${brand.image}" alt="${brand.name}">
        <div class="card-body">
          <h3>${brand.name}</h3>
          <button class="btn" onclick="showBrand('${brand.name}')">View Cars</button>
        </div>
      </div>
    `;
  }).join("");
}

// ----- 4. BRAND PAGE (the 4 cars of one brand) -----
// Remembers which brand we are looking at, for the back button.
let currentBrand = "";

function showBrand(brandName) {
  currentBrand = brandName;
  document.getElementById("brand-title").textContent = brandName + " Cars";

  // Keep only the cars of this brand from the "cars" array.
  const brandCars = cars.filter(function (car) {
    return car.brand === brandName;
  });

  const carGrid = document.getElementById("car-grid");
  carGrid.innerHTML = brandCars.map(function (car) {
    return `
      <div class="card">
        <img src="${car.image}" alt="${car.name}">
        <div class="card-body">
          <h3>${car.name}</h3>
          <button class="btn" onclick="showCar('${car.name}')">View Details</button>
        </div>
      </div>
    `;
  }).join("");

  showPage("cars");
}

// ----- 5. CAR DETAILS PAGE -----
function showCar(carName) {
  // Find the car object with this name in the "cars" array.
  const car = cars.find(function (c) {
    return c.name === carName;
  });

  document.getElementById("car-details").innerHTML = `
    <img src="${car.image}" alt="${car.name}">
    <h2>${car.name}</h2>
    <table class="info">
      <tr><th>Brand</th><td>${car.brand}</td></tr>
      <tr><th>Engine</th><td>${car.engine}</td></tr>
      <tr><th>Top Speed</th><td>${car.topSpeed}</td></tr>
      <tr><th>Fuel Type</th><td>${car.fuel}</td></tr>
    </table>
    <p class="car-desc">${car.description}</p>
  `;

  showPage("details");
}

// Go back from the details page to the brand page we came from.
function backToCars() {
  showBrand(currentBrand);
}

// ----- 6. START -----
// Build the brand cards and show the home page.
renderBrands();
showPage("home");


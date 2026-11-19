// Dynamic Footer Dates
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Responsive Hamburger Menu Toggle
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    hamButton.setAttribute('aria-expanded', navigation.classList.contains('open'));
});

// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-mexico.jpg"
  },
  // Added temples
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52590,
    imageUrl: "images/tokyo-japan.jpg"
  }
];

const container = document.querySelector('#temples');
const pageTitle = document.querySelector('#page-title');
const navLinks = document.querySelectorAll('.navigation a');

// Year dedicated, taken from the "YYYY, Month, D" string
const getYear = temple => parseInt(temple.dedicated.split(',')[0], 10);

function createTempleCard(temple) {
    const card = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 300;

    const caption = document.createElement('figcaption');
    caption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>`;

    card.append(img, caption);
    return card;
}

function displayTemples(list) {
    container.innerHTML = '';
    list.forEach(temple => container.appendChild(createTempleCard(temple)));
}

const filters = {
    home: () => temples,
    old: () => temples.filter(t => getYear(t) < 1900),
    new: () => temples.filter(t => getYear(t) > 2000),
    large: () => temples.filter(t => t.area > 90000),
    small: () => temples.filter(t => t.area < 10000)
};

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        pageTitle.textContent = link.textContent;
        displayTemples(filters[link.id]());
    });
});

displayTemples(temples);

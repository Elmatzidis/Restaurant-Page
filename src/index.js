import "./style.css"; //Styles
import Restaurant from "./Restaurant.jpg"; //Image for page

// Variables
const content = document.createElement("div");
const main = document.querySelector(".main");
let lastScrollY = window.scrollY;

// Creation of the page
function pageCreate() {
  content.classList.add("content");
  content.style.backgroundImage = `url(${Restaurant})`;
  main.appendChild(content);
}

// Loads the starting menu navigation
function loadNavigation() {

  const nav = document.createElement("div");
  const homeContent=document.createElement("div")
  // const overlay=document.createElement("div")

  content.appendChild(nav);
  content.appendChild(homeContent)
  content.classList.add("overlay")

  homeContent.classList.add("homeContent")
  nav.classList.add("nav");

  nav.innerHTML = `
  <div class="menu-container" >
    <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Catalog">Catalog</a></li>
        <li><a href="#About">About</a></li>
    </ul>
  </div>`;

  homeContent.innerHTML=`
  <div id="Home" class="content overlay">
  <h1>The Golden Hearth</h1>
  <p>Authentic Wood-Fired Flavors & Craft Spirits</p>
  <button class="homeBtn">Book a table now!</button>
  </div>
  `
}

// Loads the Catalogs of the page
function loadCatalog() {
  const catalog = document.createElement("div");
  const sectionA = document.createElement("div");

  sectionA.classList.add("section");

  // Html of the catalogs is being created
  sectionA.innerHTML = `
  <div id="Catalog" class="catalog-box">
    <div class="catalog active">
  <div class="menu-section">
    <h3>Starters</h3>
    <p><span>-Bruschetta</span> <span>€6</span></p>
    <p><span>-Garlic Bread</span> <span>€5</span></p>
    <p><span>-Caesar Salad</span> <span>€8</span></p>
  </div>

  <div class="menu-section">
    <h3>Main Dishes</h3>
    <p><span>-Grilled Chicken</span> <span>€14</span></p>
    <p><span>-Beef Burger</span> <span>€12</span></p>
    <p><span>-Margherita Pizza</span> <span>€10</span></p>
  </div>

  <div class="menu-section">
    <h3>Desserts</h3>
    <p><span>-Chocolate Cake</span> <span>€6</span></p>
    <p><span>-Ice Cream</span> <span>€5</span></p>
    <p><span>-Cheesecake</span> <span>€5</span></p>
  </div>
</div>

<div class="catalog active">

  <div class="menu-section">
    <h3>Soft Drinks</h3>
    <p><span>-Coca-Cola</span> <span>€3</span></p>
    <p><span>-Orange Juice</span> <span>€4</span></p>
    <p><span>-Lemonade</span> <span>€3</span></p>
  </div>

  <div class="menu-section">
    <h3>Coffee</h3>
    <p><span>-Espresso</span> <span>€2</span></p>
    <p><span>-Cappuccino</span> <span>€3</span></p>
    <p><span>-Latte</span> <span>€3.5</span></p>
  </div>

  <div class="menu-section">
    <h3>Alcohol</h3>
    <p><span>-Beer</span> <span>€5</span></p>
    <p><span>-Wine Glass</span> <span>€6</span></p>
    <p><span>-Cocktail</span> <span>€8</span></p>
  </div>    
    </div>
  </div>
  `;

  main.appendChild(sectionA);
  main.appendChild(catalog);
}

// Srolling effects
function scroll() {
  const catalog = document.querySelectorAll(".catalog");
  const menu=document.querySelector(".nav")
  // Listens for scroll and based on the value of the scrollY
  // makes div appear and disapear for better visuals
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    // Logic for catalog effect
    // When the scrollY reaches the value of 700
    // An animation plays for the catalogs fadeInUp
    if (scrollY > 700) {
      catalog.forEach((item) => {
        item.classList.add("active");
        item.classList.remove("nonactive");
      });
    }
    // Otherwise if the scrollY reaches the value of 670
    // The catalogs disapear until the scrollY reaches 
    // The value if 700 again 
    else if (scrollY < 670) {
      catalog.forEach((item) => {
        item.classList.remove("active");
        item.classList.add("nonactive");
      });
    }

    // Logic for nav bar effect, when scrolling down the nav bar goes away
    // when scrolling up the nav bar disappears again
    if (scrollY > lastScrollY && scrollY > 50) {
      menu.classList.add("elevate");
      menu.classList.remove("drop");
    } 
    // when scrolling up the nav bar appears again
    else if (scrollY < lastScrollY) {
      menu.classList.add("drop");
      menu.classList.remove("elevate");
    }

    lastScrollY = scrollY;
  });
}

// Here are all the functions needed to create the whole page
function loadPage() {
  pageCreate();
  loadNavigation();
  loadCatalog();
  scroll();
}

loadPage();

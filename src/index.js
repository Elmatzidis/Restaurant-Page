import "./style.css";
import Restaurant from "./Restaurant.jpg";

const content = document.createElement("div");
const main = document.querySelector(".main");

function pageCreate() {
  content.classList.add("content");
  content.style.backgroundImage = `url(${Restaurant})`;
  main.appendChild(content);
}

function loadNavigation() {
  const nav = document.createElement("div");
  content.appendChild(nav);
  nav.classList.add("nav");
  nav.innerHTML = `
  <div class="menu-container">
    <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Catalog">Catalog</a></li>
        <li><a href="#About">About</a></li>
    </ul>
  </div>`;
}

function loadCatalog() {
  const catalog = document.createElement("div");
  const sectionA = document.createElement("div");

  sectionA.classList.add("section");

  sectionA.innerHTML = `
  <div class="catalog-box">
    <div class="catalog">
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


<div class="catalog">

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

function loadPage() {
  pageCreate();
  loadNavigation();
  loadCatalog();
}

loadPage();

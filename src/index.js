import "./style.css";

const content = document.createElement("div");

function pageCreate() {
  const main = document.querySelector(".main");
  content.classList.add("content");
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

function loadPage() {
  loadNavigation();
  pageCreate();
}

loadPage();

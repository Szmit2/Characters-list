const input = document.querySelector("input");
const h2 = document.querySelectorAll("h2");
const characters = document.querySelectorAll(".character");
const ul = document.querySelector("ul");
const button1 = document.querySelector(".search");
const button2 = document.querySelector(".reset");
const loading = document.querySelector(".loading");
const loadingGoku = document.querySelector(".loading img");
let titles;
const search = (e) => {
  const searchH2 = e.target.value.toLowerCase();
  titles = [...h2];
  titles = titles.filter((title) =>
    title.textContent.toLowerCase().includes(searchH2)
  );
};
const showTitles = (e) => {
  e.preventDefault();
  if (input.value === "") return;
  loading.classList.add("on");
  function loadings() {
    ul.textContent = "";
    titles.forEach((title) => ul.appendChild(title.parentElement));
    loading.classList.remove("on");
  }
  setTimeout(loadings, 1600);
  // ul.textContent = "";
  // titles.forEach((title) => ul.appendChild(title.parentElement));
  // input.value = "";
};
const reset = (e) => {
  e.preventDefault();
  ul.textContent = "";
  let defaultTitles = [...characters];
  defaultTitles.forEach((title) => ul.appendChild(title));
  input.value = "";
  titles = [...h2];
};
button1.addEventListener("click", showTitles);
button2.addEventListener("click", reset);
input.addEventListener("input", search);

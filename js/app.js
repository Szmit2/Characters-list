// Selectors
const input = document.querySelector("input");
const h2 = document.querySelectorAll("h2");
const characters = document.querySelectorAll(".character");
const ul = document.querySelector("section.characters");
const button1 = document.querySelector(".search");
const button2 = document.querySelector(".reset");
const loading = document.querySelector(".loading");
let titles;

// Functions
// Search input value
const search = (e) => {
  const searchH2 = e.target.value.toLowerCase();
  titles = [...h2];
  titles = titles.filter((title) =>
    title.textContent.toLowerCase().includes(searchH2)
  );
};
// Show searching result
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
};
// Reset to default list
const reset = (e) => {
  e.preventDefault();
  ul.textContent = "";
  let defaultTitles = [...characters];
  defaultTitles.forEach((title) => ul.appendChild(title));
  input.value = "";
  titles = [...h2];
};

// Evenet Listeners
button1.addEventListener("click", showTitles);
button2.addEventListener("click", reset);
input.addEventListener("input", search);

// Show arrow to top on scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".strzalka").addClass("active");
  } else {
    $(".strzalka").removeClass("active");
  }
});

// SCROLL to top
$(".link").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top,
    },
    1000
  );
});

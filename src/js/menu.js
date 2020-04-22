let $links = document.querySelectorAll(".course-class__menu--a");

const $menu = document.getElementById("btn-menu");
const $courseMenu = document.getElementById("course-class__left");

$menu.addEventListener("click", handleClick);

function handleClick() {
  $courseMenu.classList.toggle("is-active");
  $menu.classList.toggle("is-active");

  if ($menu.classList.contains("fa-bars")) {
    $menu.classList.remove("fa-bars");
    $menu.classList.add("fa-times");
  } else {
    $menu.classList.remove("fa-times");
    $menu.classList.add("fa-bars");
  }
}

//Corregir error de scroll al dar click en cualquier link del menu
if ($links) {
  $links.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      let attrHref = element.getAttribute("href");
      attrHref = attrHref.substring(1, attrHref.length);

      let $container = document.getElementById(attrHref);
      let position = $container.offsetTop;

      let heightAll = document.querySelector(".hero-course").offsetHeight;

      window.scroll(0, position + heightAll);
    });
  });
}

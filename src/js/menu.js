let $links = document.querySelectorAll(".course-class__menu--a");

if ($links) {
  $links.forEach(element => {
    element.addEventListener("click", e => {
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

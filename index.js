import * as render from "./src/js/RenderIndex.js";

const $sectionCourse = null | document.getElementById("courses");

if ($sectionCourse) {
  (async () => {
    const courses = await render.fetchData("./src/js/cursos.json");
    render.render(courses, $sectionCourse, "career");
  })();
}

//Añadir año en el footer
const $footerYear = document.getElementById("footer-year");

if ($footerYear) {
  let date = new Date();

  $footerYear.innerHTML += " " + date.getFullYear();
}

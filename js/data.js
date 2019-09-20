data = [
  {
    id: 1,
    name: "Arquitectura frontend",
    description: `Para adentrarse en el mundo del diseño web y en especial a la
    parte frontend hay que conocer temas básicos como html,css, estructura de una página web y
    demás tecnologias que llevan a la construcción de un buen sitio
    web. Para Platzi ser un desarrollador frontend
    es "aplicar diferentes técnicas y tecnologías para llevar a cabo
    una UI y UX deseados".referencia`,
    courses: [
      {
        courseID: 1,
        courseName: "Desarrollo Web",
        courseDescription:
          "El desarrollo web tiene que ver con todo lo que percibimos a través del navegador: páginas, aplicaciones y sitios web.",
        courseImage: "./images/icon-frontend.png"
      },
      {
        courseID: 2,
        courseName: "Responsive Design",
        courseDescription:
          "Son todas esas técnicas que usamos para adaptar nuestras aplicaciones web a la mayor cantidad de pantallas.",
        courseImage: "./images/icon-responsive.png"
      }
    ]
  },
  {
    id: 2,
    name: "React JS"
  }
];

// crea el template que sera aceptado por append
function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}

//template de cursos
function templateCourse(course) {
  return `
  <div class="course__item">
    <figure class="course__item--img">
      <img src=${course.courseImage} alt="" />
    </figure>
    <div class="course__item--text">
      <h3 class="course__item--title">${course.courseName}</h3>
      <p class="course__item--description">
        ${course.courseDescription}
      </p>
    </div>
  </div>
  `;
}

// template de carreras
function templateCareer(career) {
  return `
  <article class="course course-basic">
    <div class="container-general">
      <h2 class="course__title">${career.name}</h2>
      <p class="course__description">${career.description}</p>
      <div class="course__list">
      </div>
    </div>
  </article>
  `;
}

// renderizar el template en pantalla
function render(listElement, $container, typeElement) {
  listElement.forEach(item => {
    let HTMLString = "";

    if (typeElement === "career") {
      HTMLString = templateCareer(item);
    } else {
      HTMLString = templateCourse(item);
    }

    const renderTemplate = createTemplate(HTMLString);
    $container.append(renderTemplate);

    if (typeElement === "career" && item.courses != undefined) {
      const $coursesListContainer = document.querySelector(".course__list");
      render(item.courses, $coursesListContainer, "course");
    }
  });
}

const $sectionCourse = document.getElementById("courses");
render(data, $sectionCourse, "career");

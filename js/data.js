data = [
  {
    id: 1,
    name: "Arquitectura frontend",
    description: `Para adentrarse en el mundo del diseño web y en especial a la
    parte frontend hay que conocer temas básicos como HTML, CSS, estructura de una página web y
    demás tecnologias que llevan a la construcción de un buen sitio
    web. Para <span class="t-bold">Platzi</span> ser un desarrollador frontend
    es "aplicar diferentes técnicas y tecnologías para llevar a cabo
    una UI y UX deseados" <a class="link link-refe" href="https://platzi.com/arquitecto/" target="_blank">referencia</a>.`,
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
    name: "React JS",
    description:
      "Una biblioteca de JavaScript para construir interfaces de usuario de forma sencilla.",
    courses: [
      {
        courseID: 1,
        courseName: "Curso Básico",
        courseDescription:
          "Curso de entrada a conocer y manejar conceptos básico sobre React JS.",
        courseURL: "./courses/react/react-basico.html",
        courseImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
      }
    ]
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
  <a href=${
    course.courseURL ? course.courseURL : "./index.html"
  } class="course__item" data-id=${course.courseID}>
    <figure class="course__item--img">
      <img src=${course.courseImage} alt="avatar ${
    course.courseName
  }" width="64" />
    </figure>
    <div class="course__item--text">
      <h3 class="course__item--title">${course.courseName}</h3>
      <p class="course__item--description">
        ${course.courseDescription}
      </p>
    </div>
  </a>
  `;
}

// template de carreras
function templateCareer(career) {
  const nameContainer = `career-${career.name
    .toLocaleLowerCase()
    .replace(" ", "-")}`;

  return `
  <article class="course ${nameContainer}" data-id=${career.id}>
    <div class="container-general">
      <h2 class="course__title">${career.name}</h2>
      <p class="course__description">${career.description}</p>
      <div class="course__list">
      </div>
    </div>
  </article>
  `;
}

// renderizar el template en pantalla, recibe un array de elementos,
//el contenedor donde se va a mostrar
//y el tipo de elemento que es (career o course)
function render(listElement, $container, typeElement) {
  let countCareer = 0;
  listElement.forEach(item => {
    let HTMLString = ""; //variable almacenara el template (curso o carrera)

    if (typeElement === "career") {
      //si el tipo de elemento es una carrera se llama a la función templateCarrer y se le pasa una carrera como parametro
      HTMLString = templateCareer(item);
      countCareer++; //incrementa el número de carreras
    } else {
      //si no se crea el template de curso
      HTMLString = templateCourse(item);
    }

    //para crear el template se llama a la función create template, que lo que hace es
    //crear el elemento html (document.implementation.createHTMLDocument)
    //y se añade al body del html creado el template ya sea de career o course
    const renderTemplate = createTemplate(HTMLString);
    //se muestra el template en el contededor a mostrar
    $container.append(renderTemplate);

    //se vuelve a validar si el tipo de elemento es un career y tiene cursos agregados
    //si es asi se vuelve a llamar de nuevo a esta función para renderizar ahora los
    //cursos que le pertenecen a esa carrera
    if (typeElement === "career" && item.courses != undefined) {
      //se obtiene el contenedor donde se mostraran los cursos mediante su selector de clases
      const $coursesListContainer = document.getElementsByClassName(
        "course__list"
      );
      //como habran muchos contenedores con dicha clase, para seleccionar el correcto
      //se usara la variable contadora countCareer - 1, ya que la lista de clases
      //comienza en 0
      //finalmente se renderiza el curso
      render(item.courses, $coursesListContainer[countCareer - 1], "course");
    }
  });
}

//contenedor padre de las carreras
const $sectionCourse = document.getElementById("courses");
render(data, $sectionCourse, "career");

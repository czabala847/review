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
    name: "Javascript",
    description:
      "Es un lenguaje de programación que te permite crear contenido nuevo y dinámico, controlar archivos de multimedia, crear imágenes animadas y muchas otras cosas más. (Aunque, no todo, pero es increíble lo que puedes llegar a hacer con tan sólo unas pocas líneas de código de JavaScript.",
    courses: [
      {
        courseID: 1,
        courseName: "Básico",
        courseDescription:
          "A lo largo del curso aprenderemos las bases sólidas para dominar el lenguaje JavaScript.",
        courseURL: "./courses/javascript/javascript-basico.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg"
      },
      {
        courseID: 2,
        courseName: "Intermedio",
        courseDescription: `Técnicas para aplicar en la parte del Frontend con JS Vanilla, sin usar <span class="t-bold">JQuery</span>.`,
        courseURL: "./courses/javascript/javascript-medio.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg"
      },
      {
        courseID: 3,
        courseName: "Avanzado",
        courseDescription: `Javascript puro, fundamentos clave del lenguaje, explorando APIs del DOM y aplicando las mejores prácticas con Patrones de Diseño.`,
        courseURL: "./courses/javascript/javascript-avanzado.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg"
      },
      {
        courseID: 4,
        courseName: "TypeScript",
        courseDescription: `Es un lenguaje de programación de código abierto con herramientas de programación orientada a objetos.`,
        courseURL: "./courses/javascript/typescript.html",
        courseImage:
          "http://lineadecodigo.com/wp-content/uploads/2017/08/typescript.png"
      }
    ]
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    name: "Fundamentos",
    description:
      "Cursos de fundamentos que hay que tener encuenta en el mundo de la programación.",
    courses: [
      {
        courseID: 1,
        courseName: "Git & GitHub",
        courseDescription:
          "Curso sobre el manejo de control de versiones de nuestros proyectos usando git y github.",
        courseURL: "./courses/basics/git-github.html",
        courseImage:
          "https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Base de Datos",
    description:
      "Crear y modelar bases de datos para aplicaciones web como locales, bases para ser un profesional en DBs.",
    courses: [
      {
        courseID: 1,
        courseName: "Fundamentos",
        courseDescription:
          "Conoce los conceptos básicos para manejar profesionalmente los sistemas de BD, para realizar CRUD.",
        courseURL: "./courses/bd/fundamentos.html",
        courseImage: "https://image.flaticon.com/icons/svg/1420/1420398.svg"
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

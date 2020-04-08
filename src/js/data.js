data = [
  /*{
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
  },*/
  {
    id: 2,
    name: "Javascript",
    description:
      "Es un lenguaje de programación que te permite crear contenido nuevo y dinámico, controlar archivos de multimedia, crear imágenes animadas y muchas otras cosas más. (Aunque, no todo, pero es increíble lo que puedes llegar a hacer con tan sólo unas pocas líneas de código de JavaScript).",
    courses: [
      {
        courseID: 1,
        courseName: "Básico",
        courseDescription:
          "A lo largo del curso aprenderemos las bases sólidas para dominar el lenguaje JavaScript.",
        courseURL: "./courses/javascript/javascript-basico.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg",
      },
      {
        courseID: 2,
        courseName: "Intermedio",
        courseDescription: `Técnicas para aplicar en la parte del Frontend con JS Vanilla, sin usar <span class="t-bold">JQuery</span>.`,
        courseURL: "./courses/javascript/javascript-medio.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg",
      },
      {
        courseID: 3,
        courseName: "Avanzado",
        courseDescription: `Javascript puro, fundamentos clave del lenguaje, explorando APIs del DOM y aplicando las mejores prácticas con Patrones de Diseño.`,
        courseURL: "./courses/javascript/javascript-avanzado.html",
        courseImage:
          "https://gitconnected.com/public/images/tutorials/svg/javascript.svg",
      },
      {
        courseID: 4,
        courseName: "TypeScript",
        courseDescription: `Es un lenguaje de programación de código abierto con herramientas de programación orientada a objetos.`,
        courseURL: "./courses/javascript/typescript.html",
        courseImage:
          "http://lineadecodigo.com/wp-content/uploads/2017/08/typescript.png",
      },
    ],
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
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      },
    ],
  },
  {
    id: 4,
    name: "PHP",
    description:
      "Es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.",
    courses: [
      {
        courseID: 1,
        courseName: "Básico",
        courseDescription:
          "En este curso se veran los fundamentos de PHP mientras desarrollas un proyecto que servirá de sitio web personal.",
        courseURL: "./courses/php/php-basico.html",
        courseImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
      },
      {
        courseID: 2,
        courseName: "PHP y MYSQL",
        courseDescription:
          "Primer curso sobre la manipulación(CRUD) de datos por medio de PHP y Mysql.",
        courseURL: "./courses/php/php-mysql.html",
        courseImage:
          "https://www.eclixxo.com/wp-content/uploads/2009/01/PHP-MYSQL.jpg",
      },
    ],
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
        courseImage: "https://image.flaticon.com/icons/svg/1420/1420398.svg",
      },
      // {
      //   courseID: 2,
      //   courseName: "Curso SQL y MYSQL",
      //   courseDescription:
      //     "Mysql el manejador de bases de datos más usados en los sistemas de bd relacionales.",
      //   courseURL: "./courses/bd/sql-mysql.html",
      //   courseImage:
      //     "https://www.differencebetween.com/wp-content/uploads/2017/12/Difference-Between-SQL-and-MySQL-fig-1-724x1024.png"
      // }
    ],
  },
  {
    id: 6,
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
          "https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg",
      },
      {
        courseID: 2,
        courseName: "Webpack",
        courseDescription:
          "webpack es un paquete de módulos estáticos para aplicaciones JavaScript modernas..",
        courseURL: "./courses/basics/webpack.html",
        courseImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///+O1vsceMCF0/vK6/0Abbyg3PuX2fvu+f70+/8Xdr/d5/IDdL/h6/U2g8UAcL0Aa7vl9f7d8v6v4fyS1/u45PzB6P3T7v3q9/6l3vzG6f3Y8P3G2ezt9PqjwuHU4vG60eiErti0zeZpntBPkMubvN5fmM6NtNp6qNVDisgmfcLO3+/B1utgmc6ev+BSkcsAY7hTOIC/AAAJ4UlEQVR4nO2d6VbjOBCFyWJCjMGhm7XZaWj2Zt7/6cZOQuIqLS6VypbcR/fPnJkJsT5HVbqSrdLOTlJSUlJSUlJSUlJSUlJSv7qcrf55PtsL25COdL47WRPuTSYnYdvSheY/J6PRhnA0mvwK2x5xnVZQgHA0Ob4M2yRRnY2WgICwYtw9D9ssMR3NVkSYsGL8OQ/bNBHNL755VMKK8TRs6wR0sqXREVbd9yxsAz01HTUBdYQV4+wobCM99OMYoBgIK8aLYYbj3gUCMRJWjAN0APMTBcNCWDFOw7bXWb9UBjthFY4/wjbZSZc4AAmEdTgOxZBXFltL0EZYh+MQUs7SYjMJK8VvyE8tracQxm7Iz0Y2QAph3IZ8a7F9COM15HN1hGcSRmrIdSM8mzBCQz61B6AzYR2OMRlyxWILEMYUjhqLLUIYSzhqLbYQYdX1wxvyX3Q+BmF4Q26y2HKEYQ252WJLEoYz5DaLLUtYKUQ4Wi22OGH/hrzFYosT9m3IWy12B4R9OgCCxTbo2IuwNwfgMMKj9m3ctMBXdCeaxdaqsUDByMPfjB2vkP9gBqA6pjmPpdtv6jAcz9kBqFu397hbXYUjP3oMPYs35Iy6Ckcniw2ac2z2zhzbsPpScUPuaLEbTUGG6+r3dfNfXeZe6ItFDfkRPy3AkNl/zIrsHsQkff6sfLeYIfdI7TDtXf/O8vF4XBRP8P6xU46QIefHCuxH8+esGC+Vl+MHcIkzdgxYYpwqfr5DCfSmWPMtVR5egf+rfxpHuYynIWd3IJzP797KfNxUnv3Zb37AI+X4OIA5O0LgI6T31wzyLRkXKK1yw93vEfklp5OiSx780fDVKspn8EFWyvYfNZxHepxAXxZ6vvpnLIobcDHq0vL2YhIjv1vvwZH/BBKMyli+fYDPu81dpN5voOcbfEsf8tL4A25Szust+Bv66DT5KcNXizZm4AR6ddjKt2L85KQc/4Ub2FrCnVUdGoWvFnZyhGnaZAQW3+accNyF39HmH5FLXDs0qrCTa5s8ort5ynrleBf3A1uiww7tPrMmGE1XVZycJTDQhLoa0lgpZ1f9YaaGi+KnmTelI99SVCeH/OByPYRNOEL2XZsEUEioDo38O2ZfB+BqWic30bXIhxDZd2UFCU9x3w8zFt6KETk5NfiRX/r2Iz6Eul5vvqLRoVGlODmQcia7INy3mcGPUMHYjhwODo38M2Int11AQd1pr9GdfAkrgdFxva6Px9xnVoJRGQ1ODo0IIEgFCFECq8YrhkMjM2qcHOouUxSe/oRKOE7hd35wE6iJ8ROlVXyDOyC0rTXf0h0aVdjJNXFVeyVEaFprdnRoZMbySXc17dq7FKHW0Ls7NKoUJ1dL7+bkCNWFn7+LjviWysYw5ZimqpKEOGtLjIFGobHRPHOUJcQvRux/efg0m/LsHrTIMkcVJty8cvAt4aHim+8PGDB25rbXwzsm3Nl5krEzDT48lwpNuDOXHTGwOY2AsBr1X8XCMV+8aEb7EIS3jyBS7salCCCaCF+9hSPcX2RwNvfsP/hXwzyYWVQzziIgYVYFDLAd3gYOLbrN7xd5HpZQmenc0paBDT9gBlcxbvKinhOHJVQXVx5yblfNXsEzxffVzQpPqC6u8MKxHN81v+T6c93hYyA0t44u812Kg7AOR10PowoH4EO+HXgiIVSH6Rv7k0PIdwizFXgqHg1h3dH+Nr+gmhrTfsYit444EREq64AHXwTGYgEDUDHxMRHW/Q0audaHpPjx6MdY+YO4COsmo3C0zauqOdJ788Pap6qxEapLDy/Grqp8UrsgEh+hMnvd14djjlZETck3QkJ1BUKzzIE/cmVcCYmScLlkDb4NZcgq64Kf2ZZ1IyVUR7lmkBUlXKSwjpzREtbhCJzKJlEq6bblvaloCVW3ebd8AJc9ujnYmAlVw/JcIttz3f5YPG7Cal71dgeIYABSHhvHTljP3G8Nl6CtBsRPqGSWtW51bw4Pk1CZV9Wir8oNglB9v8LhQccwCNErXU4vhg2FsF7mWBu5udsTjuEQjvPD1Z8dLNz+bICEjn+WCBNhIkyEiTARJsJEmAgTYSJMhIkwESbCRJgIE+G/T+i4LMgkLMMROr6gzyPcvLQY5l39/UeHPUEcwsbruaF2IxCLX/AI8+xr+0S8T0K48/mhIDI6E6I3jyyVJIT3rilVfVqK0PAINbsPzXXxRPcf6gqIzV8ouxCdCPU7SE0VjwQJTUVEDj7bU44DYaF/MG7cgihGaKsc1r7viUyId3IDabeRSu3lhpuAj2ZtRdl4hJrd+PDGarYCy+zHR1V96u5iL6zHIszLQ01FBRQcym5SCUKlqs/6PzuU3iEQGqtioJ25eEu+PyHqJ836JvoClzxCW406JUYk62LoqvqYf15jCaw2wnzxYi36hUqsnDX+r2d9GlTYRM3XxDJmdkL80rCuwhAC2X7CixD9QvoxF/sAbaETKyF6a592nU0NIg9CVNHEXO+LUKzGTJiXb9RKXyi1rauc8Gt9zYxVfTTXxgWHcFo1EhYFfO3NXq0NheOyABmb0NTtadfGRaMMhIyKe7DcV9UuHiG+V22XXTIqpVnbCPGb0qSqiWpy5xCewIJ7xPqX+DCRu8Y+Jg1hnj3yKl+i/HDmW6Tdpeg2dnJ/N05OIdQ7NOp1JKvrO1YxVpzcevKICPMS7nR3LfwuV13/zAlvdXFtIUxIKFBFWOawC2bBa9SHlqWymoTVFFeiErT/YRf8M2VwH/qonNyGUC1Wxr2Mfzjyz9lQigrfFOsSHgf/vSKHxr2EblnMXR4nyyiFodeE9FqsbRcQOnWGfXYAJU58OoncUSX8aFScHBL/6BrhAdHnDAqLZ+SfnCGRRbF8osVwLJxP7+/k2CfhBk0n4rfMW16dCmV19tE8I/O6u4T4J21BJ8c/mkdxhOISufc+CbSHYxDZR1v5nw4ocnIOQXwT6XfC46jH40i547TnGZZe58m4iue1vM4h7f1YYNMpAt0Q9hSASO7hyCXs43BOrZwPheOe6RzwiHVHQ847l7u3Q3L1cjLkrLPVuz1ZlSIHQ+5MGCwAoeiG3JUwZABCUY20G2HoAISiGXIXwn5PGqeIYsjphPh0njjU7gDohB3OcX3UOj8mEnY9x/VRiyEnEU4uYgtAKOuTYgJhGIvtJks4Egh7m+P6yGzI2wj7neP6yGTI7YT9z3F9pDfkNsIYLLabdIbcTBiJxXaTxpAbCYcTgFCKITcQxmWx3YQMuZYQH4A5NAFDriEcZABCNVfIVcJ45rg+2r6ziQmHHIBQ3+/dQsL45rg+miqEnT3HDaY6HBuEXT7HDaX5xWRDONQRvk1Hu6t/ns+GZLGTkpKSkpKSkpKSkpKS/g39D3U87OUOi/8UAAAAAElFTkSuQmCC",
      },
      {
        courseID: 3,
        courseName: "POO",
        courseDescription:
          "Es un paradigma de programación que viene a innovar la forma de obtener resultados",
        courseURL: "./courses/basics/poo.html",
        courseImage:
          "https://icons.iconarchive.com/icons/iconshock/real-vista-data/256/objects-icon.png",
      },
    ],
  },
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
  listElement.forEach((item) => {
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

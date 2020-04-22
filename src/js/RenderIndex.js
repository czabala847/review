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
export function render(listElement, $container, typeElement) {
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

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

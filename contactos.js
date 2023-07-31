//Lista de contactos: Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos

// Lista de contactos predefinidos
let contactos = [
  {
    id: 1,
    nombres: "Adan",
    apellidos: "Bonilla",
    telefono: "998755482",
    ubicaciones: {
      ciudad: "Tegucigalpa",
      direccion: "Calle 321, Colonia COCO"
    }
  },
  {
    id: 2,
    nombres: "Laura",
    apellidos: "López",
    telefono: "78451268",
    ubicaciones: {
      ciudad: "Aguas Calientes",
      direccion: "Avenida JIJI, Colonia 789"
    }
  },
  {
    id: 3,
    nombres: "Alejandro",
    apellidos: "Gómez",
    telefono: "555858465",
    ubicaciones: {
      ciudad: "Comayaguela",
      direccion: "Calle PI, Colonia 666"
    }
  },
  {
    id: 4,
    nombres: "Alberto",
    apellidos: "Rodríguez",
    telefono: "32541869",
    ubicaciones: {
      ciudad: "Puebla",
      direccion: "Avenida SIX, Colonia 333"
    }
  }
];

  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(contacto) {
    contactos.push(contacto);
  }

  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(id) {
    const indice = contactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
      contactos.splice(indice, 1);
    }
  }


  // Función para actualizar un contacto existente en la lista
function actualizarContacto(id, datosActualizados) {
  const indice = contactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    // Actualizamos los datos del contacto con los nuevos datos proporcionados
    contactos[indice] = { ...contactos[indice], ...datosActualizados };
=======
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("___________________");
    console.log("Lista de contactos:");
    contactos.forEach(contacto => console.log(contacto.nombres + " " + contacto.apellidos));

  }
}

function imprimirContactos(titulo) {
  console.log("____________________________");
  console.log(titulo);
  contactos.forEach(contacto => {
    console.log("ID: " + contacto.id);
    console.log("Nombres: " + contacto.nombres);
    console.log("Apellidos: " + contacto.apellidos);
    console.log("Teléfono: " + contacto.telefono);
    console.log("Ubicaciones:");
    console.log("  Ciudad: " + contacto.ubicaciones.ciudad);
    console.log("  Dirección: " + contacto.ubicaciones.direccion);
    console.log("----------------------------------");
  });
}

  // Imprime la lista de contactos inicial:
  imprimirContactos("Lista de contactos iniciales");

  // Crear y agregar nuevos contactos a la lista
let nuevoContacto1 = {
  id: 5,
  nombres: "Mario",
  apellidos: "Bross",
  telefono: "555123321",
  ubicaciones: {
    ciudad: "Champiñon",
    direccion: "Calle Hongo, Colonia XD"
  }
};

let nuevoContacto2 = {
  id: 6,
  nombres: "Luigi",
  apellidos: "Bross",
  telefono: "555897414",
  ubicaciones: {
    ciudad: "Italia",
    direccion: "Avenida 2020, Colonia LG"
  }
};

agregarContacto(nuevoContacto1);
agregarContacto(nuevoContacto2);

  // Crear y agregar nuevos contactos a la lista
let nuevoContacto1 = {
  id: 5,
  nombres: "Mario",
  apellidos: "Bross",
  telefono: "555123321",
  ubicaciones: {
    ciudad: "Champiñon",
    direccion: "Calle Hongo, Colonia XD"
  }
};

let nuevoContacto2 = {
  id: 6,
  nombres: "Luigi",
  apellidos: "Bross",
  telefono: "555897414",
  ubicaciones: {
    ciudad: "Italia",
    direccion: "Avenida 2020, Colonia LG"
  }
};

agregarContacto(nuevoContacto1);
agregarContacto(nuevoContacto2);

  // Imprime la lista de contactos con 2 adicionales:

  imprimirContactos("Lista de contactos mas los agregados");

  // Supongamos que queremos actualizar el contacto con id 3 (Alejandro Gómez)
const idContactoAActualizar = 3;
const datosActualizados = {
  nombres: "Alex",
  apellidos: "Gómez",
  telefono: "123456789",
  ubicaciones: {
    ciudad: "Tegucigalpa",
    direccion: "Calle sapito, Colonia Guadalupe"
  }
};

actualizarContacto(idContactoAActualizar, datosActualizados);

// Imprimimos la lista de contactos actualizada con título:
imprimirContactos("Contactos después de la actualización");
  
  // Supongamos que deseamos borrar el contacto con id 5 "Mario Bross"
  borrarContacto(5);
  imprimirContactos("Contactos Después de Borrar");
=======
  imprimirContactos();
  
  // Supongamos que deseamos borrar el contacto con id 5 "Mario Bross"
  borrarContacto(5);
  imprimirContactos();

  
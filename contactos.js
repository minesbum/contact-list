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

  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("___________________");
    console.log("Lista de contactos:");
    contactos.forEach(contacto => console.log(contacto.nombres + " " + contacto.apellidos));
  }
  // Imprime la lista de contactos inicial:
  imprimirContactos();

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
  imprimirContactos();
  
  // Supongamos que deseamos borrar el contacto con id 5 "Mario Bross"
  borrarContacto(5);
  imprimirContactos();
  
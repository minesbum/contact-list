//Lista de contactos: Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos

// Lista de contactos predefinidos
let contactos = [
  {
    id: 1,
    nombres: "Adan",
    apellidos: "Bonilla",
    telefono: "123456789",
    ubicaciones: {
      ciudad: "Tegucigalpa",
      direccion: "Calle 154, Colonia 999"
    }
  },
  {
    id: 2,
    nombres: "Laura",
    apellidos: "López",
    telefono: "987654321",
    ubicaciones: {
      ciudad: "Guadalajara",
      direccion: "Avenida XYZ, Colonia 456"
    }
  },
  {
    id: 3,
    nombres: "Alejandro",
    apellidos: "Gómez",
    telefono: "555555555",
    ubicaciones: {
      ciudad: "Monterrey",
      direccion: "Calle ABC, Colonia XYZ"
    }
  },
  {
    id: 4,
    nombres: "Alberto",
    apellidos: "Rodríguez",
    telefono: "777777777",
    ubicaciones: {
      ciudad: "Puebla",
      direccion: "Avenida 456, Colonia ABC"
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
  }
}

// Función para imprimir en consola todos los detalles de los contactos presentes en la lista
function imprimirContactos(titulo) {
  console.log("___________________");
  console.log(titulo);
  contactos.forEach(contacto => {
    console.log("ID: " + contacto.id);
    console.log("Nombres: " + contacto.nombres);
    console.log("Apellidos: " + contacto.apellidos);
    console.log("Teléfono: " + contacto.telefono);
    console.log("Ubicaciones:");
    console.log("  Ciudad: " + contacto.ubicaciones.ciudad);
    console.log("  Dirección: " + contacto.ubicaciones.direccion);
    console.log("--------------");
  });
}

// Imprime la lista de contactos inicial:
imprimirContactos("Lista de Contactos Iniciales");

// Imprime la lista de contactos inicial:
imprimirContactos("Lista de Contactos Iniciales");

imprimirContactos();

// Crear y agregar nuevos contactos a la lista
let nuevoContacto1 = {
  id: 5,
  nombres: "Mario",
  apellidos: "Bross",
  telefono: "854736563",
  ubicaciones: {
    ciudad: "Italia",
    direccion: "Calle 000, Colonia XD"
  }
};

let nuevoContacto2 = {
  id: 6,
  nombres: "Luigi",
  apellidos: "Bross",
  telefono: "84545656",
  ubicaciones: {
    ciudad: "Roma",
    direccion: "Avenida Rico, Colonia 666"
  }
};

agregarContacto(nuevoContacto1);
agregarContacto(nuevoContacto2);

// Imprime la lista de contactos actualizada:
imprimirContactos("Lista de Contactos con Nuevos Agregados");

imprimirContactos();


// Supongamos que queremos actualizar el contacto con id 3 (Alejandro Gómez)
const idContactoAActualizar = 3;
const datosActualizados = {
  nombres: "Alex",
  apellidos: "Gómez",
  telefono: "123456987",
  ubicaciones: {
    ciudad: "Tegucigalpa",
    direccion: "Calle 132, Colonia 3 de Mayo"
  }
};

actualizarContacto(idContactoAActualizar, datosActualizados);

// Imprimimos la lista de contactos actualizada
imprimirContactos("Lista de Contactos Después de la Actualización");

// Supongamos que deseamos borrar el contacto con id 5 (Mario Bross)
borrarContacto(5);
imprimirContactos("Lista de Contactos Después de Borrar");

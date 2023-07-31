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
      ciudad: "Ciudad de México",
      direccion: "Calle 123, Colonia ABC"
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
function imprimirContactos() {
  console.log("___________________");
  console.log("Lista de contactos:");
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
imprimirContactos();

// Crear y agregar nuevos contactos a la lista
let nuevoContacto1 = {
  id: 5,
  nombres: "Mario",
  apellidos: "Bross",
  telefono: "888888888",
  ubicaciones: {
    ciudad: "Tokio",
    direccion: "Calle 789, Colonia XYZ"
  }
};

let nuevoContacto2 = {
  id: 6,
  nombres: "Luigi",
  apellidos: "Bross",
  telefono: "999999999",
  ubicaciones: {
    ciudad: "Roma",
    direccion: "Avenida 123, Colonia 456"
  }
};

agregarContacto(nuevoContacto1);
agregarContacto(nuevoContacto2);

// Imprime la lista de contactos actualizada:
imprimirContactos();

// Supongamos que queremos actualizar el contacto con id 3 (Alejandro Gómez)
const idContactoAActualizar = 3;
const datosActualizados = {
  nombres: "Alex",
  apellidos: "Gómez",
  telefono: "777777777",
  ubicaciones: {
    ciudad: "Ciudad de México",
    direccion: "Calle 789, Colonia XYZ"
  }
};

actualizarContacto(idContactoAActualizar, datosActualizados);

// Imprimimos la lista de contactos actualizada
imprimirContactos();

// Supongamos que deseamos borrar el contacto con id 5 (Mario Bross)
borrarContacto(5);
imprimirContactos();

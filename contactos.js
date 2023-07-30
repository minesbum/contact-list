//Lista de contactos: Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

// Lista de contactos predefinidos
let contactos = [
    "Adan Bonilla",
    "Laura López",
    "Alejandro Gómez",
    "Alberto Rodríguez"
  ];

  
  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(nombreCompleto) {
    contactos.push(nombreCompleto);
  }

  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(nombreCompleto) {
    const indice = contactos.indexOf(nombreCompleto);
    if (indice !== -1) {
      contactos.splice(indice, 1);
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("___________________");
    console.log("Lista de contactos:");
    contactos.forEach(contacto => console.log(contacto));
  }
  // Imprime la lista de contactos inicial:
  imprimirContactos();

  // Imprime la lista de contactos con 2 adicionales:
  agregarContacto("Mario Bross");
  agregarContacto("Luigi Bross");
  imprimirContactos();
  
  // Supongamos que deseamos borrar el contacto "Mario Bross"
  contactos.splice(0,1);
  imprimirContactos();
  
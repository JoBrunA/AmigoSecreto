// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Lista para almacenar los nombres de los amigos

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco antes y después del nombre
    
    // Verifica si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Verifica si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    // Agrega el nombre a la lista y actualiza la visualización
    amigos.push(nombre);
    actualizarLista();
    limpiarInput();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar
    
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crea un elemento de lista
        li.textContent = amigo;
        lista.appendChild(li); // Agrega el nombre a la lista en pantalla
    });
}

// Función para sortear un amigo secreto de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        asignarTextoElemento("#resultado", "<li>No hay nombres en la lista para sortear.</li>");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtiene el nombre seleccionado
    
    // Muestra el amigo secreto en pantalla
    asignarTextoElemento("#resultado", `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`);
}

// Función para limpiar el campo de entrada
function limpiarInput() {
    document.getElementById("amigo").value = ""; // Borra el texto del input
}


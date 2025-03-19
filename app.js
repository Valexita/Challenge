// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminamos espacios en blanco

    if (nombre !== "") {
        amigos.push(nombre);
        mostrarListaAmigos();
        inputAmigo.value = ""; // Limpiamos el campo de entrada
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos resultados anteriores

    // Lógica del sorteo: asignar un amigo secreto a cada participante
    const copiaAmigos = [...amigos];
    const asignaciones = {};

    amigos.forEach((amigo) => {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * copiaAmigos.length);
        } while (copiaAmigos[indiceAleatorio] === amigo);

        asignaciones[amigo] = copiaAmigos[indiceAleatorio];
        copiaAmigos.splice(indiceAleatorio, 1); // Eliminamos al asignado
    });

    // Mostramos los resultados del sorteo
    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultado.appendChild(li);
    }
}


document.addEventListener("DOMContentLoaded", function () { // Nos permite esperar a que la página se cargue antes de ejecutar
    const amigoInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];
    let nombreContador = {}; // Auxiliar en repeticiones


    // Agregar un nuevo amigo 
    window.agregarAmigo = function () {
        let nombre = amigoInput.value.trim(); // Eliminar espacios en blanco (antes o después del nombre)

        // VALIDACIONES

        // Vacio, números o caracteres especiales
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) || nombre === "") {
            alert("Por favor, ingrese un nombre válido");
            return;
        }

        // Añadir un número al final para hacer unicas repeticiones
        if (amigos.includes(nombre)) {
            if (!nombreContador[nombre]) {
                nombreContador[nombre] = 1;
            }
            nombreContador[nombre]++;
            nombre = `${nombre} ${nombreContador[nombre]}`;
        } else {
            nombreContador[nombre] = 1;
        }

        // LISTA DE NOMBRES
        amigos.push(nombre);
        let listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaAmigos.appendChild(listItem);

        amigoInput.value = "";
    };

    // Lista vacia 
    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Mostrar resultado
        resultado.innerHTML = `<h3>El amigo secreto sorteado es: ${amigos[indiceAleatorio]}</h3>`;
        listaAmigos.innerHTML = ""; // Borra la lista visible
        amigos = []; // Vacía el array para futuros sorteos
        nombreContador = {}; // Reinicia el contador de nombres
    };
});




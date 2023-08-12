function saludar() {
    alert('Hola desde archivo externo!');
    event.stopPropagation(); // Detener la propagación del evento
}
document.addEventListener("DOMContentLoaded", function() {
    const contenedorDiv = document.querySelector(".contenedor");

    contenedorDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
        
    });
});
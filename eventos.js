function saludar() {
    alert('Hola desde archivo externo!');
}
document.addEventListener("DOMContentLoaded", function() {
    const contenedorDiv = document.querySelector(".contenedor");

    contenedorDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});
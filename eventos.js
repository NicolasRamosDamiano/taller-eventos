document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor");
  const boton = document.getElementById("saludar");

  contenedor.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });

  boton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
  });
});

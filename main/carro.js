// Productos
const productos = [
  { id: 1, nombre: "Cerveza Amber Ale", precio: 1500 },
  { id: 2, nombre: "Cerveza Golden Ale", precio: 1000 },
  { id: 3, nombre: "Cerveza American Brown Ale", precio: 2000 },
];

// Llenar el selector con opciones de productos
function llenarSelector() {
  let selector = document.getElementById("productos");

  productos.forEach((producto) => {
    let opcion = document.createElement("option");
    opcion.value = producto.id;
    opcion.textContent = producto.nombre;
    selector.appendChild(opcion);
  });
}

// Agregar producto al carrito
function agregarProducto() {
  let selector = document.getElementById("productos");
  let productoSeleccionadoId = parseInt(selector.value);
  let productoSeleccionado = productos.find(
    (p) => p.id === productoSeleccionadoId
  );

  if (productoSeleccionado) {
    let carrito = document.getElementById("carrito");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = productoSeleccionado.nombre;
    carrito.appendChild(nuevoElemento);
    console.log("Producto añadido al carrito:", productoSeleccionado.nombre);
    actualizarTotal();
  } else {
    console.log("Por favor, selecciona un producto válido.");
  }
}

// Actualizar el total del carrito
function actualizarTotal() {
  let total = 0;
  let carrito = document.getElementById("carrito").getElementsByTagName("li");

  for (let i = 0; i < carrito.length; i++) {
    let productoNombre = carrito[i].textContent;
    let producto = productos.find((p) => p.nombre === productoNombre);
    total += producto.precio;
  }

  document.getElementById("total").textContent = total;
}

// Finalizar compra
function finalizarCompra() {
  let carrito = document.getElementById("carrito");
  if (carrito.childElementCount > 0) {
    alert(
      `Total de la compra: $${document.getElementById("total").textContent}`
    );
    envioPago();
  } else {
    alert(
      "El carrito está vacío. Por favor, agrega productos antes de finalizar la compra."
    );
  }
}

// Proceso de pago
function envioPago() {
  alert("Compra finalizada. Gracias por tu compra!");
  location.reload(); // Recargar la página para reiniciar el carrito
}

// Llenar selector al cargar la página
document.addEventListener("DOMContentLoaded", llenarSelector);

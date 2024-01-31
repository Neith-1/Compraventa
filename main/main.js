function saludar() {
  let nombre = prompt("Ingresa tu nombre ");
  if (nombre == "") {
    alert("No ingresaste tu nombre");
    prompt("Ingresa tu nombre ");
  } else {
    alert("Bienvenido " + nombre);
  }
}
saludar();

function edad() {
  let datoEdad = prompt("Ingresa tu edad ");
  if (datoEdad >= 18) {
    alert("Eres mayor de edad, puedes ingresar");
  } else {
    alert("Eres menor de edad, no puedes ingresar a comprar");
    prompt("Ingresa tu edad ");
  }
}
edad();

const productos = {
  producto1: "Producto 1",
  producto2: "Producto 2",
  producto3: "Producto 3",
};

function llenarSelector() {
  let selector = document.getElementById("productos");

  for (const key in productos) {
    if (productos.hasOwnProperty(key)) {
      let opcion = document.createElement("option");
      opcion.value = key;
      opcion.textContent = productos[key];
      selector.appendChild(opcion);
    }
  }
}

function agregarProducto() {
  let selector = document.getElementById("productos");
  let productoSeleccionado = selector.options[selector.selectedIndex].text;

  if (productoSeleccionado.trim() !== "") {
    let carrito = document.getElementById("carrito");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = productoSeleccionado;
    carrito.appendChild(nuevoElemento);
    console.log("Producto añadido al carrito:", productoSeleccionado);
  } else {
    console.log("Por favor, selecciona un producto válido.");
  }
}

function finalizarCompra() {
  let carrito = document.getElementById("carrito");
  if (carrito.childElementCount > 0) {
    alert("Pagar producto");
    envioPago();
  } else {
    alert(
      "El carrito está vacío. Por favor, agrega productos antes de finalizar la compra."
    );
  }
}

function envioPago() {
  alert("Compra finalizada. Gracias por tu compra!");
  location.reload();
}


document.addEventListener("DOMContentLoaded", llenarSelector);

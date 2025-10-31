// ✅ URL de tu script de Google Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbw3nXtm3oMR1Oq0EWHZJw_qGPQ5BeybnspcT2jXR_JhwrpRF9tiPKV5qFqNPUvxgDql/exec";

const contenedorProductos = document.getElementById("productos");
const buscador = document.getElementById("buscador");
const categoriasNav = document.getElementById("categorias");

// Modal
const modal = document.getElementById("modal");
const imgPrincipal = document.getElementById("imgPrincipal");
const miniaturas = document.getElementById("miniaturas");
const modalNombre = document.getElementById("modalNombre");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalMarca = document.getElementById("modalMarca");
const modalPrecio = document.getElementById("modalPrecio");
const btnWhatsApp = document.getElementById("btnWhatsApp");
const cerrarModal = document.getElementById("cerrarModal");

let productos = [];

// ✅ Cargar los datos desde Google Sheets
fetch(scriptURL)
  .then(response

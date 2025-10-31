const API_URL = "https://script.google.com/macros/s/AKfycbw3nXtm3oMR1Oq0EWHZJw_qGPQ5BeybnspcT2jXR_JhwrpRF9tiPKV5qFqNPUvxgDql/exec";
const NUMERO_WHATSAPP = "5213318192003";

let productos = [];

async function cargarDatos() {
  try {
    const res = await fetch(API_URL);
    productos = await res.json();
    mostrarCategorias();
    mostrarProductos(productos);
  } catch (err) {
    console.error("Error cargando datos:", err);
  }
}

function mostrarCategorias() {
  const contenedor = document.getElementById("categorias");
  const categorias = [...new Set(productos.map(p => p.Categoría))];
  contenedor.innerHTML = categorias.map(cat =>
    `<span class="categoria" onclick="filtrar('${cat}')">${cat}</span>`
  ).join('');
}

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = lista.map(p => `
    <div class="card" onclick="abrirModal('${encodeURIComponent(JSON.stringify(p))}')">
      <img src="${p.Imagen_Frontal || 'images/placeholder.png'}" alt="${p.Descripción}">
      <h3>${p.Descripción}</h3>
      <p><strong>$${p.Precio}</strong></p>
    </div>
  `).join('');
}

function filtrar(cat) {
  const filtrados = productos.filter(p => p.Categoría === cat);
  mostrarProductos(filtrados);
}

document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p => p.Descripción.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
});
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log("✅ Datos recibidos desde Google Sheets:", data);
    productos = data;
    mostrarCategorias();
    mostrarProductos(productos);
  })
  .catch(err => console.error("❌ Error al obtener datos:", err));


cargarDatos();



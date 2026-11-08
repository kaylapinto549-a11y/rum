const destinos = [
  {
    id: 1, nombre: "Cartagena", pais: "Bolívar, Colombia",
    tipo: "nacional", duracion: "4 días · 3 noches", precio: 480000,
    imagen: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
    descripcion: "Descubre la magia de la ciudad amurallada, sus calles coloniales, playas y atardeceres caribeños.",
    actividades: "Ciudad amurallada, Castillo de San Felipe, playas y gastronomía."
  },
  {
    id: 2, nombre: "San Andrés", pais: "San Andrés, Colombia",
    tipo: "nacional", duracion: "5 días · 4 noches", precio: 750000,
    imagen: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
    descripcion: "Un paraíso de aguas cristalinas, playas blancas y paisajes tropicales.",
    actividades: "Johnny Cay, mar de siete colores, snorkel y recorridos por la isla."
  },
  {
    id: 3, nombre: "Medellín", pais: "Antioquia, Colombia",
    tipo: "nacional", duracion: "3 días · 2 noches", precio: 390000,
    imagen: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=85",
    descripcion: "Conoce la ciudad de la eterna primavera, llena de cultura, naturaleza y modernidad.",
    actividades: "Comuna 13, Parque Arví, metrocable y gastronomía."
  },
  {
    id: 4, nombre: "Santa Marta", pais: "Magdalena, Colombia",
    tipo: "nacional", duracion: "4 días · 3 noches", precio: 520000,
    imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    descripcion: "Disfruta de playas, montañas y naturaleza en el Caribe colombiano.",
    actividades: "Parque Tayrona, Playa Blanca y centro histórico."
  },
  {
    id: 5, nombre: "Eje Cafetero", pais: "Quindío, Colombia",
    tipo: "nacional", duracion: "4 días · 3 noches", precio: 560000,
    imagen: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
    descripcion: "Paisajes verdes, montañas y pueblos tradicionales llenos de encanto.",
    actividades: "Valle del Cocora, Salento y fincas cafeteras."
  },
  {
    id: 6, nombre: "Amazonas", pais: "Amazonas, Colombia",
    tipo: "nacional", duracion: "5 días · 4 noches", precio: 890000,
    imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85",
    descripcion: "Una experiencia para descubrir la selva y su extraordinaria biodiversidad.",
    actividades: "Navegación por el río, fauna y experiencias culturales."
  },
  {
    id: 7, nombre: "Cancún", pais: "Quintana Roo, México",
    tipo: "internacional", duracion: "5 días · 4 noches", precio: 1850000,
    imagen: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=900&q=85",
    descripcion: "Playas de arena blanca, aguas turquesas y cultura mexicana.",
    actividades: "Cenotes, Isla Mujeres, playas y zonas arqueológicas."
  },
  {
    id: 8, nombre: "París", pais: "Francia",
    tipo: "internacional", duracion: "6 días · 5 noches", precio: 4200000,
    imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
    descripcion: "Descubre monumentos, museos, arquitectura y rincones llenos de historia.",
    actividades: "Torre Eiffel, Louvre, río Sena y Montmartre."
  },
  {
    id: 9, nombre: "Nueva York", pais: "Estados Unidos",
    tipo: "internacional", duracion: "6 días · 5 noches", precio: 3900000,
    imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=85",
    descripcion: "Vive la energía de una ciudad llena de rascacielos, cultura y entretenimiento.",
    actividades: "Times Square, Central Park y Estatua de la Libertad."
  }
];

// =================================
// CONFIGURACIÓN WHATSAPP
// =================================

// Número de ejemplo. Reemplázalo por el número real.
// Colombia: 57 + número de celular, sin espacios.

const numeroWhatsApp = "573001234567";

function enviarWhatsApp(mensaje) {
  if (numeroWhatsApp === "573001234567") {
    alert("Coloca el número real de WhatsApp en script.js.");
    return;
  }

  const url = "https://wa.me/" + numeroWhatsApp +
    "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}

// =================================
// FORMATO DE DINERO
// =================================

function dinero(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

// =================================
// MOSTRAR DESTINOS
// =================================

const grid = document.getElementById("travelGrid");
const emptyMessage = document.getElementById("emptyMessage");

function mostrarDestinos(lista) {
  grid.innerHTML = "";
  emptyMessage.hidden = lista.length !== 0;

  lista.forEach(destino => {
    const card = document.createElement("article");
    card.className = "travel-card";

    card.innerHTML = `
      <div class="travel-photo">
        <img src="${destino.imagen}" alt="${destino.nombre}" loading="lazy">
        <span class="travel-label">
          ${destino.tipo === "nacional" ? "COLOMBIA" : "MUNDO"}
        </span>
      </div>

      <div class="travel-content">
        <h3>${destino.nombre}</h3>
        <p class="location">↗ ${destino.pais}</p>

        <div class="travel-info">
          <span>◷ ${destino.duracion}</span>
          <span>✧ EXPERIENCIA</span>
        </div>

        <div class="travel-footer">
          <div class="travel-price">
            <small>DESDE / PERSONA</small>
            <strong>${dinero(destino.precio)}</strong>
          </div>
          <button class="discover-btn" data-id="${destino.id}">
            Descubrir ↗
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

mostrarDestinos(destinos);

// =================================
// BUSCADOR
// =================================

const search = document.getElementById("search");

function buscar() {
  const texto = search.value.toLowerCase().trim();

  const resultados = destinos.filter(d =>
    d.nombre.toLowerCase().includes(texto) ||
    d.pais.toLowerCase().includes(texto)
  );

  mostrarDestinos(resultados);

  document.getElementById("destinos").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("searchBtn").addEventListener("click", buscar);

search.addEventListener("input", () => {
  const texto = search.value.toLowerCase().trim();

  const resultados = destinos.filter(d =>
    d.nombre.toLowerCase().includes(texto) ||
    d.pais.toLowerCase().includes(texto)
  );

  mostrarDestinos(resultados);
});

// =================================
// FILTROS
// =================================

document.querySelectorAll(".filter").forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b =>
      b.classList.remove("active")
    );

    boton.classList.add("active");
    search.value = "";

    const filtro = boton.dataset.filter;

    if (filtro === "todos") {
      mostrarDestinos(destinos);
    } else {
      mostrarDestinos(
        destinos.filter(d => d.tipo === filtro)
      );
    }
  });
});

// =================================
// DETALLES DEL DESTINO
// =================================

grid.addEventListener("click", event => {
  const boton = event.target.closest(".discover-btn");

  if (!boton) return;

  const destino = destinos.find(d =>
    d.id === Number(boton.dataset.id)
  );

  if (!destino) return;

  const detailBox = document.getElementById("detailBox");

  detailBox.innerHTML = `
    <div class="detail-layout">
      <img src="${destino.imagen}" alt="${destino.nombre}">
      <div class="detail-content">
        <span class="overline olive">DESCUBRE ESTE LUGAR</span>
        <h3>${destino.nombre}</h3>
        <p>📍 ${destino.pais}</p>
        <p>${destino.descripcion}</p>
        <p><b>Experiencias:</b> ${destino.actividades}</p>
        <p><b>Duración:</b> ${destino.duracion}</p>
        <p class="detail-price">Desde ${dinero(destino.precio)} por persona.</p>
        <button class="detail-quote" id="detailQuote">Cotizar este viaje ↗</button>
      </div>
    </div>
  `;

  document.getElementById("detailQuote").addEventListener("click", () => {
    document.getElementById("destination").value = destino.id;

    document.getElementById("cotizador").scrollIntoView({
      behavior: "smooth"
    });
  });

  document.getElementById("detalle").scrollIntoView({
    behavior: "smooth"
  });
});

// =================================
// LISTAS DE SELECCIÓN
// =================================

const destinationSelect = document.getElementById("destination");
const contactDestination = document.getElementById("contactDestination");

destinos.forEach(d => {
  const option = document.createElement("option");
  option.value = d.id;
  option.textContent = d.nombre;
  destinationSelect.appendChild(option);

  const option2 = document.createElement("option");
  option2.value = d.id;
  option2.textContent = d.nombre;
  contactDestination.appendChild(option2);
});

// =================================
// COTIZADOR
// =================================

// Costo estimado de hotel por persona y noche.

const hotelPrices = {
  economico: 90000,
  estandar: 160000,
  lujo: 290000
};

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();

  const id = Number(destinationSelect.value);
  const destino = destinos.find(d => d.id === id);
  const personas = Number(document.getElementById("people").value);
  const noches = Number(document.getElementById("nights").value);
  const hotel = document.getElementById("hotel").value;

  if (!destino || !Number.isInteger(personas) ||
      !Number.isInteger(noches) ||
      personas < 1 || personas > 20 ||
      noches < 1 || noches > 30) {
    alert("Revisa el número de viajeros y las noches.");
    return;
  }

  const paquete = destino.precio * personas;
  const alojamiento = hotelPrices[hotel] * personas * noches;
  const total = paquete + alojamiento;

  document.getElementById("total").textContent = dinero(total);

  document.getElementById("description").textContent =
    `${destino.nombre} · ${personas} viajeros · ${noches} noches · Hotel ${hotel}.`;

  document.getElementById("quoteResult").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

// =================================
// FORMULARIO WHATSAPP
// =================================

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const telefono = document.getElementById("phone").value.trim();
  const id = Number(contactDestination.value);
  const destino = destinos.find(d => d.id === id);
  const mensaje = document.getElementById("message").value.trim();

  if (!nombre || !telefono || !destino) {
    alert("Completa los campos obligatorios.");
    return;
  }

  const texto =
    `¡Hola, Rumbo Aventura! ✈️\n\n` +
    `Deseo solicitar asesoría de viaje.\n\n` +
    `Nombre: ${nombre}\n` +
    `Teléfono: ${telefono}\n` +
    `Destino: ${destino.nombre}\n` +
    `Mensaje: ${mensaje || "Quiero conocer los paquetes disponibles."}`;

  enviarWhatsApp(texto);
});

// =================================
// MENÚ PARA CELULARES
// =================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
const autoData = {
    // 1. Información principal
    nombre: "Mazda 3 Grand Touring",
    ano: 2012,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
   fichaTecnica: [
    // Información General
    { icono: "fa-solid fa-tags", texto: "Q.40,000" },
  { icono: "fa-solid fa-calendar-days", texto: "Modelo 2012 |  Reciente Ingreso 🇺🇸 🇬🇹" },
  { icono: "fa-solid fa-car-side", texto: " Grand Touring    (Máximo Equipamiento)" },
  
  // Motor y Rendimiento
  { icono: "fa-solid fa-gauge", texto: "<b>SKYACTIV-G</b> (Eficiencia y Potencia)" },
  { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
  { icono: "fa-solid fa-gears", texto: "Transmisión Automática" },
  { icono: "fa-solid fa-microchip", texto: "155 HP  (Motor 2.0L)" }, // Opcional, solo si confirmas motor 2.0L
  
  // Lujo y Confort
  { icono: "fa-solid fa-palette", texto: "Azul" },
  { icono: "fa-solid fa-couch", texto: "Interior Full Cuero" },
  { icono: "fa-solid fa-volume-high", texto: " Sonido Premium BOSE" },
  { icono: "fa-solid fa-sun", texto: "Sunroof" },
  { icono: "fa-solid fa-temperature-low", texto: "Aire Acondicionado" },
  { icono: "fa-solid fa-power-off", texto: "Vidrios y Cerradura Eléctrica" },
  
  // Conectividad y Control
  { icono: "fa-solid fa-podcast", texto: "Radio con Conectividad Bluetooth" },
  { icono: "fa-solid fa-grip-horizontal", texto: "Mandos al Timón" },
  
  // Seguridad y Documentación
  { icono: "fa-solid fa-car-on", texto: "Bolsas de Aire Completas 🚨" },
  { icono: "fa-solid fa-file-invoice", texto: "Papeles en Orden (Listo para Traspaso)" },
],
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/mazda_3/1.webp", thumb: "/assets/mazda_3/thumbs/1.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/mazda_3/2.webp", thumb: "/assets/mazda_3/thumbs/2.webp", alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/mazda_3/3.webp", thumb: "/assets/mazda_3/thumbs/3.webp", alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/mazda_3/4.webp", thumb: "/assets/mazda_3/thumbs/4.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/mazda_3/5.webp", thumb: "/assets/mazda_3/thumbs/5.webp", alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/mazda_3/6.webp", thumb: "/assets/mazda_3/thumbs/6.webp", alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/mazda_3/7.webp", thumb: "/assets/mazda_3/thumbs/7.webp", alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/mazda_3/8.webp", thumb: "/assets/mazda_3/thumbs/8.webp",  alt: "Jeep Wranfler 2014 foto 8" },
         { src: "/assets/mazda_3/9.webp", thumb: "/assets/mazda_3/thumbs/9.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
        
    ],

    // 4. Descripción del auto
    descripcion: `
    <br>
    ¡Lujo y Rendimiento en un solo auto! Este <b>Mazda 3 Grand Touring 2012</b> combina lo mejor de la ingeniería japonesa con un equipamiento de primera línea.
    <br><br>
    <b>Rendimiento SKYACTIV:</b> Equipado con la tecnología de motor <b>SKYACTIV</b> que ofrece una <b>excelente eficiencia</b> de combustible sin sacrificar la potencia característica de Mazda, garantizando un manejo deportivo, suave y responsivo en la ciudad y carretera.
    <br><br> 
    <b>Confort y Lujo Exclusivo:</b> Como versión <b>Grand Touring</b>*, el interior te envuelve en acabados de alta calidad, destacando su tapicería <b>Full Cuero</b> y el sistema de sonido premium <b>BOSE</b>. Incluye <b>Sunroof</b> eléctrico y mandos al timón para una experiencia de conducción superior.
    <br><br>
    <b>Seguridad y Documentación:</b> Tu tranquilidad es nuestra prioridad; cuenta con <b>Bolsas de Aire Completas</b> e implementos de seguridad activa. El vehículo es de <b>Reciente Ingreso</b> y tiene todos los <b>Papeles en Orden</b>, listo para traspaso inmediato.
    <br>
`,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});
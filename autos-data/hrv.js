const autoData = {
    // 1. Información principal
    nombre: "Honda HR-V EX",
    ano: 2018,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
       { icono: "fa-solid fa-tags", texto: "Q.90,000" },
    { icono: "fa-solid fa-calendar-days", texto: "2018" },
    { icono: "fa-solid fa-palette", texto: "Gris" },
    { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
    { icono: "fa-solid fa-gears", texto: "Automático CVT" },
    { icono: "fa-solid fa-tachometer-alt", texto: "Motor 1.8L i-VTEC" },
    { icono: "fa-solid fa-car-on", texto: "bolsas de aire - Cortina copiloto" },
    { icono: "fa-solid fa-fan", texto: "Aire acondicionado automático" },
    { icono: "fa-solid fa-chair", texto: "Tapicería de tela" },
    { icono: "fa-solid fa-window-maximize", texto: "Vidrios y retrovisores eléctricos" },
    { icono: "fa-solid fa-road", texto: "Control de tracción y estabilidad (VSA)" },
    { icono: "fa-solid fa-camera", texto: "Cámara de reversa" },
    { icono: "fa-solid fa-bluetooth-b", texto: "Bluetooth y pantalla táctil" },
{ icono: "fa-solid fa-key", texto: "Encendido por botón (Push Start)" },
       ],
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/hrv/1.webp", thumb:  "/assets/hrv/thumbs/01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/hrv/2.webp", thumb:  "/assets/hrv/thumbs/2.webp", alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/hrv/3.webp", thumb:  "/assets/hrv/thumbs/3.webp", alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/hrv/4.webp", thumb:  "/assets/hrv/thumbs/4.webp", alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/hrv/5.webp", thumb:  "/assets/hrv/thumbs/5.webp", alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/hrv/6.webp", thumb:  "/assets/hrv/thumbs/6.webp", alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/hrv/7.webp", thumb:  "/assets/hrv/thumbs/7.webp", alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/hrv/8.webp", thumb:  "/assets/hrv/thumbs/8.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/hrv/9.webp", thumb:  "/assets/hrv/thumbs/9.webp", alt: "Jeep Wranfler 2014 foto 8" },
    
       
    ],

    // 4. Descripción del auto
    descripcion:`
        <p>
           ¡Una excelente opción para tu día a día! Este Honda HR-V 2018 EX acaba de ingresar y está en perfectas condiciones. Es el vehículo ideal para quienes buscan comodidad, espacio y una conducción suave. Su motor 1.8L es potente y eficiente, ideal tanto para la ciudad como para viajes más largos.
        </p>
        <p>
           Con su transmisión automática CVT, disfrutarás de un manejo fluido y sin interrupciones. Además, el interior te encantará: cuenta con tapicería impecable, vidrios eléctricos y un aire acondicionado automático que te mantendrá siempre fresco. Este vehículo tiene  un motor y caja en excelente estado, garantizando que está listo para cualquier aventura que tengas en mente.
        </p>
    `,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});
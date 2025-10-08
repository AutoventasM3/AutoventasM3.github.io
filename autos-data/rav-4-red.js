const autoData = {
    // 1. Información principal
    nombre: "Toyota Rav4 LE",
    ano: 2013,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
     fichaTecnica: [
        { icono: "fa-solid fa-tags", texto: "91,500" }, // Deja este para que puedas poner el precio real.
        { icono: "fa-solid fa-calendar-days", texto: "2013" },
        { icono: "fa-solid fa-gauge-high", texto: "170,000 millas" }, // Coloca el kilometraje real
        { icono: "fa-solid fa-palette", texto: "Rojo (Intenso)" }, // Asumo un rojo vibrante por ser un color que resalta.

        { icono: "fa-solid fa-gears", texto: "Transmisión Automática" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-car-on", texto: "Tracción 4x2 (Delantera)" },
        { icono: "fa-solid fa-gauge", texto: "Motor 2.5 Litros de 4 Cilindros" }, // Motor típico para la versión LE en la 4ta generación.
        { icono: "fa-solid fa-bolt", texto: "Potencia de 176 CV" },
        
        { icono: "fa-solid fa-leaf", texto: "Modo de manejo ECO y SPORT" },
        { icono: "fa-solid fa-users", texto: "Capacidad para 5 pasajeros" },
        { icono: "fa-solid fa-box", texto: "Gran espacio de Carga (547 litros)" }, // Dato de la 4ta generación
        { icono: "fa-solid fa-tire", texto: "Llantas de 17 pulgadas" }, 

        { icono: "fa-solid fa-snowflake", texto: "Aire Acondicionado (A/C) Funcionando" },
        { icono: "fa-solid fa-shield-halved", texto: "Bolsas de Aire Completas" },
        { icono: "fa-solid fa-video", texto: "Cámara de Retroceso" },
        { icono: "fa-solid fa-microphone", texto: "Mandos al Volante para Audio y Bluetooth" },
        
        { icono: "fa-solid fa-tv", texto: "Radio con Pantalla Táctil y Bluetooth" },
        { icono: "fa-solid fa-car-battery", texto: "Vidrios y Retrovisores Eléctricos" },
        { icono: "fa-solid fa-couch", texto: "Tapicería de Tela en estado Nítido" },
        { icono: "fa-solid fa-file-circle-check", texto: "Papeles en Orden para Traspaso Inmediato" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/rav-red/1.webp", thumb: "/assets/rav-red/thumbs/1.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/rav-red/2.webp", thumb: "/assets/rav-red/thumbs/2.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/rav-red/3.webp", thumb: "/assets/rav-red/thumbs/3.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/rav-red/4.webp", thumb: "/assets/rav-red/thumbs/4.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/rav-red/5.webp", thumb: "/assets/rav-red/thumbs/5.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/rav-red/6.webp", thumb: "/assets/rav-red/thumbs/6.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/rav-red/7.webp", thumb: "/assets/rav-red/thumbs/7.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/rav-red/8.webp", thumb: "/assets/rav-red/thumbs/8.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/9.webp", thumb: "/assets/rav-red/thumbs/9.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/10.webp", thumb: "/assets/rav-red/thumbs/10.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/11.webp", thumb: "/assets/rav-red/thumbs/11.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/12.webp", thumb: "/assets/rav-red/thumbs/12.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/13.webp", thumb: "/assets/rav-red/thumbs/13.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/14.webp", thumb: "/assets/rav-red/thumbs/14.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-red/15.webp", thumb: "/assets/rav-red/thumbs/15.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
    ],

    // 4. Descripción del auto
   descripcion: `
        <h2>¡La Confiabilidad de Toyota en Color Vibrante!</h2>
        <p>Descubra esta excepcional <b>Toyota RAV4 LE 2013</b> en un atractivo color <b>Rojo</b>, lista para ser su compañera ideal tanto en la ciudad como en carretera. Conocida por su legendaria <b>durabilidad y bajo mantenimiento</b>, esta SUV combina la practicidad de un vehículo familiar con la eficiencia de un motor 4 cilindros.</p>

        <h3>Rendimiento Inteligente y Seguro</h3>
        <p>Equipada con un motor de <b>2.5 Litros</b>, esta RAV4 no solo ofrece una potencia sólida (aproximadamente 176 HP), sino que también es sorprendentemente eficiente. Gracias a sus modos de manejo <b>ECO y SPORT</b>, usted puede elegir entre maximizar el ahorro de combustible o disfrutar de una respuesta más ágil, adaptándose a cualquier situación de manejo.</p>
        
        <p>Su seguridad es nuestra prioridad: cuenta con <b>Bolsas de Aire completas</b> y un chasis robusto de Toyota. La <b>*tracción 4x2 (delantera)</b> garantiza un manejo estable y un excelente rendimiento de combustible para el día a día.</p>

        <h3>Comodidad y Tecnología a Bordo</h3>
        <p>El interior está diseñado para la comodidad de <b>cinco pasajeros</b> y destaca por su <b>tapicería nítida</b> y un amplio maletero. La experiencia de manejo se eleva con:</p>
        <ul>
            <li><b>Radio con Pantalla Táctil y Bluetooth</b> para su entretenimiento y llamadas manos libres.</li>
            <li><b>Cámara de Retroceso</b> que simplifica y asegura el parqueo.</li>
            <li><b>Mandos al Volante</b> que permiten controlar el audio y el teléfono sin quitar las manos del timón.</li>
            <li><b>Aire Acondicionado funcionando</b> a la perfección para mantener un clima ideal.</li>
        </ul>

        <h3>Transparencia y Confianza</h3>
        <p>Este vehículo se encuentra en <b>óptimas condiciones mecánicas</b> y con todos los <b>papeles listos para traspaso inmediato</b>. Garantizamos una compra segura y transparente. Si desea, <b>puede traer a su mecánico de confianza</b> para una inspección completa. ¡Venga a probarla y llévese la tranquilidad de manejar un Toyota!</p>
    `,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});
document.getElementById("snoopybutton").addEventListener("click", function() {
    var img = document.getElementById("piloto");
    img.style.display = "block";
    img.style.opacity = 1;

    var posX = 0;
    var posY = 0;
    var directionX = 1;
    var directionY = 1;
    var speed = 2;

    function moveImage() {
        var imgWidth = img.offsetWidth;
        var imgHeight = img.offsetHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        posX += directionX * speed;
        posY += directionY * speed;

        if (posX + imgWidth > windowWidth || posX < 0) {
            directionX *= -1;
        }
        if (posY + imgHeight > windowHeight || posY < 0) {
            directionY *= -1;
        }

        img.style.left = posX + "px";
        img.style.top = posY + "px";

        requestAnimationFrame(moveImage);
    }

    moveImage();
});

var clickSound = new Audio('assets/click.wav'); // Carga el sonido

document.getElementById("snoopybutton").addEventListener("click", function () {
    clickSound.play(); // Reproduce el sonido cuando se hace clic
});

// 1️⃣ Cargar el sonido de Snoopy
var snoopySound = new Audio('assets/clicksnoopy.wav'); // Ruta del sonido

var clickCount = 0; // Contador de clics en Snoopy piloto

// Unificar los eventos click en piloto
document.getElementById("piloto").addEventListener("click", function () {
    snoopySound.play(); // Reproduce el sonido cada vez que se hace clic
    clickCount++; // Aumenta el contador de clics

    if (clickCount === 1) {
        // Primer toque: Aparece el primer cuadro de texto
        let fact1 = document.createElement("div");
        fact1.innerHTML = "Snoopy es uno de los personajes más icónicos de la cultura pop y la mascota estrella de la historieta Peanuts, creada por Charles M. Schulz en 1950. Es un beagle soñador, carismático y lleno de imaginación, que ha conquistado generaciones con su personalidad divertida y sus fantasías de piloto de la Primera Guerra Mundial, escritor y otras aventuras.";
        fact1.classList.add("snoopy-text-box", "mostrar");
        fact1.id = "fact1";
        document.body.appendChild(fact1);
    }

    if (clickCount === 2) {
        // Segundo toque: Aparece el segundo cuadro de texto
        let fact2 = document.createElement("div");
        fact2.innerHTML = "El video Wannabe de Spice Girls fue grabado en una sola toma. El icónico video musical, donde las chicas corren por un lujoso hotel en Londres, parece una toma continua, pero en realidad tiene algunos cortes sutiles. Fue grabado en una sola noche y el equipo de producción al principio no quería lanzarlo porque parecía muy desordenado.";
        fact2.classList.add("wannabe-text-box", "mostrar");
        fact2.id = "fact2";
        document.body.appendChild(fact2);
    }

    if (clickCount === 3) {
        // Tercer toque: Aparece el tercer cuadro de texto
        let fact3 = document.createElement("div");
        fact3.innerHTML = "El primer sitio web del mundo fue creado por Tim Berners-Lee en 1991. Era una simple página de texto con enlaces a otros documentos y explicaba cómo funcionaba la World Wide Web.";
        fact3.classList.add("fact-text-box", "mostrar");
        fact3.id = "fact3";
        document.body.appendChild(fact3);
    }

    if (clickCount === 4) {
        // Cuarto toque: Aparece el cuarto cuadro de texto
        let fact4 = document.createElement("div");
        fact4.innerHTML = "El Tamagotchi, una mascota virtual, fue uno de los juguetes más populares de los años 90. Fue creado en Japón y vendió más de 76 millones de unidades en todo el mundo.";
        fact4.classList.add("fact-text-box", "mostrar");
        fact4.id = "fact4";
        document.body.appendChild(fact4);
    }

    if (clickCount === 5) {
        // Quinto toque: Aparece el quinto cuadro de texto
        let fact5 = document.createElement("div");
        fact5.innerHTML = "La serie de televisión Friends se estrenó en 1994 y se convirtió en un fenómeno cultural. Sus personajes y frases se volvieron icónicos y la serie sigue siendo popular hasta hoy.";
        fact5.classList.add("fact-text-box", "mostrar");
        fact5.id = "fact5";
        document.body.appendChild(fact5);
    }

    if (clickCount === 6) {
        // Sexto toque: Aparece el sexto cuadro de texto
        let fact6 = document.createElement("div");
        fact6.innerHTML = "El GIF animado, un formato de imagen que soporta animaciones, se popularizó en los años 90 y sigue siendo ampliamente utilizado en internet hoy en día.";
        fact6.classList.add("fact-text-box", "mostrar");
        fact6.id = "fact6";
        document.body.appendChild(fact6);
    }

    if (clickCount === 7) {
        document.getElementById("snoopydance").style.display = "block"; // Muestra el GIF
    }
});

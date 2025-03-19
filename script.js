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
    snoopySound.play(); // Reproduce el sonido
    clickCount++; // Aumenta el contador de clics

    if (clickCount === 1) {
        // Primer toque: Aparece el primer cuadro de texto
        let fact1 = document.createElement("div");
        fact1.innerHTML = "Snoopy es uno de los personajes más icónicos de la cultura pop y la mascota estrella de la historieta Peanuts, creada por Charles M. Schulz en 1950. Es un beagle soñador, carismático y lleno de imaginación, que ha conquistado generaciones con su personalidad divertida y sus fantasías de piloto de la Primera Guerra Mundial, escritor y otras aventuras.";
        fact1.classList.add("snoopy-text-box","mostrar");
        fact1.id = "fact1";
        document.body.appendChild(fact1);
    }

    if (clickCount === 2) {
        // Segundo toque: Aparece el segundo cuadro de texto
        let fact2 = document.createElement("div");
        fact2.innerHTML = "El video Wannabe de Spice Girls fue grabado en una sola toma. El icónico video musical, donde las chicas corren por un lujoso hotel en Londres, parece una toma continua, pero en realidad tiene algunos cortes sutiles. Fue grabado en una sola noche y el equipo de producción al principio no quería lanzarlo porque parecía muy desordenado.";
        fact2.classList.add("wannabe-text-box","mostrar");
        fact2.id = "fact2";
        document.body.appendChild(fact2);
    }

    if (clickCount === 3) {  
        document.getElementById("snoopydance").style.display = "block"; // Muestra el GIF  
    }
});

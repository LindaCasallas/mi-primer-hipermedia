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


function test() {
    console.log("Scroll.");
    let posY = window.scrollY;
    console.log(posY);
}

function moveSquare() {
    let square1 = document.querySelector(".square1");
    let square2 = document.querySelector(".square2");
    let square3 = document.querySelector(".square3");

    let posX = window.scrollX;
    let posY = window.scrollY;
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    let m = posY;

    console.log("window.innerWidth: " + originX);
    console.log("window.innerHeight: " + originY);

   
    square1.style.transform = "translate("+(originX - 25)+"px, "+(m + posY + originY - 25)+"px)";
    square1.style.zIndex = "1";

    square2.style.transform = "translate("+(originX - 50)+"px, "+(posY + originY - 50)+"px)";
    square2.style.zIndex = "0";

    square3.style.transform = "translate("+(originX - 75)+"px, "+((-1 * m) + posY + originY - 75)+"px)";
    square3.style.zIndex = "-1";
    
}

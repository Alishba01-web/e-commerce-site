var mainImage = document.getElementById("main");
var smallImage = document.getElementsByClassName("smaller");


smallImage[0].onclick = function (){
    mainImage.src = smallImage[0].src;

}
console.log("JS file loaded");


smallImage[1].onclick = function (){
    mainImage.src = smallImage[1].src;

}

smallImage[2].onclick = function (){
    mainImage.src = smallImage[2].src;

}

smallImage[3].onclick = function (){
    mainImage.src = smallImage[3].src;

}



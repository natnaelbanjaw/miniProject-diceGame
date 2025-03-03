var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
// var randomNumber2 = Math.floor(1 + Math.random() * 6);

var image = document.getElementById("img1");
var image2 = document.getElementById("img2");

var randomImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]


image.setAttribute("src", randomImage[randomNumber1]);
image2.setAttribute("src", randomImage[randomNumber2]);


if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "player1 won";
 }
 else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player2 won";
}

else {
    document.querySelector("h1").innerHTML = "draw!";

}

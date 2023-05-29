randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const randomNumber1 = randomIntFromInterval(1, 6);
const randomImageSource1 = "images/dice" + randomNumber1 + ".png";

const randomNumber2 = randomIntFromInterval(1, 6);
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// asignar aleatoriamente alguna de las imagenes de dado a cada jugador 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

//actualizar el titulo

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML="It's a tie!";
}
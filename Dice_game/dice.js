  function rollTheDice() {
    
  var randomNumber1 = Math.floor(Math.random()* 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  //document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    document.querySelector(".img1").setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random()* 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ;
  document.querySelector(".img2").setAttribute("src",randomImageSource2);


  if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML ="Draw ⌛"
  }
  else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 win the game 🏆"
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 win the game 🏆"
  }
}

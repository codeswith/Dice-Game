// Random-Dice(1to6) //

let randomNumber1=Math.floor(Math.random()*6)+1;
let randomDiceimg1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceimg1);
let randomNumber2=Math.floor(Math.random()*6)+1;
let randomDiceimg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimg2);

// h1-conditions(win,loss,draw) //

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player1 wins!🎲";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player2 wins!🎲";
}
else{
  document.querySelector("h1").innerHTML="Refresh Me";
}

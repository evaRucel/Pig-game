var totalScore, roundScore, activePlayer, dice, playGame;

newStart();
function newStart(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    newGame = true;
    
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;
    
    document.querySelector(".diceImage").style.display = "none";

    document.querySelector("#name-0").textContent = "Skore 1. hraca";
    document.querySelector("#name-1").textContent = "Skore 2. hraca";

    
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

document.querySelector(".newGame").addEventListener("click", newStart);


//hodit kockou
document.querySelector(".rollDice").addEventListener("click", function(){
    if(newGame){
        var dice = Math.ceil(Math.random() * 6);

    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    diceElement.src = "img/" + dice + ".jpg";

//definujem si currentScore = roundScore
    if(dice !== 1){
        roundScore = roundScore + dice;
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    }else {
        nextPlayer();
    }
    }
    
});
function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.querySelector("#currentScore-0").textContent = 0;
    document.querySelector("#currentScore-1").textContent = 0;
    
    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
    
}

//podrzat skore
document.querySelector(".holdScore").addEventListener("click", function(){
    if(newGame){
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        document.getElementById("totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
        
        if(totalScore[activePlayer] >= 30){
            document.querySelector("#name-" + activePlayer).textContent = "Vitaz!";
            document.querySelector(".diceImage").style.display = "none";
            newGame = false;
        }else {
            nextPlayer();
        }
    }


});













/* When you click on the left dice this function executes */
document.querySelector(".img1").addEventListener('click', function() {
    /*Random number generator + code for the left dice */
    var leftRandomNumber;
    leftRandomNumber = Math.floor(Math.random() * 6 + 1);
    if (leftRandomNumber == 1)
    {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice1.png");
    } else if (leftRandomNumber == 2) {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice2.png");
    } else if (leftRandomNumber == 3) {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice3.png");
    } else if (leftRandomNumber == 4) {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice4.png");
    } else if (leftRandomNumber == 5) {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice5.png");
    } else if (leftRandomNumber == 6) {
        link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice6.png");
    } else {
        console.log("Random number generator error!");
    }
    /* For right dice */
    var rightRandomNumber;
    rightRandomNumber = Math.floor(Math.random() * 6 + 1);
    if (rightRandomNumber == 1)
    {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice1.png");
    } else if (rightRandomNumber == 2) {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice2.png");
    } else if (rightRandomNumber == 3) {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice3.png");
    } else if (rightRandomNumber == 4) {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice4.png");
    } else if (rightRandomNumber == 5) {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice5.png");
    } else if (rightRandomNumber == 6) {
        link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice6.png");
    } else {
        console.log("Random number generator error!");
    }
    /* Who wins part - player1 or player2?*/
    if (leftRandomNumber > rightRandomNumber) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    } else if (leftRandomNumber < rightRandomNumber) {
        document.querySelector("h1").textContent = "🚩Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "🚩Draw!";
    }
});
/* When you click on the right dice, this function executes */
document.querySelector(".img2").addEventListener('click', function() {
     /*Random number generator + code for the right dice */
     var rightRandomNumber;
     rightRandomNumber = Math.floor(Math.random() * 6 + 1);
     if (rightRandomNumber == 1)
     {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice1.png");
     } else if (rightRandomNumber == 2) {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice2.png");
     } else if (rightRandomNumber == 3) {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice3.png");
     } else if (rightRandomNumber == 4) {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice4.png");
     } else if (rightRandomNumber == 5) {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice5.png");
     } else if (rightRandomNumber == 6) {
         link = document.querySelector(".img2").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice6.png");
     } else {
         console.log("Number generator error!");
     }
       /*Random number generator + code for the left dice */
     var leftRandomNumber;
     leftRandomNumber = Math.floor(Math.random() * 6 + 1);
     if (leftRandomNumber == 1)
     {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice1.png");
     } else if (leftRandomNumber == 2) {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice2.png");
     } else if (leftRandomNumber == 3) {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice3.png");
     } else if (leftRandomNumber == 4) {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice4.png");
     } else if (leftRandomNumber == 5) {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice5.png");
     } else if (leftRandomNumber == 6) {
         link = document.querySelector(".img1").setAttribute("src", "/Users/ajomathew/Downloads/Dicee Challenge - Starting Files/images/dice6.png");
     } else {
         console.log("Number generator error!");
     }
    /* Who wins - player1 or player2 or draw */
    if (leftRandomNumber > rightRandomNumber) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    } else if (leftRandomNumber < rightRandomNumber) {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").textContent = "Draw!🚩";
    }
});

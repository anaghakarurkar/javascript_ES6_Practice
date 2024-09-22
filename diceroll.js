function diceRoll(){
    var n = Math.random(); //Generates a number between 0 to 0.9999999999999999
    n = n * 6;
    return Math.floor(n) + 1;
}

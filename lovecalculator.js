function loveCalculator(){
    var yourName = prompt("Please enter your name: ");
    var personYouLove = prompt("Please enter name of the person you love: ");

    var lovePercentage = (Math.random() * 100) + 1;

    if(lovePercentage >= 75){
        alert(yourName + ", you found your Soulmate!");
    }
    else {
        alert(yourName + ", love percentage between you an " + personYouLove + " is " + Math.round(lovePercentage) + "%");
    }      
}
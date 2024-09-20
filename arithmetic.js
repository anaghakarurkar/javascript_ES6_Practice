function dogAgeInHumanAge() {
    var dogAge = prompt("How old is your dog? ");
    
    dogAge = Number(dogAge);
    
    if(typeof dogAge == 'number')
    {
        var humanAge = (dogAge - 2) * 4 + 21;
    
        alert("Your dog is " + humanAge + " in human age");
    }
}
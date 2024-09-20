function dogToHumanAge() {
    var dogAge = prompt("Please enter the dog age: ");
    
    dogAge = Number(dogAge);
    
    if(typeof dogAge == 'number')
    {
        var humanAge = (dogAge - 2) * 4 + 21;
    
        alert("Dog age to Human age is : " + humanAge);
    }
}
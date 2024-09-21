function lifeInWeeks(age) {
    
    var totalAge = 90;
    var remainingLife = totalAge - age;
    var lifeIndays = remainingLife * 365;
    var lifeInweeks = remainingLife * 52;
    var lifeInMonths = remainingLife * 12
    
    console.log("You have " + lifeIndays + " days, " + lifeInweeks + " weeks, and " + lifeInMonths + " months left.");
}
function bmiCalculator(weightInKg, heightInMeters) {
    var bmi = weightInKg / Math.pow(heightInMeters, 2);
    var interpretation;
    
    bmi = Math.floor(bmi);
    
    if(bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else {
        if(bmi >=18.6 && bmi <= 24.9) {
           interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
        }
        else {
           interpretation = "Your BMI is " + bmi + ", so you are overweight.";
        }
    }
    
   return interpretation;
}
function bmiCalculator(weightInKg, heightInMeters) {
    var bmi =  weightInKg / Math.pow(heightInMeters , 2);
    return Math.round(bmi);
}
function fibonacciGenerator (n) {

    var fibonacciSequence = [0, 1];
    
    if(n === 1) return [0];
    
    for(var i = 0; i < n-2 ; i++) {
       fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i+1]); 
    }
    return fibonacciSequence;
}

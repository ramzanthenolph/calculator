var add = function(number1, number2){
    return number1 + number2;
    }
var subtract = function(number1, number2){
    return number1 - number2;
}
var multiply = function(number1, number2){
    return number1 * number2;
}
var divide = function(number1, number2){
    return number1 / number2;
}
    var number1 = parseInt( prompt("Enter a number"));
    var number2 = parseInt( prompt("enter  another number"));
    var resultA = add(number1, number2);
    var resultS = subtract(number1, number2);
    var resultM = multiply(number1, number2);
    var resultD = divide(number1, number2);
    alert(resultA);
    alert(resultS);
    alert(resultM);
    alert(resultD);
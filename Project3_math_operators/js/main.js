function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multiple Operators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //provides a remainder of 
    var simple_Math = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25 by  6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("unary operator").innerHTML = -x;
}

function increment_Operator() { //increment by 1 
    var X = 5;
    X++;
    document.write(X).innerHTML = "Increase 5 by 1";
}

function decrease_Operator() {
    var X = 5.25;
    X--;
    document.write(X).innerHTML = "Decrease 5.25 by 1";
}

//window.alert(Math.random());

window.alert(Math.random() * 100); //random number up to 100


function math_object() {
    document.write(Math.PI);
}

//Type Coercion
//the type coercion converts the vaule to the type it chooses. 
function coercion() { 
document.write("10" + 5);
}//thus would return 105 - tacks 5 onto the string"10"

//-------------------------------------------------------------//

// Not a Number
function my_Function() {  
    document.getElementById("Test").innerHTML = 0/0;
}//result will be NaN (not a number)


// check if something is not a number using the NaN() function. 
function my_Function() { 
document.getElementsByTagName("Test1").innerHTML = isNaN('This is a string');
} //result will be "true" because the string is not a number


//to display "false", see below js -
function my_Function() { 
document.getElementById("007").innerHTML = isNaN('007'); 
}//this displays 'false' because 007 is a number



//Infinity --------------------------------------------------------// 
//display (higher than our max floating point number)0
function infinity() { 
document.write(2E310);
}

// -Infinity 
function Neg_Infinity() { 
document.write(-3E310); 
}

//Boolean logic ---------------------------------------------------//
//types of comparisons 
//eg. [true/false condition #1] AND [true/false condition #2]

// [6 > 3] AND [22 <= 23] = True 

// [6 >3] AND [22 > 23] = False 

function true_boolean() { 
document.write(10 > 2);     //true 
}
function false_boolean() { 
document.write(10 < 2);     //false
}

//--------------------------------------------------------------------//

//Console.Log() Method 
//Ctrl+Shift+I or F12 to display data console within browser 

//console.log(2 + 2); 

//-------------------------------------------------------------------//

//Double Equal Signs 
//-to show a comparision being made (checks for eqaulity)
//eg (10 + 5) == 15 

//document.write(10 ==10); // true 

//document.write(3 == 11); //false 

//Triple Equal Signs -----------------------------------------------//
//-to check whether the data on the left side of the symbol is equal to the right
//and that it is the same type as that on the right. 

//eg. DateOfBirth1 === DateOfBirth2
//This tells the computer to check whether the two pieces of data are equal in 
//both VALUE and TYPE. Since they are, the computer responds with “true.”

function true_triple_equal() { 
X = 10;
Y = 10;
document.write(X === Y); // true 
}


function fale_triple_equal() { 
X = 82;
Y = "82";
document.write(X === Y); //false 
}

//triple equal signs works for all data types 
function true_tripe_equal() { 
A = "Magnus";
B = "Magnus";
document.write(A === B); //true
}

//Logical Operators 
//AND: &&
//OR: ||
//NOT: ! 


//AND 
function and_true() { 
document.write(5 > 2 && 10 > 4);
}

function and_false() {
    document.write(5 > 10 && 10 > 4);
}

//OR 
function or_true() {
    document.write(5 > 10 || 10 > 4);
}

function or_false() {
    document.write(5 > 10 || 10 > 20);
}

function not_Function() {   //displays false
    document.getElementById("false not").innerHTML = !(20 > 10);
}

function not_Function() {   //displays true
    document.getElementById("true not").innerHTML = !(5 > 10);
}
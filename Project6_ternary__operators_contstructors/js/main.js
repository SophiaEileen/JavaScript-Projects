//Ternary Operators (made up of three parts)-------------------------------
//A ternary operator operates on three values. It can be used to assign a 
//value to a variable based on a condition. This is also referred to as a 
//conditional operator in that it assigns a value to a variable based on a condition.

//syntax Name_of_variable =(condition) ? Value_1:Value_2
//The ternary operator is “?.”
//document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//----------------------------------------------------------------

//Object-Oriented Programming 
//A “constructor” is a special part of a class (a template for defining 
//an object [item with state and behavior]).
//eg 
//class Customer
//{
    //string FullName;
    //Boolean Active;  <-- constructor for the customer class(small subprogram)
//} subprogram used every time an instance of the customer class was created 

//---------------------------
// see below for constructor 
//Customer(string name) { 
    //Fullname = name; 
    //Active = true;
//}
//------------------------------------------------------------------------------
//Keyword - 'this'
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Properties being added
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "pinto", 1971, "Mustard");


function myErikFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; //The function “Vehicle()” in our code is an object constructor.
}

//New Keyword Assignment - Create an object 

const Sarah = new Vehicle("Chevy", "Tahoe", 2021, "Green") 

//new keyword/property being added 
function mySarahFunction() {
 document.getElementById("New_and_This").innerHTML =
"Sarah drives a" + Sarah.Vehicle_Color + "-colored" + Sarah.Vehicle_Model +
" Manufactured in " + Sarah.Vehicle_Year; 
}

//-------------------------------------------------------------------------------

//Nested Functions 
function nested_Function() { 
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();  // this is nested function
        return Starting_point;
    }
}

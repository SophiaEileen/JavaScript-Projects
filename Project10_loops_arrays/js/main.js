//--------------------------While Loop----------------------------------------
//count to 10 using a while loop:
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;    //<br> causes space between lines of text
        X++;                    //++ is used to increment (add one) 
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//----------------------Length Property----------------------------------------
const str = "Life, the universe and everything. Answer:";

function Length() {
    document.getElementById("length").innerHTML = str.length;
}
// expected output: "Life, the universe and everything. Answer: 42"

//----------------------------Instrument Loop------------------------------

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//----------------------Arrays and objects------------------------------
//an array of cat pictures
function cat_pics() { 
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}
//In the above array “Cat_Picture” is the object. 0, 1, 2 and 3 are the 
//indexes and “sleeping,” “playing,” “eating” and “purring” are the properties 
//of the object.

//-----------------------Constant_Function-------------------------

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand: "Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
} 
//This would display: The cost of the guitar was $900.
//created an object with the const keyword and then added a property 
//with a value. We also changed the “black” value for the color property 
//to “blue.”

//You can reassign an identifier after using var, but you cannot do so after const.
//A constant cannot share its name with a function or a variable in the same scope.

//---------------------------------Let Keyword-----------------------------------

//var X = 82;
//document.write(X);
//{
    //let X = 33;
    //document.write("<br>" + X);
//}
//document.write("<br>") + X);

//Variables declared outside of a function with var or let have global scope.
// Variables declared within a function with var or let have function scope.
//let keyword cannot be accessed outside of the block.

//-----------------------------Return Statement---------------------------

//function myFunction() {
    //return Math.PI;
  //}
//--------------------------------Obejcts-----------------------------
//An object is a data structure used to store different types of data types.
//example of creating an object with properties and a method
let car = {
    make: "Dodge ",
    model: "Viper",
    year: "2021 ",
    color: "red ",
    description : function Car() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
//the properties are: make, model, year and color. The method is the description 
//function – which should return: The car is a 2021 red Dodge Viper.

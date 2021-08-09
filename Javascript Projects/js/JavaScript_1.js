//------------------SWITCH STATEMENT------------------------
//Inside switch statements are cases. These cases are the various 
//conditions that are evaluated.

//We can use the switch statement to write a basic program that evaluates 
//various colors.

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a terrible color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        defualt:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//---------------GETELEMENTSBYCLASSNAME() METHOD---------------------------
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A [0].innerHTML = "Okay, you got me!";
}
//We have set the index value of variable A to 0, meaning it will now
// be displayed in the first element with the class “Click” (once the 
//button is clicked).

//---------------------HTML <CANVAS> ELEMENT--------------------------
//<canvas> element is the container for graphics 
//JavaScript is used for drawing the graphics. The canvas is a 
//rectangular section on a webpage.

//<canvas id="ID_Name" width="500" height="250" style="border:5px solid black;"></canvas>
//---------html below-----------
//<h1 class="Click">This text will change!</h1>
//<h3 class="Click">This text will not change.</h3>
//<button onclick="Hello_World_Function()">Click me!</button>
//---------------------------------------------------------------------

//-----------------add circle within rectangle------------------------
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

//-----------------HTML canvas createLinearGradient() Method for rectangle --------------------
//Define a gradient (left to right) that goes from black to white, 
//as the fill style for the rectangle:

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);



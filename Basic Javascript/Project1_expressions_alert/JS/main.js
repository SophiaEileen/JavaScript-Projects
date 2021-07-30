// const alertButton = document.querySelector("#alert-button")

// alertButton.addEventListener("click", () => {

// })

var A = "This is a string";                 //assigned var to str value
window.alert(A);



var B = ("\"Be who you are and say what you feel,"
    + " Because those who mind don\'t matter and those who matter don\'t matter and those who matter don't mind.\" "
    + "- Dr.Seuss ");                       // concatenated str value 
document.write(B)                           // method



var Family = "The Jordans", Dad = " Chuck ", Mom = "Rebekah", Daughter = "Sophia", Son = "Ian";
document.write(Dad);                        //multiple var in one statement 





var blues = "<br> I have the blues. <br> ";            //var with str 
var blues = blues.fontcolor("blue");        // str.fontcolor method
document.write(blues);




document.write(3 + 3)   //expression 



function My_First_Function() {                                  //Defining a function and naming it 
    var str = " This text is green!";                           //Defining a variable and giving it a string value

    var result = str.fontcolor("green");                        //Using a fontcolor method on a str var 
    document.getElementById("Green_Text").innerHTML = result;   //Putting the value of the result into HTML element with "Green_Text" id 

}


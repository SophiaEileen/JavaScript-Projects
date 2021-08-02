function My_First_Function() { //Defining a function and naming it 
    var str = " This text is green!"; //Defining a variable and giving it a string value

    var result = str.fontcolor("green"); //Using a fontcolor method on a str var 
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of the result into HTML element with "Green_Text" id
}


function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //innerHTML modifies the content of an html element
}
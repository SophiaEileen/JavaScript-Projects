//                                 String Methods 

//Concat() Method 
//The concat() method concatenates (connects) two or more strings. 
function full_Sentence() {
    var part_1 = "All work and ";
    var part_2 = "no play makes ";
    var part_3 = "Johnny a  ";
    var part_4 = "dull boy. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//-------------------------------------------------------------------------

//Slice() Method 

//The slice() method is a string method that extracts a section of a string 
//and then returns the extracted section in a new string. 
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//The numbers indicate which characters in your string will be cut out 
//and displayed. This code would display “Jack.”

//--------------------------------------------------------------------------

//Research and define toUpperCase() method
//"                 " search() method.

//-------------------------------------------------------------------------

//                                Number Methods 

//toString() Method 
//returns a number as a string.
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// this code would return "182". 
//-------------------------------------------------------------------------

//TOPrecision() Method 
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//The toPrecision() method formats a number to a specified length
//The output would be “12938.30130.”




//--------------------------------------------------------------------------

//Research and define Fixed() method.
//"                 " valueOf() method.

//-------------------------------------------------------------------------


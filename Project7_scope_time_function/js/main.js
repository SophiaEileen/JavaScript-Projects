//Scope Assignment 
//A global variable would be written as follows: 
var X = 10;
function Add_numbers_1() { 
    document.write(20 + X + "<br>"); 
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//This code would return “30” and “110.” The variable X was 
//assigned the value 10 outside of our function, but we still 
//accessed it – therefore, the above is an example of a global variable.


//----------------------------------------------------------------------------


//The following would be an example of a local variable:

//function Add_numbers_1() {
//   var X = 10;
//   document.write(20 + X "<br>");
//}
//function Add_numbers_2() {
    //document.write(X + 100);
    //}
//Add_numbers_1();
//Add_numbers_2(); 
//This time, the code would only return “30” because the variable was local – 
//meaning it was written within the function Add_numbers_1 and couldn’t be accessed 
//outside of it.


//Let’s say you wrote the above code and didn’t understand why Add_numbers_2 didn’t display
//a result. We could use the console.log() method to help us debug our code as follows:
//function Add_numners_1() { 
    //var X = 10;
    //console.log(15 + X);
//}
//function Add_numbers_2() {
    //console.log(X + 100);
//}
//Add_numbers_1();
//Add_numbers_2(); 
//If you executed this code in the browser, no result will be shown. But if you open the console, 
//you’ll see the error “X is not defined.”
//----------------------------------------------------------------------------------

//IF Statements 
function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//As a note: The Date().getHours() method returns the hour in the specified date 
//according to the local time, and the hours are listed as integers between 0 and 23. 
//For example: 18 is equal to 6:00 p.m., 12 is noon, etc.
//----------------------------------------------------------------------------------

//ELSE statements 
function Age_Function() { 
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//-----------------------------------------------------------------------------------

//ELSE IF statements 
function Time_function() { 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
       Reply = "It is the morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

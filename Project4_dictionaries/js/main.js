function my_Dictionary() {  //dictionary with KVP key
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,              //value type number does not need ""
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {  // Operators as words 
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;       // will appear as undefined (delete operator)
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}


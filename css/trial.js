var CC;
var YY;
var DD;
var MM;
var dOb;
var gender;

dayOfWeek = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
femaleGender = ["s", "m", "t", "w", "Th", "f", "sa"];
maleGender = ["Sun", "mon", "tue", "wed", "thurs", "fri", "sat"]; 

function inputs(){
    var CC = parseInt(document.getElementById("century"));
    var YY = parseInt(document.getElementById("year"));
    var DD = parseInt(document.getElementById("date"));
    var MM = parseInt(document.getElementById("month"));
}

function dayOfBirth(){
    inputs();
    var dOb = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    return math.floor(dOb);
}

function radioButtons(){
    inputs();
    dayOfBirth();
    var gender = document.getElementById("gridRadios");
    if (gridRadios[0].checked === true){
        var gender = "male";
    } else if (gridRadios [1].checked === true){
        var gender = "female";
    } else (gridRadios [2].checked === true){
        var gender = "unidentified";
    }
}

function validate (){
    if (gender == male && dOb == 0);
       document.write("You were born on "+ dayOfWeek[0].+ "Your Akan name is " + maleGender[0]);
}
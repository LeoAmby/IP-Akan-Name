var CC;
var YY;
var MM;
var DD;
var dOb;
var gender; 
var femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function inputs(){
    CC = parseInt(document.getElementById("century")).value;
    YY = parseInt(document.getElementById("year")).value;
    DD = parseInt(document.getElementById("dateOfBirth")).value;
    MM = parseInt(document.getElementById("monthOfBirth")).value;
}

function dayOfBirth(){
    inputs();
    dOb = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    return (Math.floor(dOb));
}

function radioButtons(){
    var gender = document.getElementsByName("gridRadios");
    if (gridRadios[0].checked == true) {
        var gender = "Male";
    } else if (gridRadios[1].checked == true){
        var gender = "Female";
    } else (gridRadios[2].checked == true){
        var gender = "Unidentified";
    }
}

function validate(){
    dayOfBirth();
    radioButtons();
    //incomplete
    if (gender == "male"){
        if(dOb == 0){
            document.write(weekDays[0] + "" + maleNames[0]);
        }else if(dOb == 1){

        }else if(){

        }
    }else if(gender == "female"){
        if(dOb == 0){

        }e
    }
}



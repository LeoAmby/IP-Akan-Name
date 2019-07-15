var CC;
var YY;
var MM;
var DD;
var dOb;
var gender; 
var femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var unidentified = ["unidentified", ""]
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
    if (gridRadios[0].checked === true) {
        var gender = "Male";
    } else if (gridRadios[1].checked === true){
        var gender = "Female";
    } else (gridRadios[2].checked == true){
        var gender = "Unidentified";
    }
}
function final(){
   inputs();
    dayOfBirth();
    radioButtons(); 
}

function validate(){
    inputs();
    dayOfBirth();
    radioButtons();
    
    if (gender == "male"){
        if(dOb == 0){
            document.write(weekDays[0] + "" + maleNames[0]);
        }else if(dOb == 1){
            document.write(weekDays[1] + "" + maleNames [1]);
        }else if(dOb == 2){
            document.write(weekDays[2] + "" + maleNames [2]);
        }else if (dOb == 3){
            document.write(weekDays[3] + "" + maleNames [3]);
        }else if (dOb == 4){
            document.write (weekDays[4] + "" + maleNames [4]);
        }else if (dOb == 5){
            document.write (weekDays [5] + "" + maleNames [5]);
        }else if(dOb == 6){
            document.write (weekDays[6] + "" + maleNames[6]);
        }
    }else if(gender == "female"){
        if(dOb == 1){
            document.write(weekDays[0] + "" + femaleNames[0]);
        }else if(dOb == 2){
            document.write(weekDays[1] + "" + femaleNames [1]);
        // }else if(dOb == 2){
        //     document.write(weekDays[2] + "" + femaleNames [2]);
        }else if (dOb == 3){
            document.write(weekDays[3] + "" + femaleNames [3]);
        }else if (dOb == 4){
            document.write (weekDays[4] + "" + femaleNames [4]);
        }else if (dOb == 5){
            document.write (weekDays [5] + "" + femaleNames [5]);
        }else if(dOb == 6){
            document.write (weekDays[6] + "" + femaleNames[6]);
        }
    }else if(gender == "other"){
        if(dOb == 0){
            document.write(weekDays[0] + "" + unidentified[0]);
        }else if(dOb == 1){
            document.write(weekDays[1] + "" + unidentified[0]);
        }else if(dOb == 2){
            document.write(weekDays[2] + "" + unidentified[0]);
        }else if (dOb == 3){
            document.write(weekDays[3] + "" + unidentified[0]);
        }else if (dOb == 4){
            document.write (weekDays[4] + "" + unidentified[0]);
        }else if (dOb == 5){
            document.write (weekDays [5] + "" + unidentified[0]);
        }else if(dOb == 6){
            document.write (weekDays[6] + "" + unidentified[0]);
        }
}
}
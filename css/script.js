var CC;
var YY;
var MM;
var DD;
var dOb;
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
}

function gender(){
    //incomplete
}

function validate(){
    dayOfBirth();
    gender();
    //incomplete
}



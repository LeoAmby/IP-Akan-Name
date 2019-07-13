function gender(a, b){
    var a = male;
    var b = female;
}
 
function dayOfWeek() {
    results dayOfWeek;
    dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    var CC = century;
    var YY = year;
    var MM = month;
    var DD = date;
}
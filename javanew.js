const number = parseInt(prompt("Enter number between 1 and 7:"));

switch(number){
    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;

    case 3:
    console.log("Wednesday");
    break;

    case 4:
    console.log("Thursday");
    break;

    case 5:
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;

    case 7:
    console.log("Sunday");
    break;

    default:
        console.log("Invalid Input")
}
 
var age = 13 
var age = 19 

if (age>13<19) {
    document.write("Eligible to Teenage");
    
}
 else {
    document.write("Not Eligible")
}

var num, i, chk=0;
num=19;
for(i=2; i<num; i++)
{
    if(num%2==0)
    {
        chk++;
        break;
    }
}
if (chk==0) {
    document.write(num + "is a prime number");
    
} else {
    document.write(num + "is not  a prime number");
    
    
}

var income = prompt("income")
if (income<=20000) {
    alert("no income tax");
    
}
else if (income>20000 && income<1000000) {
    alert(income*0.01);
    
}
else if(income>100000 && income<10000000){
    alert(income*0.03);
    
}
else if (income>1000000 && income<10000000) {

    alert(income*0.05);
}
else if (income>=10000000) {
    alert(income*0.2);
    
}
else{
    alert("enter a valid income")
}
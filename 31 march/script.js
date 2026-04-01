// let number =prompt("enter any number");
// for(let i = 1; i <= 10; i++){
//     document.write(number + "x"  + i +"=" +(number*i) + "<br>")
// }
var maths=Number(prompt("enter your math marks"));
var english=Number(prompt("enter your english marks"));
var science=Number(prompt("enter your science marks"));
var urdu=Number(prompt("enter your urdu marks"));
var sindhi=Number(prompt("enter your sindhi marks"));
document.write("your marks in maths"+maths +"<br>")
document.write("your marks in english"+english +"<br>")
document.write("your marks in science"+science +"<br>")
document.write("your marks in urdu"+urdu +"<br>")
document.write("your marks in sindhi"+sindhi+"<br>")
 let sum = maths + english + science + urdu + sindhi
document.writeln("your total marks out of 500 are :" +sum +"<br>")
let percent = sum/500*100;
document.write('your percentage is :' + percent.toFixed(2) +"<br>")
if(percent >= 80){
    document.write("A-1 grade")
}
else if (percent >= 70){
    document.write("your grade is A")
}
else if (percent >= 60){
    document.write("your grade is B")
}else if (percent >= 59){
    document.write("your grade is C")
}
else {
    document.write("your grade is F")
}
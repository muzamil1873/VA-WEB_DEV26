// let number =prompt("enter any number");
// for(let i = 1; i <= 10; i++){
//     document.write(number + "x"  + i +"=" +(number*i) + "<br>")
// }
var maths=parseInt(prompt("enter your marks"));
var english=parseInt(prompt("enter your marks"));
var science=parseInt(prompt("enter your marks"));
var urdu=parseInt(prompt("enter your marks"));
var sindhi=parseInt(prompt("enter your marks"));
document.write("your marks in maths"+maths +"<br>")
document.write("your marks in english"+english +"<br>")
document.write("your marks in science"+science +"<br>")
document.write("your marks in urdu"+urdu +"<br>")
document.write("your marks in sindhi"+sindhi+"<br>")
sum = maths + english + science + urdu + sindhi
document.writeln("your total marks out of 500 are :" +sum +"<br>")
let percent = (sum/500*100)
document.write('your percentage is :' + percent +"<br>")
if(percent >=80){
    document.write("A-1 grade")
}
else{
    Document.write("your grade is F")
}
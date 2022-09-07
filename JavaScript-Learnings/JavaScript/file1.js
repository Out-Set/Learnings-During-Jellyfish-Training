//document.write("javascript is on outer sheet.");
//alert("this ia an alert.");

var x = 5;
document.write("x = " +x);

var y;
document.write("y = " +y);

var y = y + 5;
document.write("y = " +y);

var s = "hello";
document.write(s+x);

//var can be reinitialized as well as will diff value.
var s = 5;
document.write(s+x);

var a=5;
var b="5";
document.write(a==b);
document.write(a===b);

/*
if(a>0)
    document.write("a is +ve");

a<0?document.write("a is -ve"):document.write("a is +ve");
*/
var p = 9;
var i=1;
while(i<=10)
{
    document.write("Good Evening");
    document.write(p+" X "+i+ " = "+ p*i + "<br/>");
    i++;
}


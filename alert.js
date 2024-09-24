var age = prompt("Please enter your age: ", "0");
var message = "Hello there!";

if(age != null)
{
   message = message + " You are " + age + " years old";
}

alert(message);
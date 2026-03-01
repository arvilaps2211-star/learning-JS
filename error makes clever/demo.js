var a = 10;
var b = 200;
var c = a+b;

 console.log(c);

 //typeof 
var a = 10;
console.log(typeof(a));

//float func
let A = 94.38; //declares and assigns the data 
let b = parseFloat(A);  //makes new declare and by use the func of parse float 
console.log(b);

console.log(b.toFixed(1));

//func 

function hi() 
{
    console.log("hey there !")
}

//return

function adding(a,b)
{
    return (a+b)
}

var total;
total = add(12,39)
console.log(total)

//condition (if else)

if (true)
{
    console.log("if part is working")
}
    else
    {
        console.log("else part is working")
    }

var rain = true

if (rain)
{
    console.log("take an umbrella")
}

else
{
    console.log("enjoy the sunshine")
}

var finishinput = prompt("are u finish homework..?")

if (finishinput == "yes")
{
    console.log("i'm done")
}
else
{
    console.log("still no..!")
}

//logical

//AND (&&) [*]

console.log(true && false && true);
console.log(true && true && true);

//OR (||) [+]

console.log(true || false || false);
console.log(true || true || true);

//NOT (!) [inverse of A]

console.log(!true);
console.log(!false);

//conditions statement using  if 

var color = "red"

if (color == "red")
{
    console.log("stop")
}

if (color == "yellow")
{
    console.log("Get ready")
}

if (color == "green")
{
    console.log("go")
}

var season = ""

if (season == "spring")
{
    console.log("enjoy the blooming flowers")
}

if (season == "summer")
{
    console.log("Have fun in the summer")
}

if (season == "autumn")
{
    console.log("admire the colourful leaves")
}

if (season == "winter")
{
    console.log("Bundle up & stay warm")
}

var gamescore = ""

if (gamescore <= 50)
{
    console.log("You need to improve")
}
if (gamescore > 50 && gamescore < 70)
{
    console.log("Good")

}

if (gamescore >=70)
{
    console.log("Awesome")
}

//FOR loop

for (count=1; count <=5; count = count+1);
{
    console.log(count)
}

//print 1-10 using  for loop

for (i=1; i<=10; i++);

{
    console.log(i)
}

//print 1 to 10 reverse order

for (i=10; i>=1; i--);
{
    console.log(i)
}

//print only even numbers from 1 to 10
for (let i=1; i<=10; i++)
{
    if(i % 2 === 0)
    {
        console.log("the Even numbers is;" + i)
    }
}

// DOM Manipulation
<p id="greeting">Hii</p>

//scripts

//selects that p tags using id 

var para = document.getElementById("greeting")
console.log(para)  //prints directly without changes to print (<p id="greeting">Hii</p>) in console
console.log(para.textContent)  //omit the text by .textContent to implement only the input (Hii) in console
para.textContent = "Bye" //commit the changes to hii to bye

//selecting and manuopulating elements using I/O
<p id="H1">Hello world</p>

<button>convert</button>

//selecting p tag in JS
var H11 = document.getElementById("H1")
console.log(H11.textContent)

function change()
{
    H11.textContent = "bye world"
}

//adding two numbers using dom manipulation and inputs get from user

<input id="num1" placeholder="Enter first number">
<input id="num2" placeholder="Enter second number">

<button onClick="Showresultss()">ADD</button>

<p id="resultss">Result</p>

//js part

//selecting input box 1

var box1 = document.getElementById("num1")

//selecting input box 2

var box2 = document.getElementById("num2")

//selecting result

var result = document.getElementById("resultss")



function Showresultss()
{
    //declare inputs
var box1value = Number(box1.value)
var box2value = Number(box2.value) //numbers for using the [.value] instead of .textContent to hide 

    var total = (box1value + box2value)
    result.textContent = total
}
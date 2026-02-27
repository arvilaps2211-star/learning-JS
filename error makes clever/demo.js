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
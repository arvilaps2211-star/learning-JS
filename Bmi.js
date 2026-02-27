function CalculateBMI(){
    let weightinput = prompt("Enter Your Weight");
    let heightinput = prompt("Enter Your Height");

    let weight = parseFloat(weightinput);
    let height = parseFloat(heightinput);

    let Height = height / 100;

    let bmi = weight / (Height * Height);

    document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

}
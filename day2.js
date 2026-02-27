function calculateGrade() {
    const marks1 = parseFloat(document.getElementById("marks1").value);
    const marks2 = parseFloat(document.getElementById("marks2").value);
    const marks3 = parseFloat(document.getElementById("marks3").value);

    // Check if any of the inputs are not valid numbers
    //isNaN() func stands for Not a Number

    if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3)) {
        document.getElementById("result").textContent = "Please enter valid marks for all subjects.";
        return;
    }

    const average = (marks1 + marks2 + marks3) / 3;
    let grade;

    if (average >= 90) {
        grade = "A";
        }

        else if (average >= 80) {
            grade = "B";
        }

        else if (average >= 70) {
            grade = "C";    
        }

        else if (average >= 60) {
            grade = "D";
        }

        else {
            grade = "F";
        }

    //using backtick (`) instead of str concatenation   

    document.getElementById("result").textContent = `Average: ${average.toFixed(2)}, Grade: ${grade}`;

}

//declares the inputs in number datatype

const input = document.querySelectorAll("input[type='number']");

const inputs = document.querySelectorAll("input");

// when clicks "ENTER" key, it will move to the next input field, and if it's the last input field, it will calculate the grade
inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (index + 1 < inputs.length) {
                inputs[index + 1].focus();
            } else {
                calculateGrade();
            }
        }
    });
});
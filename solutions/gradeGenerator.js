// Function to calculate student grade based on marks
function gradeGenerator() {
    // Prompt user for input and convert to number
    const marks = parseInt(prompt("Enter student marks (0-100):"));

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input! Marks should be between 0 and 100.");
        return;
    }

    // Determine grade based on marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    console.log(`Grade: ${grade}`);
}

// Call the function to run the program
gradeGenerator();
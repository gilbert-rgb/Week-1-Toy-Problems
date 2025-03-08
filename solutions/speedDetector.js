// Function to calculate demerit points based on speed
function speedDetector() {
    // Prompt user for speed input and convert to number
    const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));

    // Speed limit constant
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const maxPoints = 12;

    // Validate input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input! Speed should be a positive number.");
        return;
    }

    // Check if speed is within limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemerit);

        // Check if license should be suspended
        if (demeritPoints > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Call the function to run the program
speedDetector();
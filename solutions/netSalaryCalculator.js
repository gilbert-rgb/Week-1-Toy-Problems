// Function to calculate net salary
function netSalaryCalculator() {
    // Prompt user for basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary (in KES):"));
    const benefits = parseFloat(prompt("Enter benefits (in KES):"));

    // Validate input
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input! Salary and benefits should be positive numbers.");
        return;
    }

    // Constants for tax, NHIF, and NSSF rates
    const personalRelief = 2400;
    const nssfRate = 0.06; // 6% of pensionable pay (up to a limit)

    // Function to calculate PAYE (Tax)
    function calculatePayee(grossSalary) {
        let taxableIncome = grossSalary - personalRelief;
        let payee = 0;

        if (taxableIncome <= 0) return 0;

        if (taxableIncome <= 24000) {
            payee = taxableIncome * 0.1;
        } else if (taxableIncome <= 32333) {
            payee = 2400 + (taxableIncome - 24000) * 0.25;
        } else {
            payee = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3;
        }

        return payee;
    }

    // Function to calculate NHIF deductions
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700; // Above 100,000
    }

    // Function to calculate NSSF deductions
    function calculateNSSF(grossSalary) {
        const nssfLimit = 18000; // Maximum pensionable pay for NSSF
        const pensionablePay = Math.min(grossSalary, nssfLimit);
        return pensionablePay * nssfRate;
    }

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const netSalary = grossSalary - payee - nhif - nssf;

    // Output results
    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): KES ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: KES ${nhif.toFixed(2)}`);
    console.log(`NSSF Deductions: KES ${nssf.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
}

// Call the function to run the program
netSalaryCalculator();
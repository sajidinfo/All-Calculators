// salaryCalculator.js
function calculateNetSalary(grossSalary, taxRate, otherDeductions) {
    const taxAmount = (grossSalary * taxRate) / 100;
    const netSalary = grossSalary - taxAmount - otherDeductions;

    return netSalary.toFixed(2);
}

// Example usage
const grossSalary = 60000; // in INR
const taxRate = 10; // in percent
const otherDeductions = 5000; // in INR

const netSalary = calculateNetSalary(grossSalary, taxRate, otherDeductions);
console.log(`Net salary: ₹${netSalary}`);

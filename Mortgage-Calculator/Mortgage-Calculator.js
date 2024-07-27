// Mortgage Calculator
function calculateMortgage(principal, annualInterestRate, years) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const months = years * 12;
    const monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months));
    return monthlyPayment.toFixed(2);
}

// Example usage:
const principal = 3000000; // Principal amount (loan amount)
const annualInterestRate = 8; // Annual interest rate (in percentage)
const years = 20; // Loan term in years

const monthlyPayment = calculateMortgage(principal, annualInterestRate, years);
console.log(`Monthly Mortgage Payment: ₹${monthlyPayment}`);

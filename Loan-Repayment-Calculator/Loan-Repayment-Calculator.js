// Loan Repayment Calculator
function calculateLoanRepayment(principal, annualInterestRate, years) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const months = years * 12;
    const monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months));
    const totalPayment = monthlyPayment * months;
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2)
    };
}

// Example usage:
const loanPrincipal = 200000; // Loan principal amount
const loanInterestRate = 10; // Annual interest rate (in percentage)
const loanTermYears = 5; // Loan term in years

const loanDetails = calculateLoanRepayment(loanPrincipal, loanInterestRate, loanTermYears);
console.log(`Monthly Loan Payment: ₹${loanDetails.monthlyPayment}`);
console.log(`Total Loan Payment: ₹${loanDetails.totalPayment}`);

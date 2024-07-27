// Investment Return Calculator
function calculateInvestmentReturn(principal, annualInterestRate, years) {
    const months = years * 12;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    let futureValue = principal * Math.pow(1 + monthlyInterestRate, months);
    return futureValue.toFixed(2);
}

// Example usage:
const investmentPrincipal = 100000; // Initial investment amount
const investmentInterestRate = 12; // Annual interest rate (in percentage)
const investmentTermYears = 10; // Investment term in years

const futureValue = calculateInvestmentReturn(investmentPrincipal, investmentInterestRate, investmentTermYears);
console.log(`Future Value of Investment: ₹${futureValue}`);

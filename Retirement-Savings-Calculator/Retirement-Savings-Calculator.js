// retirementCalculator.js
function calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualInterestRate) {
    const monthsUntilRetirement = (retirementAge - currentAge) * 12;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    let futureSavings = currentSavings;

    for (let i = 0; i < monthsUntilRetirement; i++) {
        futureSavings += monthlyContribution;
        futureSavings += futureSavings * monthlyInterestRate;
    }

    return futureSavings.toFixed(2);
}

// Example usage
const currentAge = 30;
const retirementAge = 60;
const currentSavings = 500000; // in INR
const monthlyContribution = 10000; // in INR
const annualInterestRate = 7; // in percent

const totalSavings = calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualInterestRate);
console.log(`Total savings at retirement: ₹${totalSavings}`);

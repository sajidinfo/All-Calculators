// ROI Calculator
function calculateROI(initialInvestment, currentInvestment) {
    const roi = ((currentInvestment - initialInvestment) / initialInvestment) * 100;
    return roi.toFixed(2); // Return ROI rounded to 2 decimal places
}

// Example usage:
const initialInvestment = 100000; // Initial investment amount
const currentInvestment = 120000; // Current investment amount

const roi = calculateROI(initialInvestment, currentInvestment);
console.log(`ROI: ${roi}%`);

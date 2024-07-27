// Break-even Point Calculator
function calculateBreakEvenPoint(fixedCost, sellingPrice, variableCost) {
    const breakEvenPoint = fixedCost / (sellingPrice - variableCost);
    return breakEvenPoint.toFixed(2); // Return break-even point rounded to 2 decimal places
}

// Example usage:
const fixedCost = 50000; // Fixed costs (e.g., rent, salaries)
const sellingPrice = 200; // Selling price per unit
const variableCost = 100; // Variable cost per unit

const breakEvenPoint = calculateBreakEvenPoint(fixedCost, sellingPrice, variableCost);
console.log(`Break-even Point: ${breakEvenPoint} units`);

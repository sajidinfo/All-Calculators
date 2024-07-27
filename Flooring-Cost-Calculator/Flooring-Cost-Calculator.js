// flooringCostCalculator.js
function calculateFlooringCost(area, costPerSquareMeter) {
    const totalCost = area * costPerSquareMeter;
    return totalCost.toFixed(2);
}

// Example usage
const area = 50; // in square meters
const costPerSquareMeter = 500; // in INR

const totalCost = calculateFlooringCost(area, costPerSquareMeter);
console.log(`Total Flooring Cost: ₹${totalCost}`);

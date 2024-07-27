// Fuel Cost Calculator
function calculateFuelCost(distance, fuelEfficiency, fuelPrice) {
    // Calculate total fuel cost for a trip
    let fuelNeeded = distance / fuelEfficiency;
    let totalCost = fuelNeeded * fuelPrice;
    return totalCost;
}

// Example usage:
let cost = calculateFuelCost(500, 15, 2.5); // 500 km distance, 15 km/liter efficiency, $2.5 per liter
console.log(`Total fuel cost: $${cost.toFixed(2)}`);

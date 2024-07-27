// Profit Margin Calculator
function calculateProfitMargin(sellingPrice, costPrice) {
    const profit = sellingPrice - costPrice;
    const profitMargin = (profit / sellingPrice) * 100;
    return profitMargin.toFixed(2); // Return profit margin rounded to 2 decimal places
}

// Example usage:
const sellingPrice = 150; // Selling price of the product
const costPrice = 100; // Cost price of the product

const profitMargin = calculateProfitMargin(sellingPrice, costPrice);
console.log(`Profit Margin: ${profitMargin}%`);

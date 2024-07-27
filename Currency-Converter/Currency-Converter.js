// Currency Converter
function convertCurrency(amount, exchangeRate) {
    // Convert currency based on exchange rate
    let convertedAmount = amount * exchangeRate;
    return convertedAmount;
}

// Example usage:
let convertedAmount = convertCurrency(100, 0.85); // $100 to EUR (exchange rate 0.85)
console.log(`Converted amount: €${convertedAmount.toFixed(2)}`);

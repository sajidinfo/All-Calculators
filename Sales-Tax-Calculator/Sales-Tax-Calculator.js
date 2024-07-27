// Sales Tax Calculator
function calculateSalesTax(amount, taxRate) {
    const taxAmount = amount * (taxRate / 100);
    const totalAmount = amount + taxAmount;
    return {
        taxAmount: taxAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
    };
}

// Example usage:
const amount = 5000; // Amount before tax
const taxRate = 18; // Tax rate in percentage (e.g., 18% GST)

const taxDetails = calculateSalesTax(amount, taxRate);
console.log(`Tax Amount: ₹${taxDetails.taxAmount}`);
console.log(`Total Amount (including tax): ₹${taxDetails.totalAmount}`);

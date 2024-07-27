// paintCoverageCalculator.js
function calculatePaintCoverage(area, coveragePerLitre) {
    const litresRequired = area / coveragePerLitre;
    return litresRequired.toFixed(2);
}

// Example usage
const area = 100; // in square meters
const coveragePerLitre = 10; // in square meters per litre

const litresRequired = calculatePaintCoverage(area, coveragePerLitre);
console.log(`Litres of Paint Required: ${litresRequired} litres`);

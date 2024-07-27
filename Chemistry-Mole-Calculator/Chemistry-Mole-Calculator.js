
// ### 2. Chemistry Mole Calculator

// ```javascript
// Chemistry Mole Calculator
function calculateMoles(mass, molarMass) {
    const moles = mass / molarMass;
    return moles.toFixed(2);
}

// Example usage:
const mass = 24; // Mass of substance in grams
const molarMass = 12; // Molar mass of substance in g/mol

const moles = calculateMoles(mass, molarMass);
console.log(`Moles of Substance: ${moles} moles`);

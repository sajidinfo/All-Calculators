// Electrical Circuit Calculator (Ohm's Law)
function calculateOhmsLaw(voltage, current, resistance) {
    let result = {};
    if (voltage && current) {
        const resistance = voltage / current;
        result.resistance = resistance.toFixed(2);
    } else if (voltage && resistance) {
        const current = voltage / resistance;
        result.current = current.toFixed(2);
    } else if (current && resistance) {
        const voltage = current * resistance;
        result.voltage = voltage.toFixed(2);
    }
    return result;
}

// Example usage:
const voltage = 12; // Voltage in volts
const current = 3; // Current in amperes
// const resistance = 4; // Uncomment to calculate with resistance

const circuitValues = calculateOhmsLaw(voltage, current);
console.log(`Calculated Resistance: ${circuitValues.resistance} ohms`);
    
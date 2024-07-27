// Unit Conversion Calculator
function convertUnits(value, fromUnit, toUnit) {
    const conversionFactors = {
        // Length conversions (in meters)
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34,

        // Mass conversions (in kilograms)
        gram: 0.001,
        kilogram: 1,
        milligram: 0.000001,
        pound: 0.453592,
        ounce: 0.0283495
    };

    const conversionFactor = conversionFactors[fromUnit.toLowerCase()];
    if (!conversionFactor) {
        throw new Error(`Unsupported unit '${fromUnit}'`);
    }

    const convertedValue = value * conversionFactor / conversionFactors[toUnit.toLowerCase()];
    return convertedValue.toFixed(2);
}

// Example usage:
const valueToConvert = 5; // Value to convert
const fromUnit = 'kilogram'; // Current unit
const toUnit = 'gram'; // Unit to convert to

const convertedValue = convertUnits(valueToConvert, fromUnit, toUnit);
console.log(`${valueToConvert} ${fromUnit} is equal to ${convertedValue} ${toUnit}`);

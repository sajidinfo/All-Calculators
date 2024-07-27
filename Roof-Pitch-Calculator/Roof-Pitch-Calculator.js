// roofPitchCalculator.js
function calculateRoofPitch(rise, run) {
    const pitch = (rise / run) * 100;
    return pitch.toFixed(2);
}

// Example usage
const rise = 2; // in meters
const run = 4; // in meters

const pitch = calculateRoofPitch(rise, run);
console.log(`Roof Pitch: ${pitch}%`);

// concreteVolumeCalculator.js
function calculateConcreteVolume(length, width, thickness) {
    const volume = length * width * thickness;
    return volume.toFixed(2);
}

// Example usage
const length = 5; // in meters
const width = 3; // in meters
const thickness = 0.2; // in meters

const volume = calculateConcreteVolume(length, width, thickness);
console.log(`Concrete Volume: ${volume} cubic meters`);

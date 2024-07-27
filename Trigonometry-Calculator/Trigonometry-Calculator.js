// Trigonometry Calculator (Sine, Cosine, Tangent)
function calculateTrigonometry(angleDegrees) {
    const angleRadians = angleDegrees * Math.PI / 180;
    const sine = Math.sin(angleRadians);
    const cosine = Math.cos(angleRadians);
    const tangent = Math.tan(angleRadians);

    return {
        sine: sine.toFixed(4),
        cosine: cosine.toFixed(4),
        tangent: tangent.toFixed(4)
    };
}

// Example usage:
const angle = 30; // Angle in degrees

const trigValues = calculateTrigonometry(angle);
console.log(`Sine(${angle}°): ${trigValues.sine}`);
console.log(`Cosine(${angle}°): ${trigValues.cosine}`);
console.log(`Tangent(${angle}°): ${trigValues.tangent}`);

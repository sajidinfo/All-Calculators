// Physics Calculator (Kinematics)
function calculateKinematics(initialVelocity, acceleration, time) {
    const finalVelocity = initialVelocity + acceleration * time;
    const displacement = initialVelocity * time + 0.5 * acceleration * time * time;
    return {
        finalVelocity: finalVelocity.toFixed(2),
        displacement: displacement.toFixed(2)
    };
}

// Example usage:
const initialVelocity = 10; // Initial velocity in m/s
const acceleration = 2; // Acceleration in m/s^2
const time = 5; // Time in seconds

const physicsResults = calculateKinematics(initialVelocity, acceleration, time);
console.log(`Final Velocity: ${physicsResults.finalVelocity} m/s`);
console.log(`Displacement: ${physicsResults.displacement} meters`);

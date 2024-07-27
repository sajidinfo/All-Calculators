// Age Calculator
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Example usage:
const birthDate = '1990-05-15'; // Birth date in YYYY-MM-DD format

const age = calculateAge(birthDate);
console.log(`Age: ${age} years`);

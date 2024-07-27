// Time Zone Converter
function convertTimeToTimeZone(dateTimeString, fromTimeZone, toTimeZone) {
    const moment = require('moment-timezone');
    
    const dateTime = moment(dateTimeString).tz(fromTimeZone);
    const convertedTime = dateTime.clone().tz(toTimeZone);
    
    return convertedTime.format('YYYY-MM-DD HH:mm:ss');
}

// Example usage:
const dateTimeString = '2024-07-17 10:30:00'; // Date and time in any valid format
const fromTimeZone = 'Asia/Kolkata'; // Time zone to convert from (Indian Standard Time)
const toTimeZone = 'America/New_York'; // Time zone to convert to (Eastern Standard Time)

const convertedTime = convertTimeToTimeZone(dateTimeString, fromTimeZone, toTimeZone);
console.log(`Converted Time: ${convertedTime}`);

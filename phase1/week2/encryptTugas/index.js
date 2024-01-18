const { encrypt, decrypt } = require('./cryptoApp.js');
const { scheduleTask } = require('./scheduleApp.js');

console.log('--- Testing cryptoApp ---');

// Test Case 1
const encryptedText = encrypt('Hello, World!', 'mysecretkey');
console.log('Encrypted Text:', encryptedText);
// Output: Encrypted: ... (ciphertext in hexadecimal)

// Test Case 2
const decryptedText = decrypt(encryptedText, 'mysecretkey');
console.log('Decrypted Text:', decryptedText);
// Output: Decrypted: Hello, World!

console.log('--- Testing scheduleApp ---');

// Test Case 3
const testScheduleDate =  scheduleTask();
console.log(`Scheduled task for: ${testScheduleDate}`)
// Output: Scheduled task for: ... (future date and time)
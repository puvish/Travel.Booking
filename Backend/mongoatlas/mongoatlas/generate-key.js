const crypto = require('crypto');

// Generate a random JWT private key
const generateJWTPrivateKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

const JWT_PRIVATE_KEY = generateJWTPrivateKey();
console.log('JWT Private Key:', JWT_PRIVATE_KEY);

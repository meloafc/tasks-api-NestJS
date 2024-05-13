const fs = require('fs');
const {v4: uuidv4} = require('uuid')

const HOUR_TO_SECONDS = 60*60;
const JWT_SECRET = uuidv4();
const JWT_EXPIRATION_TIME = HOUR_TO_SECONDS;

console.log("building .env ...")

fs.appendFileSync('.env', '# Auth\n');
fs.appendFileSync('.env', 'JWT_SECRET=' + JWT_SECRET+'\n');
fs.appendFileSync('.env', 'JWT_EXPIRATION_TIME=' + JWT_EXPIRATION_TIME);
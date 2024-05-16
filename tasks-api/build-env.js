const fs = require('fs');
const {v4: uuidv4} = require('uuid')

const HOUR_TO_SECONDS = 60*60;
const JWT_SECRET = uuidv4();
const JWT_EXPIRATION_TIME = HOUR_TO_SECONDS;

console.log("building .env ...")

fs.appendFileSync('.env', '# Auth\n');
fs.appendFileSync('.env', 'JWT_SECRET=' + JWT_SECRET+'\n');
fs.appendFileSync('.env', 'JWT_EXPIRATION_TIME=' + JWT_EXPIRATION_TIME+'\n\n');
fs.appendFileSync('.env', '# Database\n');
fs.appendFileSync('.env', 'DB_HOST=localhost\n');
fs.appendFileSync('.env', 'DB_PORT=5432\n');
fs.appendFileSync('.env', 'DB_USERNAME=admin\n');
fs.appendFileSync('.env', 'DB_PASSWORD=LocalPasswordOnly\n');
fs.appendFileSync('.env', 'DB_NAME=postgres\n');
const fs = require("fs");

const buffer = fs.readFileSync("./users.txt");
const fileString = buffer.toString();

const userDB = JSON.parse(fileString);

module.exports = { userDB };

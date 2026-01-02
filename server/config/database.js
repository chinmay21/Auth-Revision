const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DATABASE Connected Successfully"))
    .catch((error) => {
        console.log("Error in DATABASE Connection");
        process.exit(1);
    })
}

module.exports = dbConnect;
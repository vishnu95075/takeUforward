const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" })

const db = mysql.createConnection({
  // host: process.env.MYSQL_ADDON_HOST,
  // port: process.env.MYSQL_ADDON_PORT,
  // user: process.env.MYSQL_ADDON_USER,
  // password: process.env.MYSQL_ADDON_PASSWORD,
  // database: process.env.MYSQL_ADDON_DB


  host: 'bkwj9cpu8ofdux5nf9ms-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'ufc52qldp1lup1jf',
  password:'zkWnHmnOtcVaVzvyEDaB',
  database: 'bkwj9cpu8ofdux5nf9ms'
});


db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});


module.exports = db;
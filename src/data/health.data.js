// require class
const DataBaseHelper = require('../helper/db.helper');

const dbHelper = new DataBaseHelper();
const instance = dbHelper.init();
// For test the health of microservice
ping = async () => {
  try {
    const result = await instance.select(`
            SELECT 
                status 
            FROM 
            dgsc.ping
        `);

    return result;
  } catch (e) {
    console.log('error ' + e);
    throw e;
  }
};

getDate = async () => {
  try {
    let d = new Date();
    dformat =
      [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') +
      '-' +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

    /* let formatDate = currentDate.toLocaleString('en-UK',{
            weekday: 'short', 
            day: 'numeric',
            year: 'numeric',
            month: 'long', 
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
           });*/
    return dformat;
  } catch (e) {
    console.log('error ' + e);
    throw e;
  }
};

module.exports = {
  ping,
  getDate,
};

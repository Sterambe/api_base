// require others
const healthData = require('../data/health.data');
// const util = require('util');
// const exec = util.promisify(require('child_process').exec);

/**
 * Health Service class use to check the health of the microservice
 *
 * @version 1.0
 * @author stewart (1.0)
 **/
class HealthService {
  constructor() {
    console.log('constructor init healthService');
  }

  // For test the health of microservice
  ping = async () => {
    return await healthData.ping();
  };

  getDate = async () => {
    return await healthData.getDate();
  };
}

module.exports = HealthService;

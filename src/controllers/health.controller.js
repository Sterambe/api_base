// require class
const HealthService = require('../services/health.service');
const healthService = new HealthService();

const BaseController = require('./base.controller');
let { errorHandler } = require('../common/exception.js');
/**
 * Health controller class use to check the health of the microservice
 *
 * @version 1.0
 * @author stewart (1.0)
 **/
class HealthController extends BaseController {
  /**
   * Default constructor
   **/
  constructor() {
    super();
  }

  /**
   * Method to check the health of the microservice
   **/
  ping = async (req, res) => {
    try {
      console.log('REQUEST Health ping');
      let response = {
        body: await healthService.ping(),
      };

      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify(response));
    } catch (e) {
      let error = {
        code: e.code,
        message: e.message,
      };
      console.log('CATCH Health ping', JSON.stringify(error));
      res.setHeader('Content-Type', 'application/json');
      errorHandler(e, res);
    }
  };

  getDate = async (req, res) => {
    try {
      console.log('REQUEST Get Date');
      let response = {
        body: await healthService.getDate(),
      };
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify(response));
    } catch (error) {
      console.log('CATCH Get Date', JSON.stringify(error));
      res.setHeader('Content-Type', 'application/json');
      errorHandler(error, res);
    }
  };
}

module.exports = HealthController;

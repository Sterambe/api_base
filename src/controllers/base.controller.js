// require others
const jwtHelper = require('../helper/jwt.helper.js').getInstance();

// require class
const ApiError = require('../common/api.error');
const errors = require('../common/errors');
let { errorHandler } = require('../common/exception.js');

/**
 * Class used to validate the JWT tokens for request
 *
 * @version 1.0
 * @author stewart (1.0)
 **/

class BaseController {
  constructor() {}

  /**
   * Valida el token proporcionado en la solicitud
   **/
  async verifyToken(req, res, next) {
    try {
      console.log('REQUEST Base verifyToken', JSON.stringify(req.headers));
      const token = this.getTokenFromHeader(req.headers['authorization']);

      if (!token) {
        throw new ApiError(errors.code.E403.code, errors.code.E403.value);
      }

      jwtHelper.verify(token);

      //   if (!(await this.validateToken(token))) {
      //     throw new ApiError(errors.code.E403.code, errors.code.E403.value);
      //   }

      next();
    } catch (e) {
      this.handleError(e, res);
    }
  }

  /**
   * Verifica un token de API específico en la solicitud
   **/
  verifyApiToken(req, res, next) {
    try {
      console.log('REQUEST Base verifyApiToken', JSON.stringify(req.headers));
      const token = this.getTokenFromHeader(req.headers['authorization']);

      if (token !== process.env.API_TOKEN) {
        throw new ApiError(errors.code.E403.code, errors.code.E403.value);
      }

      next();
    } catch (e) {
      this.handleError(e, res);
    }
  }

  /**
   * Valida un token JWT
   **/
  async validateToken(token) {
    let isValid = false;

    try {
      console.log('REQUEST Base validateToken', JSON.stringify(token));
      if (token) {
        let data = jwt.decode(token);
        let userInfo = data.user;
        const user = await userData.findByUuid(userInfo.uuid);

        isValid = user && token === user.token && user.status === 'ACTIVE';
      }
    } catch (error) {
      console.log('CATCH Base validateToken', JSON.stringify(error));
    }

    return isValid;
  }

  getTokenFromHeader(header) {
    if (typeof header !== 'undefined') {
      const bearer = header.split(' ');
      return bearer[1];
    }
    return null;
  }

  handleError(e, res) {
    let error = {
      code: e.code,
      message: e.message,
    };
    console.log('CATCH Base verifyToken', JSON.stringify(error));
    res.setHeader('Content-Type', 'application/json');
    errorHandler(e, res);
  }
}

module.exports = BaseController;

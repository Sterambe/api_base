// require class
const jwt = require('jsonwebtoken');
const ApiError = require('../common/api.error');
const errors = require('../common/errors');

/**
 * Siglenton Class use to manage th JWT
 *
 * @version 1.0
 * @author stewart (1.0)
 **/

/**
 * Se define JWTHelper como una función autoinvocada que retorna un objeto.
 * Esto permite crear un Singleton, asegurando que solo haya una instancia
 * de JWTHelper.
 **/
const JWTHelper = (function () {
  let instance;

  function init() {
    //private function to create methods and properties
    console.log('JWTHelper Init');

    /**
     * Genera el token
     * es un método que genera un token JWT para un usuario dado.
     * El token se firma con una clave secreta y tiene una duración de 100 años
     **/
    const sign = (user) => {
      const token = jwt.sign(
        { user },
        process.env.JWT_SECRET || 'default_secret_key',
        {
          expiresIn: '36500d', // 100 años
        }
      );

      return token;
    };

    /**
     * Verifica el token
     * método que verifica un token JWT. Si el token no es válido o no se proporciona,
     * lanza un error ApiError con un código de error específico.
     **/
    const verify = (token) => {
      if (typeof token !== 'undefined') {
        try {
          const data = jwt.verify(
            token,
            process.env.JWT_SECRET || 'default_secret_key'
          );
          return data;
        } catch (error) {
          throw new ApiError(errors.code.E403.code, errors.code.E403.value);
        }
      } else {
        throw new ApiError(errors.code.E403.code, errors.code.E403.value);
      }
    };

    return {
      sign,
      verify,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

module.exports = JWTHelper;

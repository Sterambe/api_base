/**
 * Custom Class used to manage the errors of the microservice
 *
 * @version 1.0
 * @author stewart (1.0)
 **/
class ApiError extends Error {
  /**
   * ApiError es una clase que hereda de la clase incorporada Error,
   * lo que significa que tendrá todas las propiedades y métodos de un Error.
   **/

  constructor(code, message) {
    super(message); // --> inicializanda la propiedad message de la clase Error.

    this.code = code; // --> asigna el parámetro code a la propiedad code de la instancia de ApiError.
    this.message = message; // --> message asigna el parámetro message a la propiedad message de la instancia de ApiError
  }

  /**
   * Estos métodos están destinados a devolver las propiedades code y message de la instancia.
   **/

  getCode() {
    return this.code;
  }

  getMessage() {
    return this.message;
  }
}

module.exports = ApiError;

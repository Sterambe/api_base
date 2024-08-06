/**
 * Class used to validate manage the errors
 * of the microservice
 *
 * @version 1.0
 * @author stewart (1.0)
 **/
const code = {
  E100: { code: 100, value: 'test 1' },
  E300: { code: 300, value: 'Start Time not avaible' },
  E226: { code: 226, value: 'In Use, data is used' }, // Para cuando no vienen los parametros correctos
  E227: { code: 227, value: 'Space parking lot full' }, // Para cuando no vienen los parametros correctos
  E277: { code: 277, value: 'User already have a reservation this date' }, // Para cuando un usuario ya reservo ese dia
  E278: { code: 278, value: 'Date and time not available' }, // Para cuando otro usuario ya reservo ese dia
  E400: { code: 400, value: 'Bad Request' }, // Para cuando no vienen los parametros correctos
  E401: { code: 401, value: 'Not Authorized' }, //el usuario no esta autorizado para realizar la acción
  E403: { code: 403, value: 'Invalid Token' }, // Para validar el token
  E404: { code: 404, value: 'Not Found, process unsuccessfully' }, // Si una consulta / update / delete no retorna información
  E405: { code: 405, value: 'Status Reset' },
  E406: { code: 406, value: 'Not Acceptable, data was not saved' }, // no se pudo insertar
  E407: { code: 407, value: 'Status INACTIVE' },
  E408: { code: 408, value: 'EMPTY' }, // respuesta vacia
  E500: { code: 500, value: 'Internal Error' }, // Generico
};

module.exports = { code };

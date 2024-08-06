//Funcion encargada de manejar los errores que devuelvan los endpoints
function errorHandler(error, res) {
  try {
    switch (true) {
      case error.code >= 100 && error.code < 200:
        return res.status(error.code).send(JSON.stringify(error));
      case error.code >= 200 && error.code < 300:
        return res.status(error.code).send(JSON.stringify(error));
      case error.code >= 300 && error.code < 400:
        return res.status(error.code).send(JSON.stringify(error));
      case error.code >= 400 && error.code < 500:
        return res.status(error.code).send(JSON.stringify(error));
      case error.code > 500:
        return res.status(error.code).send(JSON.stringify(error));
      default:
        console.error(error);
        return res.status(error.code).send(JSON.stringify(error));
    }
  } catch (err) {
    console.error(err);
    return res.status(err.code).send(JSON.stringify(err));
  }
}

module.exports = { errorHandler };

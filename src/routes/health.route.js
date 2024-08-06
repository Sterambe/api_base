// require others
const { Router } = require('express');
const router = Router();

// require class
const HealthController = require('../controllers/health.controller');
const healthController = new HealthController();

// Class used to create the routes for HealthController
// ejemplo de token => router.get('/test', healthController.verifyToken, healthController.test);
router.get('/ping', healthController.ping);
router.get('/date', healthController.getDate);

module.exports = router;

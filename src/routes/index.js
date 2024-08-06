const express = require('express');

const router = express.Router();
const apiRoutes = express.Router();

// require custom routes

//default middlewares
apiRoutes.use(express.json());
const HealthRoutes = require('./health.route');
// const AuthRoutes = require('./auth.route');

// Custom Routes
apiRoutes.use('/health', HealthRoutes);
// apiRoutes.use('/auth', AuthRoutes);

// Context
router.use('/dgsc/api', apiRoutes);

// Export all routes
module.exports = router;

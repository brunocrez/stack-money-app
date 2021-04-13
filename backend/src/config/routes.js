const express = require('express');
const auth = require('./auth');

module.exports = function (server) {

  // Protected Routes (needs JWT)
  const protectedRoutes = express.Router();
  server.use('/api', protectedRoutes);
  protectedRoutes.use(auth);

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(protectedRoutes, '/billingCycles');

  // Open Routes (no need JWT)
  const openRoutes = express.Router();
  server.use('/oapi', openRoutes);

  const authService = require('../api/user/authService');
  openRoutes.post('/login', authService.login);
  openRoutes.post('/signup', authService.signup);
  openRoutes.post('/validateToken', authService.validateToken);
}
const express = require('express');

module.exports = function (server) {
  // define base_url
  const router = express.Router();
  server.use('/api', router);

  // routes
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
}
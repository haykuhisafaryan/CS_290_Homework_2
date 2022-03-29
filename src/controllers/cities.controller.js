const express = require('express');
const asyncHandler = require('express-async-handler');

const citiesService = require('../services/cities.service');

const route = express.Router();

route.get('/:zipCode', asyncHandler(async (req, res, next) => {
    const { zipCode } = req.params;
    const result = await citiesService.getCityByZipCode(zipCode);
    res.send(result);
}))

module.exports = route;
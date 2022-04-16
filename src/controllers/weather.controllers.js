const express = require('express');
const logger = require('../loaders/logger/index.logger');
const Success = require('../handlers/successHandler');

const { buscarClima, buscarCiudadPorId } = require('../services/clima.services')


/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const climasCoordenadas = async (req, res, next) => {
    try {
    
    const { lon, lat } = req.query;
    const climas = await buscarClima(lon, lat);
    const success = new Success(climas);
    res.json(success);

    } catch (err) {
        next(err);
    }
}

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const climaPorCiudadId = async (req, res, next) => {
    try {

        //logger.info(JSON.stringify(req.params));

        const id = req.params.id;
        const ciudad = req.params.ciudad;
        const clima = await buscarCiudadPorId(ciudad, id);
        const success = new Success(clima);
        res.json(success);

    } catch (err) {
        next(err);
    }
}



module.exports = {
    climasCoordenadas,
    climaPorCiudadId
}
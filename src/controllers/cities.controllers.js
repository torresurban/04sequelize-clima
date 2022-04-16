const express = require('express');
const Success = require('../handlers/successHandler');
const { buscarCiudad } = require('../services/ciudad.services')


//const config = require('../config/index.config');
//const CiudadRepositorio = require('../repositorio/ciudad.repositorio');
//const repositorio = new CiudadRepositorio();
/**
 * @param {express.Request} req 
 * @param {express.Response} sres 
 */
//get
const ciudades = async (req, res, next) => {
    
    try {
        
        //res.json( await repositorio.findCities(req.params.ciudad));
    
        //! en una linea
        //! res.json(new Success (await buscarCiudad(req.params.ciudad)));


        //! en varias lineas
        const ciudades2 = await buscarCiudad(req.params.ciudad);
        const success = new Success(ciudades2);
        res.json(success);

    } catch (err) {
        next(err);
    }
};

module.exports = {
    ciudades
}
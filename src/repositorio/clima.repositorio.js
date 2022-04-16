const config = require('../config/index.config');
const axios = require('axios').default;
const logger = require('../loaders/logger/index.logger');
axios.interceptors.request.use(function (config) {
    logger.info(config);
    return config;
}, function (error) {
    logger.info(error);
    return Promise.reject(error);
});

class ClimaRepositorio{
    constructor(){
        this.units = 'metric';
        this.lang = 'es';
        this.pathBase = config.openweathermap.pathBase;
        this.appid = config.openweathermap.apikey;
    }

    async findWeather(lon, lat){
        try{
            const instance = axios.create({
                baseURL: `${this.pathBase}`,
                params:{
                    lat,
                    lon,
                    'units': this.units,
                    'lang': this.lang,
                    'appid': this.appid
                }
            })
            const response = await instance.get();
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

module.exports = ClimaRepositorio;
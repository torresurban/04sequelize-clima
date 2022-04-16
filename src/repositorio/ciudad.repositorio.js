const config = require('../config/index.config');
const axios = require('axios').default;
const logger = require('../loaders/logger/index.logger');

class CiudadRepositorio {
    constructor() {
        this.limit = 10;
        this.languaje = 'es';
        this.proximity = 'ip';
        this.pathBase = config.mapbox.pathBase;
        this.apikey = config.mapbox.apikey;
    }

    async findCities(ciudad) {
        try {
            // const url = `${this.pathBase}${ciudad}.json?limit=${this.limit}&proximity=${this.proximity}&language=${this.languaje}&access_token=${this.apikey}`

        const instance = axios.create({
            baseURL: `${this.pathBase}${ciudad}.json`,
            params:{
                'limit': this.limit,
                'proximity': this.proximity,
                'language': this.languaje,
                'access_token': this.apikey
            }
        })
        //const response = await axios.get(url);
        const response = await instance.get();

        return response.data;

        
        } catch (err) {
            throw err;
        }
        
        
    }
}

module.exports = CiudadRepositorio;
const dotenv = require('dotenv');

//validamo si existe el archivo .env
const envFound = dotenv.config();
if(!envFound){
    throw new Error("No se encontro el archivo .env");
}

// en caso no este asignado nada en el archivo .env
// asignamos por default el ambiente de desarrollo 'development'
//process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    api:{
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL || 'debug'
    },
    swagger:{
        path: '/documentacion'
    },
    mapbox:{
        pathBase:'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        apikey: process.env.MAPBOX_API_KEY
    },
    openweathermap:{
        pathBase:'https://api.openweathermap.org/data/2.5/weather',
        apikey: process.env.OPENWEATHERMAP_API_KEY
    }
}
const ClimaRepositorio = require('../repositorio/clima.repositorio');
const climaRepositorio = new ClimaRepositorio
const CiudadRepositorio = require('../repositorio/ciudad.repositorio');
const ciudadRepositorio = new CiudadRepositorio
const logger = require('../loaders/logger/index.logger');

const buscarClima = async (lon, lat) => {

    const climas = await climaRepositorio.findWeather(lon, lat);

        return {
            description: climas.weather[0].description,
            temperature: climas.main.temp,
            temperatureMin: climas.main.temp_min,
            temperatureMax: climas.main.temp_max
        }
}

const buscarCiudadPorId = async (ciudad, id) => {
    
        const ciudades = await ciudadRepositorio.findCities(ciudad);
    
        const ciudad2 = ciudades.features.find(e => e.id === id)
        logger.info(JSON.stringify(ciudad2));
        const lon = ciudad2.geometry.coordinates[0];
        const lat = ciudad2.geometry.coordinates[1];
    
        return await buscarClima(lon, lat);
}

module.exports = {
    buscarClima,
    buscarCiudadPorId
}
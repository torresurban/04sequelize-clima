const CiudadRepositorio = require('../repositorio/ciudad.repositorio');
const repositorio = new CiudadRepositorio

const buscarCiudad = async (ciudad) => {

    const ciudades = await repositorio.findCities(ciudad);

    return ciudades.features.map(e => {
        return {
            id: e.id,
            name: e.place_name,
            lon: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1]
        }
    })
}

module.exports = {
    buscarCiudad
}
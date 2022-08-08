const axios = require('axios')

 class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José']

    constructor() {
        //TODO leer DB si existe
    }

    async ciudad( lugar = '' ) {

        try {
            //petición http
            //console.log('Ciudad', lugar)
    
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/rosar.json?access_token=pk.eyJ1IjoibmF0aGdhcmNpYTI5MDMiLCJhIjoiY2w2bDF6MWd0MDdqZTNibW91NG02d2w3ZyJ9.9G7pPFD3gmCffispUbmlIw&limit=5&types=place%2Cpostcode%2Caddress&language=es')
            console.log(resp.data) 
    
            return [] 
            
        } catch (error) {
            return [] //Retornar todos los lugares que coincidan con el escrito por la persona
        }
        return [] 
    }

}

module.exports = Busquedas
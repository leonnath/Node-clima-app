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
    
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data) 
    
            return [] 
            
        } catch (error) {
            return [] //Retornar todos los lugares que coincidan con el escrito por la persona
        }
        return [] 
    }

}

module.exports = Busquedas
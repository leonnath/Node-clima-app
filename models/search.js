 
 class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José']

    constructor() {
        //TODO leer DB si existe
    }

    async ciudad( lugar = '' ) {
        //petición http
        console.log(lugar)

        return [] //Retornar todos los lugares que coincidan con el escrito por la persona
    }

}

module.exports = Busquedas
const { leerInput,
    inquirerMenu,
    pause } = require("./helpers/inquirer")
const Busquedas = require("./models/search")

const main = async () => {

    const busquedas = new Busquedas
    let opt

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                console.log(lugar)

                //Buscar los lugares

                //Sellecionar el lugar

                //Clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad: ')
                console.log('Lat: ')
                console.log('Lng: ')
                console.log('Temperatura: ')
                console.log('Mínima: ')
                console.log('Máxima: ')
            break

        }

        if (opt !== 0) await pause()

    } while (opt !== 0)
}

main()
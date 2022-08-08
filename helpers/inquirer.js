const inquirer = require('inquirer')
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseo hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.cyan } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.cyan } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.cyan } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.cyan } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.cyan } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.cyan } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.cyan } Salir`
           }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear()
    console.log('============================'.cyan)
    console.log('   Seleccione una opción'.cyan)
    console.log('============================\n'.cyan)

    const { opcion } = await inquirer.prompt(menuOpts)

    return opcion

}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.cyan} para continuar`
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) =>{

        const idx = `${i + 1}.`.cyan
    
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.cyan + ' Cancelar'
    })

    const menuOpts = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        
        }
    ]

    const { id } = await inquirer.prompt(menuOpts)
    return id
    
}
const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message

        }
    
    ]

    const { ok } = await inquirer.prompt(question)
    return ok
}

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) =>{

        const idx = `${i + 1}.`.cyan
    
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    })

    const menuOpts = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        
        }
    ]

    const { ids } = await inquirer.prompt(menuOpts)
    return ids
    
}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}
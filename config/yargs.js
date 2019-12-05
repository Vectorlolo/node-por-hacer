const descripcion = {
    demand: true,
    desc: 'Crea una nueva tarea',
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado la tarea '
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}
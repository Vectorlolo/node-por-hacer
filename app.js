const argv = require('./config/yargs').argv
const color = require('colors')
const porHacer = require('./por-hacer/por-hacer');


/* console.log(argv)
 */
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)

        break;
    case 'listar':
        let listado = porHacer.getlistado();
        for (let tarea of listado) {
            console.log('=======POR HACER======='.magenta)
            console.log(tarea.descripcion);
            console.log('ESTADO:', tarea.completado)
            console.log('========================'.magenta)
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}
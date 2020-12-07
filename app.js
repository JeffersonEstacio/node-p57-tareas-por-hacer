/*Comandos:   
    - crear -d "Ir a pasear"
    - listar 
    - actualizar -d "Ir a pasear" -c true*/

const argv = require('./config/yargs').argv;
const tareas = require('./Controlador/Tareas');
const colors = require('colors')


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("==============================");
        console.log("= TAREAS POR HACER =");
        console.log("==============================");
        let listado = tareas.getLista();
        for (let tarea of listado) {
            if (tarea.completado === true) {
                console.log(`Descripcion: ${tarea.descripcion}`.green);
                console.log(`Completado: ${tarea.completado}`.green);
                console.log("------------------");
            } else {
                console.log(`Descripcion: ${tarea.descripcion}`.red);
                console.log(`Completado: ${tarea.completado}`.red);
                console.log("------------------");
            }
        };
        break;
    case 'actualizar':
        let respuesta = tareas.actualizar(argv.Descripcion)
        console.log(`Se actualizo su tarea el estado a ser: ${respuesta}`);
        break;
    case 'eliminar':
        let resp = tareas.eliminar(argv.Descripcion)
        console.log(`Se a Elimino la tarea el estado de existencia paso a ser: ${resp}`);
        break;
    default:
        console.log("Comando no reconocido".yellow);
}
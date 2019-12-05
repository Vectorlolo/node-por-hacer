const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
    /* new Promise((resolve, reject) => {
        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) */
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    cargarDB();


    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getlistado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB()


    let listadoPorHacer2 = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (listadoPorHacer.length === listadoPorHacer2.length) {
        return false
    } else {
        listadoPorHacer = listadoPorHacer2;
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    guardarDB,
    getlistado,
    actualizar,
    borrar
}
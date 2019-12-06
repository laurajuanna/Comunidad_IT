var http = require('http')
var url = require('url')
var crypto = require('crypto')
var fs = require('fs')
var path = require('path')
var ruta_bd = './asientos.json'

function bd_values() {
    var asientos_texto = fs.readFileSync(ruta_bd, 'utf-8').replace(/\n/, '')
    var asientos_array = JSON.parse(asientos_texto)
    var diccionario = new Map()
    asientos_array.forEach(function (asientos) {
        diccionario.set(asientos.id, asientos)
    })
    return diccionario
}

function bd_texto() {
    return fs.readFileSync(ruta_bd, 'utf-8').replace(/\n/g, '')
}

function bd_get(id) {
    var asientos = bd_values()
    return asientos.get(id)
}

function bd_set(id, asientos_) {
    debugger
    var asientos = bd_values()
    asientos.set(id, asientos_)
    var asientos_array = Array.from(asientos.values())
    fs.writeFileSync(ruta_bd, JSON.stringify(asientos_array))
}

function bd_delete(id) {
    var asientos = bd_values()
    var borro = asientos.delete(id)
    if (borro) {
        var asientos_array = Array.from(asientos.values())
        fs.writeFileSync(ruta_bd, JSON.stringify(asientos_array))
    }
    return borro
}

var db_asientos = {
    set: bd_set,
    delete: bd_delete,
    values: bd_values,
    get: bd_get,
    texto: bd_texto
}

function id_aleatorio() {
    return crypto.randomBytes(10).toString('hex')
}

function decodificar_contenido(contenido) {
    var contenido_bien = decodeURIComponent(contenido)
    return new url.URLSearchParams(contenido_bien)
}

var servidor = http.createServer(function (consulta, respuesta) {
    if (consulta.method === 'OPTIONS') {
        respuesta.setHeader('Access-Control-Allow-Origin', '*')
        respuesta.setHeader('Access-Control-Allow-Headers', 'id_asiento, content-type')
        respuesta.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, GET, OPTIONS, PATCH')
        return respuesta.end('')
    }
    
    // responder con recursos estáticos si la url no incluye `/api`
    if (!consulta.url.includes('/api')) {
        // esto no tiene en cuenta nada de seguridad
        try {
            var recurso = fs.readFileSync(path.join('./front', consulta.url))
            respuesta.end(recurso)
        } catch {
            respuesta.statusCode = 404
            respuesta.end('Recurso no encontrado')
        }
    }

    if (consulta.url === '/api/asientos') {
        respuesta.setHeader('Access-Control-Allow-Origin', '*')

        // crear un perro
        if (consulta.method === 'POST') {
            var contenido = ''
            consulta.on('data', function (bloque_texto) {
               contenido += bloque_texto;
            })
            consulta.on('end', function () {
                var contenido_en_partes = decodificar_contenido(contenido)
                var id_asiento = id_aleatorio()
                var nuevo_asiento = {
                    id: id_asiento,
                    nombre: contenido_en_partes.get('nombre'),
                    tel: contenido_en_partes.get('tel'),
                    fecha: contenido_en_partes.get('fecha'),
                    hora: contenido_en_partes.get('hora'),
                    origen: contenido_en_partes.get('origen'),
                    destino: contenido_en_partes.get('destino'),
                    asiento: contenido_en_partes.get('asiento')
                }
                //console.log("info: "+ JSON.stringify(nuevo_asiento));
                db_asientos.set(id_asiento, nuevo_asiento)
                respuesta.end(id_asiento)
            })
        }

        // leer listado perros
        if (consulta.method === 'GET') {
            respuesta.setHeader('Content-Type', 'application/json')
            var respuesta_contenido = db_asientos.texto()
            respuesta.end(`{ respuesta: ${respuesta_contenido} }`)
        }
        
        // borrar perro
        if (consulta.method === 'DELETE') {
            var id_asientos_a_borrar = consulta.headers.id_asiento
            var respuesta_borrado = db_asientos.delete(id_asientos_a_borrar)
            respuesta.end(respuesta_borrado.toString())
        }

        // actualizar perro
        if (consulta.method === 'PATCH') {
            var id_asiento = consulta.headers.id_asiento
            var asiento = db_asientos.get(id_asiento)

            if (!asiento) {
                respuesta.statusCode = 404
                return respuesta.end('Asiento no encontrado')
            }
            
            var contenido = ''
            consulta.on('data', function (bloque_texto) {
               contenido += bloque_texto 
            })
            consulta.on('end', function () {
                var contenido_en_partes = JSON.parse(decodeURIComponent(contenido))
                db_asientos.set(id_asiento, {
                    id: id_asiento,
                    nombre: contenido_en_partes.nombre,
                    tel: contenido_en_partes.tel,
                    fecha: contenido_en_partes.fecha,
                    hora: contenido_en_partes.hora,
                    origen: contenido_en_partes.origen,
                    destino: contenido_en_partes.destino,
                    asiento: contenido_en_partes.asiento
                    
                })
                respuesta.end('actualizado!')
            })
        }
    } else {
        respuesta.statusCode = 404
        respuesta.end('Recurso no existe :(')
    }
})

servidor.listen(5501, function () {
    console.log('Estoy escuchando en el puerto 5501')
})

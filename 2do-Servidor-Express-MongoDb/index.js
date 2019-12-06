var express = require('express');
var bodyParser = require('body-parser') // transforma en objeto
var multer = require('multer')

var app = express();

var upload = multer({dest: 'public/img'})
var puerto = process.env.PORT || 3000

var bd_personas = [{nombre: "Laura", foto_perfil: "/img/cv.jpg"},
{nombre: "Vedder", foto_perfil: "/img/1234568.jpg"},
{nombre: "Olaf", foto_perfil: "/img/oli.jpg"},
{nombre: "Joey", foto_perfil: "/img/joey.jpg"},
{nombre: "Dexter", foto_perfil: "/img/dex.jpg"},
{nombre: "Mickey", foto_perfil: "/img/mick.jpg"}] // TODO ESTO EN REALIDAD ES UN ARRAY VACIO


app.use(bodyParser.urlencoded( { extended:false } ))
app.use(bodyParser.json())

app.use(express.static('./public'))

app.get('/api/personas_ok', function (_, respuesta){
  respuesta.json({ personas: bd_personas })
})

app.get('/api/personas_ok/:nombre', function(consulta,respuesta){
  var nombre = consulta.params.nombre
  var persona = bd_personas.find(function(p){
    return p.nombre.toLowerCase()=== nombre.toLowerCase()
  })

  if (!persona) {
    respuesta.status(404).json({ mensaje: 'Recurso no encontrado.'})
  }

  respuesta.json(persona)
})

app.post('/api/personas_ok', upload.single('foto_perfil'), function (consulta, respuesta){
  bd_personas.push({
    nombre: consulta.body.nombre,
    foto_perfil:'/img/' + consulta.file.filename
  })//push es para agregar un elemento al array bd_personas
  respuesta.status(201).redirect('/sumate_ok.html')
  respuesta.status(!201).redirect('/sumate_fail.html')
})

app.listen(puerto, function () {
  console.log('Servidor escuchando en el puerto '+puerto+'!');
});
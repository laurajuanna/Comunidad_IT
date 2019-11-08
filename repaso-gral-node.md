# Repaso gral de NodeJS

1. Crear un programa que cuando se ejecute, obtenga el nombre que se le pasa por parámetro y muestre por consola el mensaje "Hola [nombre]" reemplazando `[nombre]` por el que obtenga como primer parámetro.

```js
var nombre = process.argv[2] // Toma el nombre del parametro

console.log("Hola "+nombre)
```

2. Crear un programa que obtenga la edad por parámetro cuando se ejecute, y muestre por consola el mensaje "mayor" si la edad ingresada es `>18` o menor en el caso contrario.

```js
var edad = parseInt(process.argv[2])

if (edad > 18) {
    console.log("Mayor")
}else{
    console.log("Menor")
}
```

3. Crear un programa que obtenga un nombre por parámetro y cree una carpeta con ese nombre.

```js
var fs = require('fs')

var carpeta = process.argv[2]

fs.mkdirSync(carpeta)
```

4. Crear el programa "slug.js" que reciba un texto como parámetro y reemplace del texto todos los:
	- espacios por guiones medios (`"el profesor de node"` -> `"el-profesor-de-node"`).
	- mayúsculas por minúsculas (`"NoRmaN" -> `"norman"`).
	- vocales con acéntos por vocales sin acéntos (`"canción"` -> `"cancion"`).

Ayudas:

```js
var texto = "el gato negro es un gato negro"
texto = texto.replace(/gato/g, "perro")

console.log(texto) //> "el perro negro es un perro negro"

var nombre = "Norman"
nombre = nombre.toLowerCase()

console.log(nombre) //> "norman"
```
Solución

```js
var cadena = process.argv[2]

console.log(cadena.replace(/ /g,'-'))
// Entre barras lo que queremos reemplazar y la g para que se reemplace globalmente

console.log(cadena.toLowerCase())

var acentos = cadena.replace(/á/g,'a')
acentos = acentos.replace(/Á/g,'A')
acentos = acentos.replace(/é/g,'e')
acentos = acentos.replace(/É/g,'E')
acentos = acentos.replace(/í/g,'i')
acentos = acentos.replace(/Í/g,'I')
acentos = acentos.replace(/ó/g,'o')
acentos = acentos.replace(/Ó/g,'O')
acentos = acentos.replace(/ú/g,'u')
acentos = acentos.replace(/Ú/g,'U')

console.log(acentos)
```


5. Pasar el programa anterior a un módulo. Ese módulo debería definir la función "slug" y exportarla. La función ahora tomará el texto como parámetro de la función, y no como parámetro de ejecución del programa. Para probar que funcione, importarla desde otro archivo y ejecutarla.

```js
// ARCHIVO.JS
function slug(cadena){
    var resultado = cadena.replace(/ /g,'-')
    resultado = resultado.toLowerCase()
    resultado = resultado.replace(/á/g,'a')
    resultado = resultado.replace(/Á/g,'A')
    resultado = resultado.replace(/é/g,'e')
    resultado = resultado.replace(/É/g,'E')
    resultado = resultado.replace(/í/g,'i')
    resultado = resultado.replace(/Í/g,'I')
    resultado = resultado.replace(/ó/g,'o')
    resultado = resultado.replace(/Ó/g,'O')
    resultado = resultado.replace(/ú/g,'u')
    resultado = resultado.replace(/Ú/g,'U')
    console.log(resultado)
}

module.exports = slug

// ARCHIVO MAIN.JS
var slug = require('./slug')

var texto = process.argv[2]

slug(texto)
```

6. Crear un programa que al ser ejecutado obtenga un nombre como parámetro de ejecución del programa. El programa debe crear una carpeta con nombre igual al que haya obtenido por parámetro, **PERO**, el nombre se va a modificar aplicándosele la función "slug", que deberá ser importada del módulo creado anteriormente.

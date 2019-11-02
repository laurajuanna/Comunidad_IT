# File System (fs)

1. Crear un programa que muestre los archivos y directorios donde está contenido.

```javascript
var fs = require('fs');

var directorios = fs.readdirSync('.');
console.log(directorios)

//Lo que escribo en la consola de git
$ node main.js
[ 'archivo.txt', 'estilos.css', 'index.html', 'main.js' ] // devuelve el directorio y archivos
```

2. Crear un programa que cree una carpeta con nombre igual al que reciba por parámetros.

```javascript
var fs = require('fs');

var nombreCarpeta = process.argv[2]

fs.mkdirSync(nombreCarpeta)

// Lo que escribo en la consola de git
$ node main.js carpeta // No devuelve nada, solo crea la carpeta con el parametro escrito (carpeta)
```

3. Crear un programa que cree un archivo con nombre igual al que reciba como primer parámetro, y contenido igual al que reciba como segundo parámetro.

```javascript
var fs = require('fs');

var nombreArchivo = process.argv[2]
var contenido = process.argv[3]
fs.writeFileSync(nombreArchivo,contenido)

// Lo que escribo en la consola de git
$ node main.js nuevoArchivo.txt 'Este es el contenido' // No devuelve nada, solo crea el archivo
```

4. Crear un programa que cree un archivo "index.html", que contenga como contenido:

```html
<html lang="es">
	<head>
		<title>@titulo@</title>
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>
```

```javascript
var fs = require('fs');

var nombreArchivo = 'index.html'
var contenido = `
    <html lang="es">
	<head>
		<title>@titulo@</title>
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html> `

fs.writeFileSync(nombreArchivo,contenido)

// Lo que escribo en la consola de git
$ node main.js // Solo llamo al archivo y lo crea
```

5. Crear un programa que cree un archivo "config.json", que contenga como contenido:

```json
{
	"titulo": "El gran título",
	"subtitulo": "Un subtítulo",
	"descripcion": "Una descripción larga que no se me ocurre que poner, tururu ru ru ru"
}
```

```javascript
var fs = require('fs');

var nombreArchivo = 'config.json'
var contenido = `
{
	"titulo": "El gran título",
	"subtitulo": "Un subtítulo",
	"descripcion": "Una descripción larga que no se me ocurre que poner, tururu ru ru ru"
}
`

fs.writeFileSync(nombreArchivo,contenido)

// Lo que escribo en la consola de git
$ node main.js // Solo llamo al archivo y lo crea
```

5. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola.

```javascript
var fs = require('fs');

var nombreArchivo = process.argv[2]

var contenido = fs.readFileSync(nombreArchivo, 'utf-8')
console.log(contenido)

// Lo que escribo en la consola de git
$ node main.js nuevoArchivo.js // Le paso por parametro el nombre del archivo
Este es el contenido // me devuelve el contenido
```

6. Crear un programa que importe el archivo "config.json" y muestre el título por consola.

```javascript
var fs = require('fs');

var json = require('./config.json')

console.log(json.titulo)

// Lo que escribo en la consola de git
$ node main.js // Accedo al archivo
El gran título // Me devuelve el título escrito en el json
```

7. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola, **pero** esta vez, reemplazando `@titulo@` por el título que esté en el archivo "config.json", y así con las otras variables del html.

```javascript
var fs = require('fs'); // llama al fs

var json = require('./config.json') // llama al json
var titulo = json.titulo // Guarda el titulo en una variable
var subtitulo = json.subtitulo // Lo mismo con el subtitulo
var descripcion = json.descripcion // Lo mismo con la descripcion

var nombreArchivo = process.argv[2] // guarda el nombre del archivo pasado por parametro

var contenido1 = fs.readFileSync(nombreArchivo, 'utf-8') // Lee el contenido del archivo y lo guarda en la variable
fs.writeFileSync(nombreArchivo,(contenido1.replace("@titulo@",titulo))) // Escribe en el archivo reemplazando el titulo

var contenido2 = fs.readFileSync(nombreArchivo, 'utf-8') // Vuelve a leer el contenido del archivo y lo guarda
fs.writeFileSync(nombreArchivo,(contenido2.replace("@titulo@",titulo))) // reemplaza.. se repite el proceso dos veces mas

var contenido3 = fs.readFileSync(nombreArchivo, 'utf-8')
fs.writeFileSync(nombreArchivo,(contenido3.replace("@subtitulo@",subtitulo)))

var contenido4 = fs.readFileSync(nombreArchivo, 'utf-8')
fs.writeFileSync(nombreArchivo,(contenido4.replace("@descripcion@",descripcion)))

var nuevoContenido = fs.readFileSync(nombreArchivo, 'utf-8') // finalmente lo lee y lo guarda en la variable
console.log(nuevoContenido) // lo devuelve en la consola

// Lo que escribo en la consola de git
$ node main.js index.html // Esto es lo que escribo y abajo lo que devuelve
<html lang="es">
        <head>
                <title>El gran título</title> // titulo cambiado
        </head>
        <body>
                <h1>El gran título</h1> // titulo cambiado
                <h2>Un subtítulo</h2> // subtitulo cambiado
                <p>Una descripción larga que no se me ocurre que poner, tururu r
u ru ru</p> // descripcion cambiada
        </body>
</html>
```

# Módulo File System (fs)

### 1. Crear un programa que muestre los archivos y directorios donde está contenido. ###

```javascript
var fs = require('fs');

var directorios = fs.readdirSync('.');
console.log(directorios)

//Lo que escribo en la consola de git
$ node main.js
[ 'archivo.txt', 'estilos.css', 'index.html', 'main.js' ] // devuelve el directorio y archivos
```

### 2. Crear un programa que cree una carpeta con nombre igual al que reciba por parámetros. ###

```javascript
var fs = require('fs');

var nombreCarpeta = process.argv[2]

fs.mkdirSync(nombreCarpeta)

// Lo que escribo en la consola de git
$ node main.js carpeta // No devuelve nada, solo crea la carpeta con el parametro escrito (carpeta)
```

### 3. Crear un programa que cree un archivo con nombre igual al que reciba como primer parámetro, y contenido igual al que reciba como segundo parámetro. ###

```javascript
var fs = require('fs');

var nombreArchivo = process.argv[2]
var contenido = process.argv[3]
fs.writeFileSync(nombreArchivo,contenido)

// Lo que escribo en la consola de git
$ node main.js nuevoArchivo.txt 'Este es el contenido' // No devuelve nada, solo crea el archivo
```

### 4. Crear un programa que cree un archivo "index.html", que contenga como contenido: ###

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

### 5. Crear un programa que cree un archivo "config.json", que contenga como contenido: ###

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

### 5. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola. ###

```javascript
var fs = require('fs');

var nombreArchivo = process.argv[2]

var contenido = fs.readFileSync(nombreArchivo, 'utf-8')
console.log(contenido)

// Lo que escribo en la consola de git
$ node main.js nuevoArchivo.js // Le paso por parametro el nombre del archivo
Este es el contenido // me devuelve el contenido
```

### 6. Crear un programa que importe el archivo "config.json" y muestre el título por consola. ###

```javascript
var fs = require('fs');

var json = require('./config.json')

console.log(json.titulo)

// Lo que escribo en la consola de git
$ node main.js // Accedo al archivo
El gran título // Me devuelve el título escrito en el json
```

### 7. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola, **pero** esta vez, reemplazando `@titulo@` por el título que esté en el archivo "config.json", y así con las otras variables del html. ###

```javascript
var fs = require('fs'); // llama al fs

var json = require('./config.json') // llama al json

var nombreArchivo = process.argv[2] // Toma el nombre del parametro

var contenido = fs.readFileSync(nombreArchivo, 'utf-8'); // Guarda el contenido en una variable

contenido = contenido.replace("@titulo@", json.titulo); // Reemplaza el titulo del <title>
contenido = contenido.replace("@titulo@", json.titulo); // Reemplaza el titulo
contenido = contenido.replace("@subtitulo@", json.subtitulo); // Reemplaza el subtitulo
contenido = contenido.replace("@descripcion@", json.descripcion); // Reemplaza la descripcion

fs.writeFileSync(nombreArchivo,contenido) // Esta línea es opcional, reemplaza al contenido viejo con el nuevo en el archivo original.

console.log(contenido) // Por último, muestra el contenido en pantalla

// ----------- Lo que escribo en la consola de git

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

## Ejercicio Final 😱

### Crear un programa que cree una carpeta con la siguiente estructura:

```
titulo/
|__ index.html
|__ estilos.css
```

### La carpeta deberá tener el mismo título que el que aparece en el archivo `config.json`.

### El archivo `index.html` va a tener como contenido el siguiente:

```html
<html lang="es">
	<head>
		<title>@titulo@</title>
		<link rel="stylesheet" href="./estilos.css">
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>
```

### Pero reemplazando `@titulo@` por el título del archivo `config.json`, y así con las otras variables que haya.

### El archivo `estilos.css` tendrá el siguiente contenido:

```css
body {
    margin: 0;
    text-align: center;
    background-color: tomato;
}

h1 {
    background-color: #333;
    color: #fafafa;
    padding: 20px;
}
```


Algo asi...
```javascript
var fs = require ('fs')
var contenido = require ('./config.jason')

fs.mkdirSync(contenido.titulo)

var contenidoHtml = `
<html lang="es">
	<head>
		<title>@titulo@</title>
		<link rel="stylesheet" href="./estilos.css">
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>
`
contenidoHtml = contenidoHtml.replace('@titulo@', contenido.titulo)
contenidoHtml = contenidoHtml.replace('@titulo@', contenido.titulo)
contenidoHtml = contenidoHtml.replace('@subtitulo@', contenido.subtitulo)
contenidoHtml = contenidoHtml.replace('@descripcion@', contenido.descripcion)

var contenidoCss = `
body {
    margin: 0;
    text-align: center;
    background-color: tomato;
}

h1 {
    background-color: #333;
    color: #fafafa;
    padding: 20px;
}
`

fs.writeFileSync(`${contenido.titulo}/index.html`, `contenidoHtml`)

fs.writeFileSync(`${contenido.titulo}/estilos.css`, contenidoCss)
```

## Ejercicio mandado por Slack
### Crear un programa que obtenga 2 colores hexadecimal por parámetro. Y que genere una hoja de estilos css. La misma va a ser resultado de leer el archivo estilos-template.css. El cual tiene el siguiente contenido:

```js
body {
  background-color: #@secundario@
}
h1, h2, h3 {
  background-color: #@secundario@
  color: #@primario@
}
main {
  border: 5px solid #@primario@
}
```

### y de reemplazar los textoss @primario@  y @secundario@  por los colores hexadecimales que haya recibido por parámetros. La hoja de estilos será creada con nombre estilos-generados.css

Algo así...

```js
var color1= process.argv[2]
var color2 = process.argv[3]

var css = fs.readFileSync('./estilos-template.css', 'utf-8

css = css.replace(/@primario@/g,color1)
css = css.replace(/@secundario@/g,color2)

fs.writeFileSync('./estilos-generados.css', css)
```

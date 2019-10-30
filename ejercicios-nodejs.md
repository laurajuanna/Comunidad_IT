# Ejercicios Node.js
## Ejercicio 1
En un carpeta, definir en un archivo la función "sumar", que obtenga 2 números por parámetro y los sume. Luego crear un archivo, el cual será ejecutado con `node`, que importe la función "sumar" y la use con los 2 parámetros que recibe el programa.

```javascript
// archivo 1 (Lo llamé funcion.js)
function sumar(nro1,nro2){
    return nro1+nro2;
}

module.exports = sumar

// archivo 2 (Lo llame ejecutar.js)

var sumar = require('./funcion')

var nro1 = parseInt(process.argv[2])
var nro2 = parseInt(process.argv[3])

console.log(sumar(nro1,nro2))

// Para ejecutarlo en la consola de gitbash con node escribo..
$ node ejecutar.js 8 7 // Lo llamo y paso dos parametros
> 15 // Devuelve el resultado

// Para importar desde la consola escribo..
$ node // Ingreso a Node
> sumar = require('./funcion') // Asigno la importacion a una variable
[Function: sumar] // Me devuelve la funcion
> sumar(8,7) // llamo a la función sumar y paso parametros
15 // me devuelve el resultado
```

2. En una carpeta:
- Crear un archivo que exporte la función "siguiente", el cual retorne el siguiente de un número.
- Crear un archivo que exporte la función "suma", el cual retorne la suma de 2 números.
- Crear un archivo "main.js", el cual obtenga 2 números por parámetro y muestre por consola la suma del siguiente del primer parámetro, con el segundo parámetro. Usando las funciones definidas en los otros archivos.

```javascript
// archivo 1 (Lo llamé funcion.js)

function sumar(nro1,nro2){
    return nro1+nro2;
}

module.exports = sumar

// archivo 2 (Lo llame funcion2.js)

function siguiente(nro){
    return nro+1;
}

module.exports = siguiente

// archivo 3 (Lo llame main.js)

var sumar = require('./funcion')
var siguiente = require('./funcion2')

var nro1 = parseInt(process.argv[2])
var nro2 = parseInt(process.argv[3])

console.log(sumar(siguiente(nro1),nro2))

// Para ejecutarlo en la consola de gitbash con node escribo..

$ node main.js 5 8 // Lo llamo y paso dos parametros
14 // Me devuelve un resultado
```

3. En una carpeta:
- Crear un archivo con varias funciones
  - Multiplicar: multiplica 2 números que recibe por parámetros.
  - Restar: resta 2 números que recibe por parámetros.
  - Sumar: suma 2 números que recibe por parámetro.
- Crear un archivo "main.js" que importe las funciones anteriores, y muestre por consola la multiplicación, resta y suma de los 2 números que reciba por parámetro el programa (3 console.log).

```javascript
// archivo 1 (Lo llamé funcion.js)

function sumar(nro1,nro2){
    return nro1+nro2;
}

function restar(nro1,nro2){
    return nro1-nro2;
}

function multiplicar(nro1,nro2){
    return nro1*nro2;
}

module.exports = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar
}

// archivo 2 (Lo llame main.js)

var modulo = require('./funcion')

var nro1 = parseInt(process.argv[2])
var nro2 = parseInt(process.argv[3])

console.log(modulo.sumar(nro1,nro2))
console.log(modulo.restar(nro1,nro2))
console.log(modulo.multiplicar(nro1,nro2))

// Para ejecutarlo en la consola de gitbash con node escribo..

$ node main.js 8 5 // Llamo al archivo y le paso dos parametros
13 // Resultado de la suma
3 // Resultado de la resta
40 // Resultado de la multiplicación
```

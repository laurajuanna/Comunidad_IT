# Apuntes #

O también llamadas: listas, vectores, arreglos… Para nosotros arrays o listas.

Y qué son?

Tipo de valor que agrupa valores de forma ordenada

Primero se puede decir que es una agrupación como los objetos, o sea que estos valores están contenidos en 1 lugar.

Luego que estos valores están dispuestos de forma ordenada. Esto significa que podemos decir que un valor está antes o después que otro.

https://nperrin.io/es/tech/guia-introduccion-a-js#arrays

### Para filtrar se usa FILTER ###

```js
function esPar(nro){
	return nro % 2 == 0;
}

console.log(numeros.filter(esPar));
```

### Para transformar se usa MAP ###

```js
numeros = [2,5,8,9,12,6,7]

function doble (nro){
	var elDoble = nro*2;
	return elDoble;
  }

numeros.map(doble)
```
### Para partir se usa SLICE ###

```js
function es_nombre_de_superheroe(nombre) {
    return nombre.slice(-3) === "man";
  }
```

### Para encontrar el primero se usa FIND ###


### Para recorrer se usa forEach ###

```js
var mensajes_molestos = [
  "No te olvides de desactivar el adblock",
  "Subscribite a nuestro newsletter",
  "Hemos detectado un virus en su máquina"
];

mensajes_molestos.forEach(alert);
```

# Ejercicios con Arrays #

1. Crear un array que tenga 4 elementos,

```js
var array_items = [1,"Laura", "Perro",8]
```

2. Todos de tipo string

```js
var array_string = ["Hola","che","como","estas"]
```

3. Todos de tipo objeto

```js
var array_obj = [
	{perro:"benito"},
	{gato:"oli"},
	{loro:"pepe"},
	{vaca:"lola"}];
```

4. Todos de tipo función

```js
function siguiente(n){
	return n + 1
	}
function anterior(n){
	return n - 1
	}
var lista_funciones = [siguiente,anterior]
```

5. Todos de tipo array

```js
var array_array = [
	[1,2,3],
	[5,6],
	[7,8,9],
	[8,9,4]]
```

6. Crear una función que tome un array de números como primer parámetro y devuelva la suma del primer y último número.

```js

```

7. Crear una función que tome un array de números y devuelva un array del mismo tamaño, pero que los valores de salida sean la mitad de los de entrada. O sea que calcule la mitad de todos los números.

```js

```

8. Crear una función que reciba un array de objetos que tengan un atributo nombre, y retorne un array de solo los nombres.

```js

```

9. Crear 3 funciones que toman un número por parámetro y retornar alguna operación con ese número (el doble, el siguiente, la mitad, etc). Luego crear una función que tome una lista de 3 funciones como primer parámetro, un número como segundo parámetro y devuelva una lista de 3 elementos con los resultados de las funciones ejecutadas con el número pasádo por segundo parámetro.

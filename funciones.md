# Ejercicios funciones

## Parte 1

1. Definir una función llamada "siguiente", la cual retorne el siguiente (+1) de un número que obtenga por parámetros. Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

```javascript
function siguiente(numero) {
    resultado= (numero+1)
    return resultado
}
```

2. Definir una función llamada "doble", la cual retorne el doble (*2) de un número que obtenga por parámetros. Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

```javascript
function doble(numero) {
    resultado= (numero*2)
    return resultado
}
```

3. Definir una función que retorne el doble del siguiente de un número que obtenga por parámetros. Usar las 2 funciones anteriores.  Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

```javascript
function dobleSiguiente(numero) {
    resultado = siguiente(doble(numero)) // O debería ser así?--> resultado = doble(siguiente(numero))
    return resultado
}
```

4. Definir una función llamada "suma", la cual me retorne la suma de 2 números que obtenga por parámetros.  Ejecutarla con los valores: 0 y 0; 2 y 4; -1 y -1;

```javascript
function suma(numero1,numero2) {
    resultado = numero1+numero2
    return resultado
}
```

5. Usar las funciones anteriores para obtener:
  - El siguiente de 4: 1+4
  ```javascript
  siguiente(4) // 5
  ```
  - El doble de 10: 2*10
  ```javascript
  doble(10) // 20
  ```
  - El siguiente del doble de 30: 1+(2*30)
  ```javascript
  dobleSiguiente(30) // 61
  ```
  - La suma de 4 y 5: 4+5
  ```javascript
  suma(4,5) // 9
  ```
  - El doble del siguiente del doble de 5: 2*(1+(2*5))
  ```javascript
  doble(dobleSiguiente(5)) // 22
  ```
  - La suma del siguiente de 3 y 5: (1+3)+5
  ```javascript
  suma(siguiente(3),5) // 9
  ```
  - La suma de 4 y del siguiente del doble de 10: 4+(1+(2*10))
  ```javascript
  suma(4,dobleSiguiente(10)) // 25
  ```
  - El siguiente de la suma del siguiente de 5 y de la suma de 3 y 4: 1+((1+5)+(3+4))
  ```javascript
  siguiente(suma(siguiente(5),suma(3,4))) // 14
  ```

## Parte 2

1. Guardar en una variable llamada "sig", que tenga como valor la función siguiente. Usarla después.
2. Crear una variable llamada "log", que tenga como valor la función `console.log`. Usarla después.
3. Crear un objeto "consola", que tenga un atributo con valor `console.log`. Usarla después.
5. Crear una función llamada "ejecutar" que reciba por parámetro una función y la ejecute.
4. Crear una función llamada "operar", que reciba 1 función por parámetro, y un número. La misma debe retornar el resultado de ejecutar la función recibida, pasándole el número recibido.
5. Crear una función "vago", que me retorne una función que cuando se llame imprima un mensaje por consola.

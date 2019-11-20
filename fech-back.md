# Fetch

Pueden ayudarse con [esta guía sobre `fetch` desde el frontend](/apuntes/front/fetch.md)

## GET simple

1. Crear una página que cuando se le presione un botón haga un `fetch` de `https://emoji-aleatorio.herokuapp.com/emoji` y muestre el resultado en un `alert`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    var url_emoji = 'https://emoji-aleatorio.herokuapp.com/emoji'
    
    async function obtener_emoji() {
        var respuesta = await fetch(url_emoji)
    
        // ya se de antemano que me viene una respuesta tipo JSON.
        var contenido = await respuesta.text()

        alert(contenido)
    }
  </script>
  <style>
  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  </style>
</head>

<body>
  
<button class="button" onclick="obtener_emoji()">Obtener Emoji</button>

</body>
</html>
```

## GET + HTML

2. Crear una página que cuando se le presione un botón haga un `fetch` a `https://emoji-aleatorio.herokuapp.com/emoji` y muestre el emoji resultante en un elemento HTML `h1`, el elemento HTML puede o no existir de antes que se haga el `fetch`. Solo se debe mostrar el valor del atributo `emoji` que reciba.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    var url_emoji = 'https://emoji-aleatorio.herokuapp.com/emoji'
    
    async function obtener_emoji() {
        var respuesta = await fetch(url_emoji)
    
        // ya se de antemano que me viene una respuesta tipo JSON.
        var contenido = await respuesta.json()

        document.querySelector('body').innerHTML = `
        <h1>Obtener Emoji Aleatorio</h1>
        <h2>${contenido.emoji}</h2>
        <button class="button" onclick="obtener_emoji()">Obtener Emoji</button>
        `
    }
  </script>
  <style>
  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
  </style>
</head>

<body>

    <button class="button" onclick="obtener_emoji()">Obtener Emoji</button>

</body>
</html>
```

## GET + Headers

3. Crear una página que cuando se le presione un botón haga un `fetch` de `https://msn-comit.herokuapp.com/doc`, pero con un header `pastafrola: 'membrillo'`, y muestre el contenido dentro (`innerHTML`) de un elemento HTML `div` creado en la página. Este `div` debe tener los siguientes estilos:

```css
div.contenido {
    width: 300px;
    height: 300px;
    margin: auto;
    padding: 10px;
    border: 5px solid #333;
    background: lime;
    overflow: scroll;
}
```

4. Ahora que tenemos acceso a la documentación, queremos hacer una página que al cargar obtenga un token de `https://msn-comit.herokuapp.com/login` para autentificarse. Esa página va a tener un botón, que al presionarse va a tener que buscar los mensajes existentes en `https://msn-comit.herokuapp.com/mensajes` y mostrarlos en una tabla HTML. Pueden ver un ejemplo en [el apunte de `fetch` desde el frontend](/apuntes/front/fetch.md#get-y-html).

## 🔥 Ejercicio integrador, con POST 🔥

Crear una página la cual va a tener

1. un input para escribir un mensaje.
2. un botón para subir el mensaje.
3. un panel donde se vean los mensajes existentes.

Al cargarse la página se deberá autentificar con `https://msn-comit.herokuapp.com/login` para recibir un token.

Los mensajes existentes deben pedirse cada 10 segundos a `https://msn-comit.herokuapp.com/mensajes`. Para ejecutar una función cada cierto tiempo se puede usar `setInterval`:

```js
function mostrar_por_consola() {
    console.log('pasaron 10 segundos')
}

// 10000 milisegundos = 10 segundos
setInterval(mostrar_por_consola, 10000)
```

Y al presionarse el botón se debe subir el mensaje escrito en el `input` a `https://msn-comit.herokuapp.com/mensajes`.

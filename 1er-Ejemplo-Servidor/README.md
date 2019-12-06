## Consigna

1. Elegir un recurso como "alumno", "asiento", "usuario", etc. con el cual quieran interactuar.

2. Crear un HTML que haga un fetch de tipo `GET` al recurso que hayan elegido, este endpoint les deberá devolver un listado del recurso que hayan elegido. Para eso se deberá leer un archivo como `recursos.json`. Luego mostrar esa información en el HTML.

3. Agregar un formulario a su HTML con los inputs necesarios para crear un recurso que hayan elegido. La información de ese formulario deberá ser enviada en el cuerpo de la conexión y agregada al archivo `recursos.json`.

4. Agregar un formulario a su HTML con los inputs necesarios para actualizar un recurso que hayan elegido. Se deberá enviar en un header de la conexión el nombre o identificador del recurso a actualizar. Esa actualización deberá impactar en el archivo `recursos.json`.

5. Agregar un formulario a su HTML donde les deje ingresar el identificador o nombre del recurso que quieren eliminar. Esa nombre o identificador se deberá enviar a través del header de la conexión, y deberá eliminar el recurso de `recursos.json`.

### Aclaración: el HTML debe ser respuesta de una conexión al servidor


## No le agregué estilos .css ni nada, la prioridad era hacer funcionar el CRUD.

- Primero pasar x git bash $ node index.js y luego abrir con el live server desde VSC.

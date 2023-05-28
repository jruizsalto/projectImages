# projectImages

_El objetivo es crear una app Node.js, que pueda recibir una imagen y cree dos nuevos archivos redimensionados a 1024 y 800 de ancho_
_La ruta POST /task crea una tarea de procesado que recibe una imagen y la redimensiona_
_La ruta GET /task/:taskId devuelve el estado de una tarea de procesado_
_Para almacenar los datos se ha usado una base de datos remota de MongoDB_

### Instalación 

_En la carpeta del proyecto debemos ejecutar el comando 'npm install' en una consola para instalar las dependencias_

## Ejecutando las pruebas 

_Existe un archivo Json para ejecutar los tests desde postman_

## Construido con 

* [express](https://expressjs.com/) - El framework web usado
* [mongoose](https://mongoosejs.com/) - Paquete usado para interactuar la con la base de datos MongoDB 
* [multer](https://github.com/expressjs/multer#readme) - Middleware usado para la subida de ficheros
* [sharp](https://github.com/lovell/sharp) - Paquete usando para redimensionar las imágenes

## Versionado

He usado [GitHub](https://github.com/) para el versionado. 
# Descripción

Contruir una webApp que realice búsquedas sobre la api de spotify.

La aplicación debe poseer dos rutas:
/search
/favorites

/search
La página debe mostrar un input en la cual se puede ingresar un texto para buscar canciones.
La lista de resultado debe verse en una lista de resultados en la que cada ítem tenga un
botón/icono.

Al presionar el botón se agrega esta canción a la lista de favoritos.
- En la query string se debe reflejar la búsqueda.
- Server Side Rendering.

/favorites
La página debe mostrar la lista con las canciones favoritas.
Los favoritos tienen que persistir localmente. No es necesario una base de datos.
Cada favorito debe tener un botón/icono para eliminarlo de la lista.

# Requisitos:
- React.
- Instrucciones de como correr el proyecto.

# Deseable:
- Tests.
- Linting.
- Bundler.


# Como levantar la aplicación

## Levantar API
1. Clonar repo https://github.com/juancancela/spotify-api
2. En el root path, ejecutar npm install para instalar las dependencias
3. Ejecutar node server.js

Notas: La API escucha en el puerto 3090

# Levantar APP
1. Clonar este repo
2. Ejecutar yarn install para instalar las dependencias de la app
2. Ejecutar yarn start para iniciar la aplicación

Notas: La app se levanta en el puerto 3000


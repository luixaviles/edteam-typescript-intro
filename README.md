# Angular desde cero

Mira los detalles del desarrollo de este proyecto, paso a paso, en el curso [ed.team/angular](https://ed.team/angular).

## Setup del entorno de desarrollo
Necesitas instalar:
* Git
* Node
* Visual Studio Code

Puedes seguir la guía en mi blog para mayores detalles: [Setting up local environment to Develop Angular Applications](https://luixaviles.com/2017/08/setup-local-environment-angular-apps)

## Introducción a TypeScript

Con este proyecto entenderás los fundamentos básicos de TypeScript.
Primero debes clonar este repositorio.

```
git clone https://github.com/luixaviles/edteam-typescript-intro.git
```

## Compilación automática

Ejecuta los siguientes comandos

```
cd edteam-typescript-intro
tsc --watch
```

La opción `--watch` del compilador de TypeScript, permite observar y recompilar nuestros archivos con cada cambio.
El resultado de la compilación para cada archivo `.ts` se autogenera en el directorio `dist/`.

## Ejecuta tu código

Necesitamos un motor JavaScript para ejecutar el resultado(Archivos `.js`) de nuestros código TypeScript. En este caso podemos usar el que viene con `Node`:

```
node dist/tipos-basicos/tipos-basicos.js
node dist/main.js
```

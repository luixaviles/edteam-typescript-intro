# Angular desde cero

Mira los detalles del desarrollo de este proyecto, paso a paso, en el curso [ed.team/angular](https://ed.team/angular).

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
```

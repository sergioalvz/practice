# TypeScript

Este proyecto contiene una configuración básica de [TypeScript](https://www.typescriptlang.org/) con [Jest](https://jestjs.io/) como framework de testing. Como herramientas de apoyo, también está instalado [TSLint](https://palantir.github.io/tslint/) y un conjunto de paquetes que notificarán sobre posibles [_code smells_](https://en.wikipedia.org/wiki/Code_smell).

Con soporte para múltiples editores de texto (VSCode, Atom, etc.) se recomienda instalar las extensiones para [TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) y [Prettier](https://prettier.io/docs/en/editors.html) con el objetivo de disfrutar de todas las ventajas de este entorno de desarrollo.

## ¿Cómo...?

### Instalar dependencias

Utiliza `npm` para instalar las dependencias de este proyecto desde su propia raíz a través de una interfaz de línea de comandos:

```sh
npm i
```

### Ejecutar la suite de tests

Hay una serie de scripts de `npm` preparados para ejecutar la suite de tests:

```sh
npm run test        # ejecuta la suite completa
npm run test:watch  # ejecución continua de los tests con cambios relacionados
```

### Analizar el código

A través de `npm run lint` podrás obtener un informe del conjunto de _code smells_ identificados por TSLint.

![Logo](img/ucol-logo.jpg)

# Práctica 3: Modules

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- En la clase pasada abordamos los conceptos de

  - First class functions
  - Function expressions
  - Passing functions as parameters

- Los conceptos que quedan pendientes son:
  - Functions created on the fly
  - Interpolación de strings
    - String interpolation
    - Embedded expressions
    - Multiline strings
  - Javascript Modules
  - Event loop

> ENTREGA: DOMINGO 27 DE FEBRERO DEL 2022

## INFORMACIÓN ADICIONAL

Las Functions expressions created on the fly tienen por objetivo ahorrar líneas de código al no ser necesario declarar un prototipo para enviar una función como parámetro.

Podemos definir la interpolación de strings como: “The process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values. It is a form of simple template processing or, in formal terms, a form of quasi-quotation (or logic substitution interpretation). String interpolation allows easier and more intuitive string formatting and content-specification compared with string concatenation.”

Para la especificación de ES6 de javascript se han incorporado los “template strings”, una forma diferente de interpolar los strings que no solo nos permite interpolar strings sino también:

- String interpolation
- Embedded expressions
- Multiline strings
- String formatting
- String tagging for safe HTML escaping, localization and more.

## EVENT LOOPS

Un hilo llama a un call stack y corre un pedazo de código a la vez el cual

Un call stack se encarga de la organización de la ejecución del código, y se encarga de matar un proceso si es que se repite de manera indefinida.

El call stack adquiere un gran problema cuando corre en un navegador por ser de proceso único por lo que tiene que esperar a que un proceso termine para poder continuar con el otro haciendo que no sea optimo.

El evento loop se encarga de revisar el stack y si este vacío toma la primera acción que está en el callback queue y lo ingresa al stack para que lo corra.

Un callback puede ser cualquier función que manden a llamar o podra ser cualquier callback asíncrono

## EXPLICACIÓN DEL PROCESO

1. Modifica el código de las funciones greet() y logGreeting() (Fueron trabajadas en la Practica 2 (https://github.com/LexAguirre/2-Practica_Funciones.git)) Estas se refactorizaran para definir una función “Function expression created on the fly”.
2. Dentro de la llamada (invoke) a “logGreeting”, en lugar de especificar una variable que contiene una función, creamos la función per se y la pasamos como parámetro.
3. Podemos construir la interpolación de strings como: En un esquema “clásico” , la interpolación de strings en javascripts sucede de la siguiente forma:

> let logGreeting1 = (miNombre, miColor) => {
> console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);};

> logGreeting1("Carlos", "azul");

4. Abordaremos las 3 primeras características de los template strings

- String interpolation
- Embedded expressions
- Multiline strings

5. Crear nuevo directorio “modules”

6. Crear un nuevo archivo app.js

7. Crear un nuevo archivo greet.js

8. Escribe "let greet = () => console.log("Hello from the module");" en el archivo greet.js

9. Escribe "greet();" en el archivo greet.js para mandar llamar la función

10. Ahora escribe "require("./greet");" en el archivo app.js en la primera linea

11. Investiga sobre los event loops https://github.com/LexAguirre/3-Practica_Modules#event-loops

## FUENTES

- https://developers.google.com/web/updates/2015/01/ES6-Template-Strings
- https://jack.ofspades.com/multiline-strings-in-es6-javascript/
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
- https://www.youtube.com/watch?v=8aGhZQkoFbQ

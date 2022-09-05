require("./greet");

//Se busca mandar llamar Hello al ejecutar una función
/*
function greet() {
  console.log(`Hello`);
}
let logGreeting = (fn) => fn(); //la misma funcion que 2° pero como arrow function
logGreeting(greet);
*/
//function expression created on the fly
//Creamos la funcion pero estara limitada a recibir otra funcion para poder funcionar corrrectamente
let logGreeting = (fn) => fn();
//Ahora ejecutamos la funcion ingresandole otra funcion la cual regresara un string
logGreeting(function () {
  console.log(`Hello from a function created on the fly`);
});

//interpolacion de string "Clasica"
//Esta manera de armar strings es correcta pero no es eficiente por la manera de concatenar la informacion
let logGreeting1 = (miNombre, miColor) => {
  console.log(
    "Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor
  );
};
logGreeting1("Carlos", "azul");

//Ahora se observara como se puede construir de manera mas eficiente un string
//String interpolation
//Usando la misma funcion que la anterior se busca interpolar la informacion sin utilizar "+"
let logGreeting2 = (miNombre, miColor) => {
  console.log(
    `Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`
  );
};
logGreeting2("Carlos", "azul"); //Se obtiene la misma respuesta pero de una manera mas eficiente

//Embedded expressions
//Cuando se ocupe colocar los `` pero no quieres cerrar el string entonces se debe colocar \` al lugar donde quieres colocar el primero y ya que esta todo se coloca \` al final
let logGreeting3 = (miNombre, miColor) => {
  console.log(
    `Hola ${miNombre} buenos dias! Tu color favorito es el \`${miColor}\``
  );
};
logGreeting3("Carlos", "azul");

//Multiline strings
//Cuando se ocupe saltar un espacio no se ocupa hacer nada especial mas que saltar el espacio ya que eso lo imprimira cuando se mande llamar el string
let logGreeting4 = (miNombre, miColor) => {
  console.log(
    `Hola ${miNombre} 
    buenos dias! 
    Tu color favorito es el \`${miColor}\``
  );
};
logGreeting4("Carlos", "azul");

//Operadores Condicionales
//Para relizar este no se ocupara un if ya que con colocar la condicion y un ? se entiende que deberá elegir una opción las cuales estaran organizadas como true : false
let PI = Math.PI > 4 ? "Yes" : "No";
console.log(PI);

//En este caso como una de las condicionales es otra condicional entonces segira hasta tener un resultado
let firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Acceso Denegado"
    : secondCheck
    ? "Acceso Denegado"
    : "Acceso Permitido";

console.log(access);

//Colocando una coma se puede hacer que se tenga mas de un caso
access2 = firstCheck
  ? "Acceso Denegado"
  : secondCheck
  ? ("Acceso Denegado", "Seguro")
  : ("Acceso Permitido", "Peligro");

console.log(access2);

//alert("hola hola");
//var
//let
//const


//let numero = Number (prompt("escribe un numero"));
//let numero2 =  Number (prompt(" escribe otro un numero"));
//let resultado = numero + numero2
//alert("el numero que esta oculto es:"+resultado);
//console.log("el resultado es:"+resultado)
//document.write("el resultado es:"+resultado)




//trabajo clase
//let salario = Number(prompt("escribe "))
//let salud, pension,salarioNeto;

//salud = salario * 4/100
//pensionNeto = salario - (salud + pension);

//alert (
    //"el salario del empleado es:" +salario+""
//)

//.log(

//)

//ejercicio 1

//let trainguloBase = Number (prompt("coloca el numero de la base del triangulo"));

//let trainguloAltura = Number (prompt("coloca el numero de la altura del triangulo"));

//let resultado = trainguloBase*trainguloAltura/2;

//alert(
    //"El area del triangulo es: "+resultado+"\n"
//);


//ejercicio2


//let numero1 = Number (prompt("ingresa un numero"))

//let numero2 = Number (prompt("ingresa otro numero "))

//let sumaResultado = numero1+numero2;

//let restaResultado = numero1-numero2;

//let divisionResultado = numero1/numero2;

//let multiplicacionResultado = numero1*numero2;


//alert(
    //"la suma de los dijitos es: "+sumaResultado+"\n"+

     //"la resta de los dijitos es: "+restaResultado+"\n"+

     // "la division de los dijitos es: "+divisionResultado+"\n"+

      // "la multiplicacion de los dijitos es: "+multiplicacionResultado+"\n"
    
//)


//ejercicio 3

//let horasTrabajadas = Number (prompt("ingresa las horas trabajadas en un mes")); 20

//let horasExtras = Number (prompt("ingresa las horas extras trabajadas en un mes")); 5

//let valordehornormal = 10000;

//let valordehorextra = 15000;

//let totalhorasNormal = horasTrabajadas * valordehornormal;

//let totalhorasExtra = horasExtras * valordehorextra;

//let sumaTotalhoras = totalhorasNormal + totalhorasExtra;

//alert(
    //"la hora normal es: "+totalhorasNormal+"\n"+
    //"la hora extra es: "+totalhorasExtra+"\n"+
    //"la suma de las horas es: "+sumaTotalhoras
//);


// ejercicio 4

//punto 1

function calcularAreaRectangulo(ancho, alto) {
  const superficie = ancho * alto;
  return superficie;
}
console.log(`El area del rectangulo es: ${calcularAreaRectangulo(10, 5)}`);


//punto 2 


function convertirVelocidad(kilometros) {
  const metros = kilometros * 1000;
  const millas = kilometros * 0.621371;
  console.log(`${kilometros} km equivalen a ${metros} metros.`);
  console.log(`${kilometros} km equivalen a ${millas} millas.`);
}
convertirVelocidad(100);


// punto 3

function calcularCircunferencia(radio) {
  const circunferencia = 2 * Math.PI * radio;
  return circunferencia;
}

function calcularCubo(numero) {
  return numero ** 3;
}
console.log(`La circunferencia del círculo es: ${calcularCircunferencia(5)}`);
console.log(`El cubo de 4 es: ${calcularCubo(4)}`);

// punto 4 

function validarNombre(nombre) {
  if (!isNaN(nombre)) {
    console.log("Ingrese un nombre correcto.");
  } else {
    console.log(`El nombre ingresado es: ${nombre}`);
  }
}

validarNombre("Juan");
validarNombre(123);

//punto 5


function operacionesBasicas() {
  const num1 = parseFloat(prompt("Ingrese el primer número:"));
  const num2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor ingrese números correcto.");
    return;
  }

  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;

  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Multiplicación: ${multiplicacion}`);
  console.log(`División: ${division}`);
}
operacionesBasicas();


//punto6 

function convertirTemperatura(valor, unidad) {
  if (unidad === "C") {
    return {
      celsius: valor,
      fahrenheit: (valor * 9/5) + 32
    };
  } else if (unidad === "F") {
    return {
      celsius: (valor - 32) * 5/9,
      fahrenheit: valor
    };
  }
}

function mostrarMensajeTemperatura(tempC, tempF) {
  if (tempC < 0 || tempF < 32) {
    console.log("Nos congelamos.");
  } else if ((tempC >= 5 && tempC <= 15) || (tempF >= 33 && tempF <= 50)) {
    console.log("Está haciendo frío.");
  } else if ((tempC >= 16 && tempC <= 25) || (tempF >= 51 && tempF <= 77)) {
    console.log("Está normal el día.");
  } else if (tempC > 26 || tempF > 78) {
    console.log("Tiene fiebre.");
  }
}
const tempConvertida = convertirTemperatura(20, "C");
mostrarMensajeTemperatura(tempConvertida.celsius, tempConvertida.fahrenheit);


//punto 7


function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

function clasificarIMC(imc) {
  if (imc < 18.5) {
    console.log(`Tu IMC es ${imc.toFixed(2)}. Bajo peso.`);
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Tu IMC es ${imc.toFixed(2)}. Normal.`);
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Tu IMC es ${imc.toFixed(2)}. Sobrepeso.`);
  } else {
    console.log(`Tu IMC es ${imc.toFixed(2)}. Obeso.`);
  }
}

const miIMC = calcularIMC(70, 1.75);
clasificarIMC(miIMC);


//punto 8


function pedirNombre() {
  return prompt("Por favor, ingrese su nombre:");
}

function imprimirBienvenida(nombre) {
  console.log(`Bienvenido, ${nombre}.`);
}

const nombreUsuario = pedirNombre();
imprimirBienvenida(nombreUsuario);


//punto 9 
function calcularPrecioConIVA(precio) {
  const iva = precio * 0.19;
  const precioFinal = precio + iva;
  return {
    precio,
    iva,
    precioFinal
  };
}

function procesarProductos() {
  const numProductos = parseInt(prompt("Ingrese el número de productos:"));
  let subtotal = 0;

  for (let i = 1; i <= numProductos; i++) {
    const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    subtotal += precio;
    console.log(`Precio del producto ${i}: ${precio}`);
  }

  const resultado = calcularPrecioConIVA(subtotal);
  console.log(`Subtotal: ${resultado.precio}`);
  console.log(`Total a pagar (con 19% de IVA): ${resultado.precioFinal}`);
}


procesarProductos();


//punto 10

function pedirFechaActual() {
  const fecha = new Date();
  return fecha;
}

function calcularDiasFaltantes(fechaActual) {
  const anioActual = fechaActual.getFullYear();
  const fechaFinAnio = new Date(anioActual, 11, 31);
  const diferenciaTiempo = fechaFinAnio.getTime() - fechaActual.getTime();
  const diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  const semanasFaltantes = Math.floor(diasFaltantes / 7);
  console.log(`Faltan ${diasFaltantes} días y ${semanasFaltantes} semanas para terminar el año.`);
}
const hoy = pedirFechaActual();
calcularDiasFaltantes(hoy);


//punto 11

function crearListaCompras() {
  const productos = [];
  const numProductos = parseInt(prompt("Ingrese el número de productos:"));

  for (let i = 0; i < numProductos; i++) {
    const nombre = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    const valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
    const cantidad = parseInt(prompt(`Ingrese la cantidad del producto ${i + 1}:`));
    productos.push({
      nombre,
      valor,
      cantidad
    });
  }
  return productos;
}

function imprimirListaYTotal(lista) {
  let totalMercado = 0;
  console.log("--- Lista de Compras ---");
  lista.forEach(item => {
    const subtotalItem = item.valor * item.cantidad;
    totalMercado += subtotalItem;
    console.log(`Producto: ${item.nombre} | Valor: ${item.valor} | Cantidad: ${item.cantidad} | Subtotal: ${subtotalItem}`);
  });
  console.log("------------------------");
  console.log(`Total del mercado: ${totalMercado}`);
}

const miLista = crearListaCompras();
imprimirListaYTotal(miLista);
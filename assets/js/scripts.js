function cambiarColor() {
  document.getElementById("demo6").style.color = "olive";
}

function operadores() {
  var x = 2;
  var y = 4;
  
  var z = '4';

  let total = x + y;

  alert("el valor del total es: " + total);
}

function myFunction(x, y) {
  let z = x * y;
  document.getElementById('demo').innerHTML = z;
  return z;
}

function adicionar() {
  var x = parseInt(document.getElementById("exampleNumber1").value);
  var y = parseInt(document.getElementById("exampleNumber2").value);
  let total = x + y;
  document.getElementById("exampleTotal").value = total;
  console.log("Total de la adición: " + (total) );
}

function sustraer() {
  var x = parseInt(document.getElementById("exampleNumber1").value);
  var y = parseInt(document.getElementById("exampleNumber2").value);
  let total = x - y;
  document.getElementById("exampleTotal").value = total;
  console.log("Total de la sustracción: " + (total) );
}

var num1 = 6;
var num2 = 3;

console.log("Suma desde el script");
console.log(num1 + num2);

console.log("Sustracción desde el script");
console.log(num1 - num2);

console.log("Prueba de casteo");
console.log("suma: " + parseInt(num1 + num2) );


var myArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log(myArray[2]);

const myArray2 = [1, 2, 3, 4];

myArray2.forEach(item => {
  console.log(item);
});

const greaterFour = myArray2.every(num => num > 4);
console.log("Son mayores que cuatro? " + greaterFour);


const largeNum = myArray2.some(num => num > 4);
console.log("Algun elemento mas grande que 4: " + largeNum);

const sum = myArray2.reduce((total, value) => total + value, 0);
console.log(sum);

const notas = [6, 8, 4, 5, 9];

const filtered = notas.filter(num => num > 5);
console.log(filtered);


for (i=1;i<10;i++){
  document.write("<br><b>La tabla del " + i + ":</b><br>")
  for (j=1;j<10;j++) {
  document.write(i + " x " + j + ": ")
  document.write(i*j)
  document.write("<br>")
  }
}
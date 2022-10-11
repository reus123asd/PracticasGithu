
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];
const resultado = playlist.forEach((element) => {
  console.log(element);
});

// -------------------------------------------------

const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

/// ¡escribir en este espacio la solución del ejercicio!
// console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');

//   ---------------------------------------------------------

const playlist1 = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

/// completá acá el código
const resultado1 = playlist1.forEach((element, i) => {
  console.log(`${i} - ${element}`);
});

// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt

// ----------------------------------------------------------

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

// codea debajo de este comentario la solucion al ejercicio
const resultadox = numbers.forEach((item) => {
  sum += item;
});

console.log(sum);
// deberia mostrar 155

// -------------------------------------------------------------

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
let suma = 0;
// codea debajo de este comentario la solucion al ejercicio
const resultadoo = notasDeTPs.forEach((item) => {
  suma += item;
  notaFinal = suma / notasDeTPs.length;
});
console.log(notaFinal);
// deberia mostrar 6.8

// -------------------------------------------------------------

const masNumeros = [
  43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32,
];
const numerosPares = [];
const numerosImpares = [];

// SOLUCION
for (let i = 0; i < masNumeros.length; i++) {
  if (i % 2 == 0) {
    numerosPares.push(masNumeros[i]);
  } else {
    numerosImpares.push(masNumeros[i]);
  }
}

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

// -------------------------------------------------------

const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

// codea aca tu solución al ejercicio
const result = valores.forEach((item) => {
  dobles.push(item * 2);
});

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]

// ----------------------------------------------------------------

const numeros = [1, 2, 3, 4, 5];

// codear acá la solución del ejercicio
const numerosMasDiez = numeros.map((element) => element + 10);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

// -------------------------------------------------------------------

const numeros1 = [3, 7, 13, 99];

// codear acá la solución del ejercicio
const dobles1 = numeros1.map((element) => element * 2);

console.log(numeros1); // [3, 7, 13, 99]
console.log(dobles1); // [6, 14, 26, 198]

// ------------------------------------------------------------------------

const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio
const frasesExclamadas = frases.map((element) => `¡${element}!`);

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

// ------------------------------------------------------------------------------

const librosDeJS1 = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio
librosDeJS1.map((element) => {
  console.log(`<li>${element}</li>`);
});

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

//   --------------------------------------------------------------------------------

const frases1 = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio
const longitudes = frases1.map((x) => x.length);

console.log(frases1); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]

// ---------------------------------------------------------------------------------------

const playlist2 = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código
const final = playlist2.map((element, i) => `${i} - ${element}`);
console.log(final);

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

// ---------------------------------------------------------------------------------------

const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio
const preciosFinales = costos.map((element) => agregarIVA(sumarGanancia(element)));

console.log(preciosFinales);

// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

// ---------------------------------------------------------------------------------

const productos = ["celular", "notebook", "monitor"];
const costos1 = [12.5, 56, 98];

const agregarIVA1 = function (costo) {
  return costo * 1.21;
};

const sumarGanancia1 = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio
const suma1 = costos1.map((element) =>element * 1.5 * 1.21);
const preciosFinales1 = productos.map((element) =>element + suma1[0]);


console.log(preciosFinales1);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

// -----------------------------------------------------------------------------

const costos2 = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// codear acá la solución del ejercicio
const losMasCaros = costos2.filter(element=> element>50)

console.log(costos2);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

// ----------------------------------------------------------------------------

const masNumeros1 = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares1 = masNumeros1.filter(num=> num % 2 == 0
);
const numerosImpares1 = masNumeros1.filter(num=>num % 2 == 1
);

console.log("pares: ", numerosPares1);
console.log("impares: ", numerosImpares1);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

// ----------------------------------------------------------------------------------

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
  ];
  
  // codear acá la solución del ejercicio
const soloStrings = mix.filter(element => typeof element == 'string'
)
console.log(soloStrings);  
  
  // deberia mostrar
  // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//   ------------------------------------------------------------------------------------------

const playlist3 = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

/// codea aca tu solución

const playlistSinEscuchar = playlist3.filter(element =>{

})
console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]

// ----------------------------------------------------------------------------------------

const numbers3 = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
const resultado0= numbers3.reduce((anterior, actual)=> anterior + actual)
console.log(resultado0)
// deberia mostrar 155

// ---------------------------------------------------------------------------------------------

const numbers4 = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
const resultado9= numbers4.reduce((anterior, actual)=> anterior * actual)
console.log(resultado9)

// deberia mostrar 977976

// ------------------------------------------------------------------------------------------------

const notasDeTPs1 = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio
const resultado8= notasDeTPs1.reduce((anterior, actual)=> anterior + actual)
const promedio = resultado8/notasDeTPs1.length
console.log(promedio)

// deberia mostrar 6.8

// ---------------------------------------------------------------------------------------

const librosDeJS8 = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];
  
  // codear acá la solución del ejercicio
  
  
  
  // el resultado final debería ser
  // <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>

//   ----------------------------------------------------------------------------------------------

const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

// codea debajo de este comentario la solucion al ejercicio
const edades = personas.map(item => item.edad).reduce((prev, curr) => prev + curr, 0);
console.log(edades)
// deberia mostrar 59

console.log('Bienvenido al mundo de la Astrologia Pokemon');
  console.log('Indicaciones :');  console.log(':)');
  console.log('El resultado es lo que te esperará en tu proximo año, asi que es necesario que al ejecutar el proceso pienses en todo aquello que deseas alcanzar...'); 
 console.log(':)');

let x = Math.floor(Math.random()*10);
console.log('tu numero de la suerte es', x)
console.log(':)');
//determina el numero de la suerte


const nombres = ["Picachu", "Charmander", "Snorlax", "Bulbasaur", "Wartortle", "Ningun Pokemon te eligió :(","Pidgeot","Rattata","Sandshrew","Raichu","Nidoran","Clefable","Zubat"];
const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
console.log("tu Pokemon es: ");
console.log(aleatorio);
console.log('o_0');

const Frases = ["Quien no arriesga, ¡no gana! ... tu puedes", "Piensa antes de actuar. ... Manten la boca cerrada", "Confía, está bien. ... pero desconfiar es mejor", "No hagas lo que no quieres que te hagan. ... ¡Que nadie te descubra mi rey", "Si te caes, ¡levántate! ... ni modo que te quedes tirado", "El amor es la fuerza más poderosa del mundo. ... pero tu eres muy debil :("];
const fraseAleatoria = Frases[Math.floor(Math.random() * Frases.length)];
console.log("tu destino es: ");
console.log(fraseAleatoria);

console.log('El maestro pokemon te pide');

const retoFinal = ["Serenata, Se refiere a dar una serenata a la vecina, preferiblemente que sea una persona mayor", "Pelar una mandarina. ...", " Bailar ballet", "Imitar a una gallina", "Chupar un limón", "Pararse de cabeza("];
const finalFrase = retoFinal[Math.floor(Math.random() * retoFinal.length)];
console.log(finalFrase);


  console.log('Created by Miguel Alvarez');
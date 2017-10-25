import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";

let gato: Animal;
gato = new Gato('Misifu', 'Siames');
console.log('gato: ', gato);
gato.desplazar();
// Conversion de tipo (Casting)
(gato as Gato).ronronear();

// set nombre
gato.nombre = 'Tom';
// get nombre
console.log('gato.nombre: ', gato.nombre);
(<Gato>gato).ronronear();



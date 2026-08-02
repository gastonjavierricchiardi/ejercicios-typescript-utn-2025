

//import BookPrinter from "./Solid/bookPrinter";
//import Book from "./Solid/responsabilidadunica";

import Animal from "./Solid/Liskov/animal";
import Cat from "./Solid/Liskov/cat";
import Dog from "./Solid/Liskov/dog";
import PersianCat from "./Solid/Liskov/gatoPersa";

//const unLibro : Book = new Book("Bla ble bli", "Borges, J.", "Funes el memorioso");

// if (unLibro.isWordInText("Bli"))
//     console.log("Contiene la palabra BLA");
// else
//     console.log("No contiene la palabra BLA");

// const libreria : BookPrinter = new BookPrinter();
// libreria.printTextToConsole(unLibro);


const animales : Array<Animal> = new Array<Animal>();
animales.push(new Dog());
animales.push(new Cat());
animales.push(new PersianCat());

animales.forEach( unAnimal => unAnimal.makeNoise());
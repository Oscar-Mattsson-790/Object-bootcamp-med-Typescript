// // Bibblan

// // 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.
// let book: {
//   title: string;
//   author: string;
//   numPages: number;
// };

// book = {
//   title: "King Arthur",
//   author: "Charles Jackson",
//   numPages: 345,
// };

// // 2. Skapa en array av objekt med flera stycken böcker
// let bookArray: Book[] = [];

// interface Book {
//   title: string;
//   author: string;
//   numPages: number;
// }

// const book01 = bookArray.push({
//   title: "King",
//   author: "Oscar",
//   numPages: 345,
// });

// const book02 = bookArray.push({
//   title: "Queen",
//   author: "Lasse på Heden",
//   numPages: 845,
// });

// const book03 = bookArray.push({
//   title: "Deep Water",
//   author: "Rolf Nisse",
//   numPages: 745,
// });

// const book04 = bookArray.push({
//   title: "Toilet reading",
//   author: "Jessica Parker",
//   numPages: 145,
// });

// console.log(bookArray);

// // 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

// function searchTitle(title: string) {
//   const results: Book[] = [];
//   for (let title of book.title) {
//     if ((book.title = "title")) {
//       results.push(title);
//     }
//     console.log(results);
//     return { results };
//   }
// }

// // skapa en tom array för resultaten, ex. const results: Book[] = []
// // Loopa igenom din booksArray ( for-loop )
// // För varje varv, jämför bokens titel med den titlen du letar efter. ( if-sats )
// // Om titeln matchar, pusha in den i results-arrayen
// // Under loopen, returnera din results-array ut från funktionen

let throws = 0; // Använder implicit typning här alltås throws blir typ number
let currentGoal = 1; // Nuvarande tärningsmål
let lastThrow = 1; // Vårt senaste tärningskast

interface Dice {
  sides: number;
  throw(): number; // En metod som returnerarett nummer
}

let dice: Dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides); // Slumpar ett tal mellan 1 - 6
  },
};

const buttonElem = document.querySelector("button");
const diceElem = document.querySelector("#diceElem");

function resetUI(numberOfDices: number): void {
  for (let index = 1; index <= numberOfDices; index++) {
    document.querySelector(`.dots-${index}`)?.classList.remove("faded");
  }
}

buttonElem?.addEventListener("click", () => {
  // Kasta tärning och spara resultatet

  let result = dice.throw();

  console.log(result);
  // Visar tärningen i gränsnitet
  diceElem?.classList.remove(`dots-${lastThrow}`);
  diceElem?.classList.add("dice", `dots-${result}`);

  throws++;

  if (result === currentGoal && currentGoal < 6) {
    document.querySelector(`.dots-${result}`)?.classList.remove("faded");

    currentGoal++; // Öka målet med 1
  } else if (result === currentGoal && currentGoal === 6) {
    document.querySelector(`.dots-${result}`)?.classList.remove("faded");

    console.log(`Woho, du vann! Antal kast: ${throws}`);
    throws = 0;
    currentGoal = 1;
  }

  lastThrow = result;
});

interface Owner {
  lastname: string;
  name: string;
  phoneNumber: string;
}

interface Dog {
  age: number;
  breed: string;
  chipNumber: string;
  img: string;
  name: string;
  onwer: Owner;
  present: boolean;
  sex: string;
}

async function getDogs() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs"
    );
    console.log(response);
    if (response.status === 200) {
      const data: Dog[] = await response.json();
      console.log(data);
    } else {
      throw Error("Något gick fel, försök igen senare");
    }
  } catch (error) {
    console.log(error);
  }
}

getDogs();

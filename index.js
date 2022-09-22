// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years onload. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//  }

//  return gifts;
//}

//wrapGifts(gifts);

let cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards, event) {
    for( let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}


function countDown() {
    let count = 10
    while (count > -1) {
        console.log(count--);
    }
}

//Thank you, Guadalupe, for the wonderful surprise gift!
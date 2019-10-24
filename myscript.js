// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// genero i numeri da 1 a 100

for(i = 0; i < 100; i++){
  console.log(i + 1);
}

for(j = 0; j < 99; j = j+3){
  console.log('Fizz');
}

for(z = 0; z < 100; z = z+5){
  console.log('Buzz');
}

for(h = 0; h < 100; h = h+15){
  console.log('FizzBuzz');
}

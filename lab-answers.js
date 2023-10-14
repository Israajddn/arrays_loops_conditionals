// Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Get Even 
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Fizz Buzz
const fb = [];
for (let i= 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 3 === 0) {
    fb.push("fizz");
  } else if (i % 5 === 0) {
    fb.push("buzz");
  } else {
    fb.push(i);
  }
}
console.log(fb);

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1
for (let i= 0; i < plantee.length; i++) {
	if (typeof plantee[i] === "number") {
        plantee[i] += 1;
  }
}
//2
for (let i= 0; i < wolfy.length; i++) {
	if (wolfy[i] === "Yukon Territory") {
        wolfy[i] = "Gotham City";
  }
}
//3
dart.push("Hawkins");
//4
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(plantee);
console.log(wolfy);
console.log(dart);
// Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
////////////////////////////////

// Get Even 
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
////////////////////////////////

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
////////////////////////////////

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
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
////////////////////////////////

//Yell at the Ninja Turtles
const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let ninja of ninjas) {
    console.log(ninja.toUpperCase());
}
////////////////////////////////

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
const indexOfTitanic = favMovies.indexOf('Titanic');
console.log("index of Titanic " + indexOfTitanic); 
//1,2
const sortFavMovies = favMovies.sort();
console.log("sorted movies " + sortFavMovies);
//3
favMovies.pop();
//4
favMovies.push("Guardians of the Galaxy");
//5
const reverseFavMovies = favMovies.reverse();
console.log("reversed movies " + reverseFavMovies);
//6
favMovies.shift();
//7
favMovies.unshift();
//8,9
const spliceFavMovies = favMovies.splice(favMovies.indexOf('"Django Unchained"'), 1, "Avatar" );
console.log("use of splice " + favMovies);
//10,11,12,13,14
const theMiddle = Math.floor(favMovies.length / 2);
let sliceLastHalf = favMovies.slice(theMiddle,favMovies.length-1);
console.log("use of slice " + sliceLastHalf);
//
const indexOfFastandFurious = favMovies.indexOf("Fast and Furious.");
console.log("index of Fast and Furious " + indexOfFastandFurious);
////////////////////////////////

// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
const spliceEggbert = whereIsWaldo.splice(whereIsWaldo.indexOf('"Eggbert"'),1);
console.log("use of splice " + spliceEggbert);
for (let i = 0; i < whereIsWaldo.length; i++) {
    let subarray = whereIsWaldo[i];
    for (let j = 0; j < subarray.length; j++) {
        if (subarray[j] === "Neff") {
            subarray[j] = "No One";
        }
    }
}
console.log(whereIsWaldo);
for (let i = 0; i < whereIsWaldo.length; i++) {
    let subarray = whereIsWaldo[i];
    for (let j = 0; j < subarray.length; j++) {
        let subsubarray = subarray[j];
        for (let n = 0; n < subsubarray.length; n++)
            if (subsubarray[n] === "Waldo") {
                console.log(subsubarray[n]);
            }
    }
}
////////////////////////////////

// Excited Kitten
const mewo = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?"];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(mewo[(Math.floor(Math.random() * mewo.length))]);
    } else {
        console.log("Love me, pet me! HSSSSSS!");
    }
}
////////////////////////////////

// Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
const median = Math.floor(nums.length / 2);;
console.log(nums[median]);
////////////////////////////////

// Hungry for More?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];
// Alien Attire
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);

// Dress Us Up
for (let i = 0; i < 3; i++) {
    console.log(kristynsCloset[(Math.floor(Math.random() * kristynsCloset.length))]);
}
for (let j = 0; j < 3; j++) {
    for (let i = 0; i < thomsCloset.length; i++) {
        console.log(thomsCloset[i][Math.floor(Math.random() * thomsCloset[i].length + 0)]);
     }
}

// Dirty Laundry
for (let i = 0; i < kristynsCloset.length; i++) {
    console.log("WHIRR: Now washing " + kristynsCloset[i]);
 }

 // Inventory
 console.log(thomsCloset[0][0], ' ', thomsCloset[0][1], ' ', thomsCloset[0][2], ' ', thomsCloset[0][3]);
 console.log(thomsCloset[1][0], ' ', thomsCloset[1][1], ' ', thomsCloset[1][2]);
 console.log(thomsCloset[2][0], ' ', thomsCloset[2][1], ' ', thomsCloset[2][2]);
////////////////////////////////
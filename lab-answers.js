// // Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }
// ////////////////////////////////

// // Get Even 
// for (let i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// ////////////////////////////////

// // Fizz Buzz
// const fb = [];
// for (let i= 1; i <= 100; i++){
//   if (i % 3 === 0 && i % 5 === 0) {
//     fb.push("fizzbuzz");
//   } else if (i % 3 === 0) {
//     fb.push("fizz");
//   } else if (i % 5 === 0) {
//     fb.push("buzz");
//   } else {
//     fb.push(i);
//   }
// }
// console.log(fb);
// ////////////////////////////////

// //Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
// //1
// for (let i= 0; i < plantee.length; i++) {
// 	if (typeof plantee[i] === "number") {
//         plantee[i] += 1;
//   }
// }
// //2
// for (let i= 0; i < wolfy.length; i++) {
// 	if (wolfy[i] === "Yukon Territory") {
//         wolfy[i] = "Gotham City";
//   }
// }
// //3
// dart.push("Hawkins");
// //4
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(plantee);
// console.log(wolfy);
// console.log(dart);
// ////////////////////////////////

// //Yell at the Ninja Turtles
// const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let ninja of ninjas) {
//     console.log(ninja.toUpperCase());
// }
// ////////////////////////////////

// //Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// //
// const indexOfTitanic = favMovies.indexOf('Titanic');
// console.log("index of Titanic " + indexOfTitanic); 
// //1,2
// const sortFavMovies = favMovies.sort();
// console.log("sorted movies " + sortFavMovies);
// //3
// favMovies.pop();
// //4
// favMovies.push("Guardians of the Galaxy");
// //5
// const reverseFavMovies = favMovies.reverse();
// console.log("reversed movies " + reverseFavMovies);
// //6
// favMovies.shift();
// //7
// favMovies.unshift();
// //8,9
// const spliceFavMovies = favMovies.splice(favMovies.indexOf('"Django Unchained"'), 1, "Avatar" );
// console.log("use of splice " + favMovies);
// //10,11,12,13,14
// const theMiddle = Math.floor(favMovies.length / 2);
// let sliceLastHalf = favMovies.slice(theMiddle,favMovies.length-1);
// console.log("use of slice " + sliceLastHalf);
// //
// const indexOfFastandFurious = favMovies.indexOf("Fast and Furious.");
// console.log("index of Fast and Furious " + indexOfFastandFurious);
// ////////////////////////////////

// // Where is Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];
// const spliceEggbert = whereIsWaldo.splice(whereIsWaldo.indexOf('"Eggbert"'),1);
// console.log("use of splice " + spliceEggbert);
// for (let i = 0; i < whereIsWaldo.length; i++) {
//     let subarray = whereIsWaldo[i];
//     for (let j = 0; j < subarray.length; j++) {
//         if (subarray[j] === "Neff") {
//             subarray[j] = "No One";
//         }
//     }
// }
// console.log(whereIsWaldo);
// for (let i = 0; i < whereIsWaldo.length; i++) {
//     let subarray = whereIsWaldo[i];
//     for (let j = 0; j < subarray.length; j++) {
//         let subsubarray = subarray[j];
//         for (let n = 0; n < subsubarray.length; n++)
//             if (subsubarray[n] === "Waldo") {
//                 console.log(subsubarray[n]);
//             }
//     }
// }
// ////////////////////////////////

// // Excited Kitten
// const mewo = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?"];
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(mewo[(Math.floor(Math.random() * mewo.length))]);
//     } else {
//         console.log("Love me, pet me! HSSSSSS!");
//     }
// }
// ////////////////////////////////

// Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
const median = Math.floor(nums.length / 2);;
console.log(nums[median]);
////////////////////////////////
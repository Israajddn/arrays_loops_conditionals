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
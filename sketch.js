// /*
// let xpos;
// let ypos;
// let directionX = 5;
// let directionY = 2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   xpos = width / 2;
//   ypos = height / 2;
// }

// function draw() {
//   //console.log(direction); 
//   xpos = xpos + directionX;
//   ypos = ypos + directionY;

//   // check if we've touched the border
//   if (xpos >= width || xpos <= 0) {
//     directionX = -directionX;
//   }
//   if (ypos >= height || ypos <= 0) {
//     directionY = -directionY;
//   }

//   background(100, 100, 50);
//   ellipse(xpos, ypos, 100, 100);
// }
// for (let x = 10; x > 0; x--) {
//   console.log(x);
//   if (x % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
//   // if () {

//   // }
// }

// */
// /*
// let arr = [7, 3, 1, 9, 9, 9, 0, 2, 5, 7, 9, 0, 3, 8, 6, 7, 1, 2, 1, 7, 4, 1, 4, 2, 6, 3, 2, 1, 2, 9, 2, 7, 2, 2, 1, 0, 9, 5, 3, 3, 9, 1, 2, 2, 6, 6, 3, 8, 5, 3, 3, 2, 7, 9, 9, 2, 1, 7, 8, 9, 6, 10, 9, 7, 7, 6, 7, 10, 9, 1, 5, 3, 0, 6, 5, 8, 2, 7, 9, 5, 1, 1, 1, 9, 6, 3, 10, 9, 0, 2, 5, 6, 1, 4, 1, 2, 4, 3, 7, 3];

// let counter = 0;
// for (let i=0; i <arr.length; i++) {
//   if (arr[i] === 3) {
//     counter = counter + 1;
//     console.log(counter);
//   }
// }
// */
// let arr = [7, 3, 1, 9, 9, 9, 0, 2, 5, 7, 9, 0, 3, 8, 6, 7, 1, 2, 1, 7, 4, 1, 4, 2, 6, 3, 2, 1, 2, 9, 2, 7, 2, 2, 1, 0, 9, 5, 3, 3, 9, 1, 2, 2, 6, 6, 3, 8, 5, 3, 3, 2, 7, 9, 9, 2, 1, 7, 8, 9, 6, 10, 9, 7, 7, 6, 7, 10, 9, 1, 5, 3, 0, 6, 5, 8, 2, 7, 9, 5, 1, 1, 1, 9, 6, 3, 10, 9, 0, 2, 5, 6, 1, 4, 1, 2, 4, 3, 7, 3];
// for (let i=0; i <arr.length; i++) {
//   arr[i] = arr[i] + 1;
//   console.log(arr[i]);
//  let counter = 0;
//  if (arr[1] % 2 === 1) {
//   console.log("Odd");    
//   counter = counter + 1;}
//   console.log(counter);}

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}
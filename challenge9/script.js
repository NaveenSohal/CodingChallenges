function rectangle(rectLenght, rectWidth) {
  console.log(`Area of rectangle is ${rectLenght * rectWidth}`);
  console.log(`Perimeter of rectangle is ${2 * (rectLenght + rectWidth)}`);
}

rectangle(5, 3);

function circle(radius) {
  console.log(`Area of circle ${3.14 * radius ** 2}`);
}

circle(7);

function cylinder(cylinderRadius, cylinderHeight) {
  console.log(
    `Volume of cylinder is ${3.14 * cylinderRadius ** 2 * cylinderHeight}`
  );
}

cylinder(3, 10);

function cube(side) {
  console.log(`Surface are of cube is ${6 * side ** 2}`);
  console.log(`Volume of cube is ${side ** 3}`);
}

cube(4);

function triangle(a, b, c) {
  if (a + b > c || b + c > a || c + a > b) {
    console.log(`Triangle is valid`);
  } else {
    console.log(`Triangle is invalid`);
  }
}

triangle(5, 6, 7);
triangle(2, 3, 6);


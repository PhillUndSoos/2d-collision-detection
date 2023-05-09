//collision detection between rectangles
const rect1 = { x: 5, y: 5, width: 50, height: 50 };
const rect2 = { x: 20, y: 10, width: 10, height: 10 };


//collision detection between rectangles
if (
    rect1.x < rect2.x + rect2.width ||
    rect1.x + rect1.width > rect2.x ||
    rect1.y < rect2.y + rect2.height ||
    rect1.y + rect1.height > rect2.y
) {
    //no collision
    console.log(`\n No collision detected for rect1 and rect2 \n`);
    console.log(JSON.stringify(rect1) + JSON.stringify(rect2));
} else {
    //collision
    console.log(`Collision detected for rect1 and rect2 \n`);

    console.log(JSON.stringify(rect1));
};



//collision detection between circles
const circle1 = { x: 10, y: 10, radius: 600 };
const circle2 = { x: 900, y: 900, radius: 300 };

let distanceX = circle1.x - circle2.x;
let distanceY = circle1.y - circle2.y;
let distance = Math.sqrt((distanceX ** 2) + (distanceY ** 2));
let sumOfRadii = circle1.radius + circle2.radius;

console.log(`\n \n The distance between circle1 and circle2 is: ${distance}`);
console.log(`\n The sum of the Radii is: ${sumOfRadii}`)

if (distance < sumOfRadii) {
    //collision (overlap)
    console.log(`\n circles are overlapping/colliding`)
} else if (distance === sumOfRadii){
    //circles touch each other
    console.log(`\n circles edges are touching each other`)
} else if (distance > sumOfRadii) {
    //no collision
    console.log(`\n no collision detected`)
};


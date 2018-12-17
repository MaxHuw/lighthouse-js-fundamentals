var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("While Loop List:");

var keepGoing = 0;

while (keepGoing < ingredients.length) {
  console.log(ingredients[keepGoing]);
keepGoing++;
}


// Write a for loop that prints out the contents of ingredients:

console.log("For Loop List:");

for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("For Loop Backwards:");

for (i = (ingredients.length -1) ; i >= 0; i--){
  console.log(ingredients[i]);
}

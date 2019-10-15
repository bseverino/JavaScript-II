// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function parent(parentName, childName, grandchildName) {
  console.log(`Hi, my name is ${parentName}.`);
  // debugger;

  function child(){
    console.log(`Hi, my name is ${childName}. My mother's name is ${parentName}.`);
    // debugger;

    function grandchild(){
      console.log(`Hi, my name is ${grandchildName}. My mother's name is ${childName}, and my grandmother's name is ${parentName}.`);
      // debugger;

    }; //grandchild
    grandchild();
  }; //child
  child();
}; //parent
parent("Geraldine", "Tara", "Bianca");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  function counter(){
    if (count < 5) {
      count += 1;
      return count;
    } else {
      count = 1;
      return count;
    }
  };

  counter();
  console.log(count);
};

let count = 0;

counterMaker();
counterMaker();
counterMaker();
counterMaker();
counterMaker();
counterMaker();

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// const counterFactory = (operation) => {
//   

//   const changeValue = {
//     increment: function() {
//       count2 += 1;
//       return count2;
//     },
//     decrement: function() {
//       count2 -= 1;
//       return count2;
//     }
//   }

//   let keyword = operation;

//   if (keyword === "increment"){
//     console.log(changeValue.increment());
//   } else if (keyword === "decrement"){
//     console.log(changeValue.decrement());
//   }
// };

// let count2 = 0;
// counterFactory("increment");
// counterFactory("increment");
// counterFactory("increment");
// counterFactory("decrement");

let count2 = 0;

const counterFactory = () => {
  return {
    increment: function(value, integer) {
      value += integer;
      return value;
    },
    decrement: function(value, integer) {
      value -= integer;
      return value;
    }
  }
  console.log(value);
};

const newCounter = counterFactory();

newCounter.increment(count2, 1);
newCounter.increment(count2, 2);
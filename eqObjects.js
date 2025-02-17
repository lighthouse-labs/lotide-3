const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  }
};

const eqObjects = function (object1, object2) {
  const newArray1 = Object.keys(object1); //Establishing a variable will be good because it will be less taxing for the processing of your program. Rather than spreading Object.keys(object1), Object.keys(object2) to each of the lines of the program just establish a variable instead.
  const newArray2 = Object.keys(object2); // Also the Object.keys(object1) and Object.keys(object2) is an array

  if (newArray1.length !== newArray2.length) {
    // Condition 1: For determining that the length of both objects in question are not the same. If it is not the same we will return false.
    return false;
  }

  for (let key of newArray1) {
    // Looping around the newArray1 to check for each key
    if (Array.isArray(object1[key])) {
      //Condition 3: Checking to see if the value for each of the object[key] is an array.
      let array1 = object1[key];
      let array2 = object2[key];
      for (let i = 0; i <= array1.length; i++) {
        // Part of the eqArrays.js to determine if the arrays in question are the same or not the same based on the conditions below, if it is not the same it will return false.
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key]) {
      //Condition 1: For seeing if the value of object1[key] is the same as the value for object2[key] if they are not the same it will return false.
      return false;
    }
  }
  return true; //if each condition are previously not met the function will return true.
};

const ab = { a: "1", b: "2" }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
const ba = { b: "2", a: "1" }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
assertEqual(eqObjects(ab, abc), false);

///////////////////////////////////////////////////STEP-3///////////////////////////////////////////////////////////

const cd = { c: "1", d: ["2", 3] }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
const dc = { d: ["2", 3], c: "1" }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] }; //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
assertEqual(eqObjects(cd, cd2), false);

//ATTEMPTS BELOW//

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const eqObjects = function (object1, object2) {
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     for (let j = 0; j < Object.keys(object2).length; j++) {
//     }
//   }
// };
// console.log(eqObjects(ab, ba));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// console.log(ab["a"] === ba["a"]);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const eqObjects = function (object1, object2) {
//   let x = [];
//   let y = [];
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     const target1 = Object.keys(object1)[i];
//     return x.push(object1[target1]);
//   }
//   for (let j = 0; j < Object.keys(object1).length; j++) {
//     const target2 = Object.keys(object2)[j];
//     return y.push(object1[target2]);
//   }
//   return x, y;
// };
// console.log(eqObjects(ab, ba));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const eqObjects = function (object1, object2) {
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     for (let j = 0; j < Object.keys(object2).length; j++) {
//       const target1 = Object.keys(object1)[i];
//       const target2 = Object.keys(object2)[j];
//       return object1[target1] !== object2[target2];
//       // if (object1[target1] !== object2[target2]) {
//       //   return false;
//     }
//   }

//   return true;
// };
// console.log(eqObjects(ab, ba));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// // console.log(Object.keys(cd));
// // console.log(Object.keys(dc));

// for (let key of Object.keys(cd)) {
//   if (Array.isArray(cd[key])) {
//     console.log(`${cd[key]} and ${dc[key]}`);
//   }
// }

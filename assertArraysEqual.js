const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion: Passed, ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion: Failed, ${array1} !== ${array2}`);
  }
};

const eqArrays = function (array1, array2) {
  // determining if both arrays are not equal in length
  if (array1.length !== array2.length) {
    return false;
  }

  // determining if each of the elements (either number or string) are not the same
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // if conditions above are not false the function will return true
  return true;
};

////////////////////////////////////////////////////
console.log("-----------------------------------");
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log("-----------------------------------");
assertArraysEqual([1, 2, 3], [3, 2, 1]);
console.log("-----------------------------------");
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
console.log("-----------------------------------");
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
console.log("-----------------------------------");

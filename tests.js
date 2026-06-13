function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}.`);
  }
}

function testAddition() {
  assertEqual(add(2, 3), 5);
}

testAddition();
console.log("Addition test passed.");

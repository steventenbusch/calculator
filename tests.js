function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}.`);
  }
}

function showResult(message, passed) {
  const results = document.querySelector("#test-results");

  if (results) {
    const item = document.createElement("li");
    item.textContent = message;
    item.className = passed ? "pass" : "fail";
    results.appendChild(item);
  }

  console.log(message);
}

function testAddition() {
  assertEqual(add(2, 3), 5);
}

function testSubtraction() {
  assertEqual(subtract(5, 3), 2);
}

function testMultiplication() {
  assertEqual(multiply(4, 3), 12);
}

function testDivision() {
  assertEqual(divide(10, 2), 5);
}

function testSequenceWithAllOperations() {
  assertEqual(calculateSequence("10 + 5 - 3 * 2 / 4"), 6);
}

try {
  testAddition();
  showResult("PASS: addition test passed", true);
} catch (error) {
  showResult(`FAIL: ${error.message}`, false);
}

try {
  testSubtraction();
  showResult("PASS: subtraction test passed", true);
} catch (error) {
  showResult(`FAIL: ${error.message}`, false);
}

try {
  testMultiplication();
  showResult("PASS: multiplication test passed", true);
} catch (error) {
  showResult(`FAIL: ${error.message}`, false);
}

try {
  testDivision();
  showResult("PASS: division test passed", true);
} catch (error) {
  showResult(`FAIL: ${error.message}`, false);
}

try {
  testSequenceWithAllOperations();
  showResult("PASS: sequence with all operations test passed", true);
} catch (error) {
  showResult(`FAIL: ${error.message}`, false);
}

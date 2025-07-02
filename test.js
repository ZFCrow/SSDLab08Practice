
// test.js

function badLogin(input) {
  eval("alert('" + input + "')");  // still bad
  let x = 5;
  x++;  // no console.log, still analyzed
}

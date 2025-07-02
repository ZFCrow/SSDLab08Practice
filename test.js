
// test.js

function badLogin(input) {
  eval("alert('" + input + "')");  // still bad
  let x = 5;
  x++;  // no console.log, still analyzed
}


function loginHandler(req) {
  const input = req.query.name; // untrusted source
  eval("alert('" + input + "')"); // CodeQL will flag this
}
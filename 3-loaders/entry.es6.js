var moduleA = require('./module-a.es6.js');

require('./entry.css');

let filename = "entry.es6.js";

console.log(`${filename}`);
document.write(`<div class="entry">${filename}</div>`);

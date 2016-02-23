var moduleA = require('./module-a.js');

require('style!css!./entry.css');

console.log('entry.js');
document.write('<div class="entry">entry</div>');

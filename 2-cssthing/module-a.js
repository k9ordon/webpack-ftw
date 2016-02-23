var moduleB = require('./module-b.js')

require('style!css!./module-a.css');

console.log('module-a.js');
document.write('<div class="moduleA">module A</div>');

var DOMBuilder = require('./lib/DOMBuilder');

// Modes: html [default], template
require('./lib/DOMBuilder.html');
require('./lib/DOMBuilder.template');

module.exports = DOMBuilder;

//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri Dec 26 09:26:18 PST 2014
// Last Modified: Fri Jan  2 12:54:44 PST 2015
// Filename:      index.js
// Syntax:        JavaScript 1.8.5/ECMAScript 5.1; node 0.10
// vim:           ts=3
//
// Description:   Node.js interface to RationalNumber class for working
//                with rational numbers.  The class is split into two files:
//                   lib/RationalNumbers-base.js
//								(constructor and most functions)
//                   lib/RationalNumbers-math.js
//								(math functions such as add, subtract, multiply, divide)
//

if (typeof module !== 'undefined') {
	// RationalNumber basic functionality:
	//module.exports = require('./lib/RationalNumber-base.js');
	// Including math methods:
	module.exports = require('./lib/RationalNumber-math.js');
}


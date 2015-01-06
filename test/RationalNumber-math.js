// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri Jan  2 09:51:42 PST 2015
// Last Modified: Sun Jan  4 14:12:24 PST 2015
// Filename:      .../test/RationalNumber-math.js
// Syntax:        JavaScript 1.8.5/ECMAScript 5.1, Node 0.10
// vim:           ts=3
//
// Description:   Tests of the RationalNumber object.  Intended to be run
//                with the mocha JavaScript test framework with the command:
//                   mocha RationalNumber-math.js
//                Install mocha with the command:
//                   npm install mocha -g
//                Install npm via node installation, such as:
//                   brew install node   # Apple OS X
//                   yum install node    # Fedora Linux
//                You can also run "make test" in this directory, or
//                "make test" in the parent directory, or "npm test"
//                in the parent directory.
//

// http://nodejs.org/api/assert.html
var assert = require('assert');

// Load the RationalNumber base members for testing:
var RationalNumber = require('../lib/RationalNumber-math.js');

describe('Reciprocal, negation and absolute value tests', function() {
describe('#invert', function() {


it('Invert a RationalNumber',
	function () {
		var rn = new RationalNumber(2,7);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
		rn.invert();
		assert.deepEqual(String(rn), '7/2');
		assert.deepEqual(Number(rn), 7/2);
	}
);


});
describe('#getInversion/inversion', function() {


it('Create an inverted copy of a RationalNumber',
	function () {
		var rn = new RationalNumber(2,7);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
		var rn2 = rn.getInversion();
		assert.deepEqual(rn2 === rn, false);
		assert.deepEqual(String(rn2), '7/2');
		assert.deepEqual(Number(rn2), 7/2);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
	}
);


});
describe('#negate', function() {


it('Negate a RationalNumber',
	function () {
		var rn = new RationalNumber(2,7);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
		rn.negate();
		assert.deepEqual(String(rn), '-2/7');
		assert.deepEqual(Number(rn), -2/7);
	}
);


});
describe('#getInversion/inversion', function() {


it('Create a negated copy of a RationalNumber',
	function () {
		var rn = new RationalNumber(2,7);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
		var rn2 = rn.getNegation();
		assert.deepEqual(rn2 === rn, false);
		assert.deepEqual(String(rn2), '-2/7');
		assert.deepEqual(Number(rn2), -2/7);
		assert.deepEqual(String(rn), '2/7');
		assert.deepEqual(Number(rn), 2/7);
	}
);

it('Create an absolute value copy of a RationalNumber',
	function () {
		var rn1 = new RationalNumber(-2,7);
		assert.deepEqual(String(rn1), '-2/7');
		assert.deepEqual(Number(rn1), -2/7);
		var rn2 = rn1.abs();
		assert.deepEqual(rn2 === rn1, false);
		assert.deepEqual(String(rn2), '2/7');
		assert.deepEqual(Number(rn2), 2/7);
		assert.deepEqual(String(rn1), '-2/7');
		assert.deepEqual(Number(rn1), -2/7);
	}
);


});
});
describe('RationalNumber math operation tests', function() {
describe('#add()', function () {


it('Adding two RationalNumbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		var rn3 = rn1.add(rn2);
		assert.deepEqual(String(rn3), '5/6');
		assert.deepEqual(Number(rn3), 5/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding three RationalNumbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		var rn3 = new RationalNumber(1,6);
		var rn = rn1.add(rn2, rn3);
		assert.deepEqual(String(rn), '1');
		assert.deepEqual(Number(rn), 1);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
		assert.deepEqual(String(rn2), '1/3');
		assert.deepEqual(Number(rn2), 1/3);
		assert.deepEqual(String(rn3), '1/6');
		assert.deepEqual(Number(rn3), 1/6);
	}
);

it('Adding string to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add('1/3');
		assert.deepEqual(String(rn), '5/6');
		assert.deepEqual(Number(rn), 5/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding mixed fraction string to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add('1+1/3');
		assert.deepEqual(String(rn), '11/6');
		assert.deepEqual(Number(rn), 11/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding integer to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add(3);
		assert.deepEqual(String(rn), '7/2');
		assert.deepEqual(Number(rn), 7/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding integer with ignored fractional part to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add(3.14);
		assert.deepEqual(String(rn), '7/2');
		assert.deepEqual(Number(rn), 7/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding multiple integers to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add(1, 2, 3);
		assert.deepEqual(String(rn), '13/2');
		assert.deepEqual(Number(rn), 13/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Adding multiple integer/string mixture to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.add(1, '3/2', 3, '5/6');
		assert.deepEqual(String(rn), '41/6');
		assert.deepEqual(Number(rn), 41/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);


});
describe('#addTo()', function () {

it('Adding RationalNumber to RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,5);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '1/5');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '7/10');
		assert.deepEqual(String(rn2), '1/5');
	}
);

it('Adding integer to RationalNumber',
	function () {
		var rn = new RationalNumber(1,2);
		assert.deepEqual(String(rn), '1/2');
		rn.addTo(5);
		assert.deepEqual(String(rn), '11/2');
	}
);

it('Adding Infinity to Infinity',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
	}
);

it('Adding finite to Infinity',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,9);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
	}
);

it('Adding Infinity to finite',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,9);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
		rn2.addTo(rn1);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
	}
);

it('Adding NaN to NaN',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
	}
);

it('Adding finite to NaN',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(1,2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/2');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/2');
	}
);

it('Adding NaN to finite',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '0/0');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
	}
);

it('Adding Infinity to -Infinity',
	function () {
		var rn1 = new RationalNumber(-1,0);
		var rn2 = new RationalNumber(1,0);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '1/0');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/0');
	}
);

it('Adding -Infinity to Infinity',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(-1,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '-1/0');
		rn1.addTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '-1/0');
	}
);




});
describe('#subtract()', function () {


it('Subtracting two RationalNumbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		var rn3 = rn1.subtract(rn2);
		assert.deepEqual(String(rn3), '1/6');
		assert.deepEqual(Number(rn3), 1/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting three RationalNumbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		var rn3 = new RationalNumber(1,6);
		var rn = rn1.subtract(rn2, rn3);
		assert.deepEqual(String(rn), '0');
		assert.deepEqual(Number(rn), 0);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
		assert.deepEqual(String(rn2), '1/3');
		assert.deepEqual(Number(rn2), 1/3);
		assert.deepEqual(String(rn3), '1/6');
		assert.deepEqual(Number(rn3), 1/6);
	}
);

it('Subtracting string from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract('1/3');
		assert.deepEqual(String(rn), '1/6');
		assert.deepEqual(Number(rn), 1/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting mixed fraction string from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract('1+1/3');
		assert.deepEqual(String(rn), '-5/6');
		assert.deepEqual(Number(rn), -5/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting integer from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract(3);
		assert.deepEqual(String(rn), '-5/2');
		assert.deepEqual(Number(rn), -5/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting integer with ignored fractional part from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract(3.14);
		assert.deepEqual(String(rn), '-5/2');
		assert.deepEqual(Number(rn), -5/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting multiple integers from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract(1, 2, 3);
		assert.deepEqual(String(rn), '-11/2');
		assert.deepEqual(Number(rn), -11/2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);

it('Subtracting multiple integer/string mixture from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn = rn1.subtract(1, '3/2', 3, '5/6');
		assert.deepEqual(String(rn), '-35/6');
		assert.deepEqual(Number(rn), -35/6);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(Number(rn1), 1/2);
	}
);


});
describe('#subtractTo()', function () {

it('Subtracting RationalNumber from RationalNumber',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,5);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '1/5');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '3/10');
		assert.deepEqual(String(rn2), '1/5');
	}
);

it('Subtracting integer from RationalNumber',
	function () {
		var rn = new RationalNumber(1,2);
		assert.deepEqual(String(rn), '1/2');
		rn.subtractTo(5);
		assert.deepEqual(String(rn), '-9/2');
		assert.deepEqual(Number(rn), -9/2);
	}
);

it('Subtracting Infinity from Infinity',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/0');
	}
);

it('Subtracting -Infinity from -Infinity',
	function () {
		var rn1 = new RationalNumber(-1,0);
		var rn2 = new RationalNumber(-1,0);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '-1/0');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '-1/0');
	}
);

it('Subtracting finite from Infinity',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,9);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
	}
);

it('Subtracting Infinity from finite',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,9);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/9');
		rn2.subtractTo(rn1);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
	}
);

it('Subtracting NaN from NaN',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
	}
);

it('Subtracting finite from NaN',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(1,2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/2');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '1/2');
	}
);

it('Subtracting NaN from finite',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '0/0');
		rn1.subtractTo(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0/0');
	}
);


});
describe('#multiply()', function () {


it('multiply two rational numbers together',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '1/3');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '1/3');
		assert.deepEqual(String(rn3), '1/6');
	}
);

it('multiply negative and positive numbers together',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(-1,3);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '-1/3');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '-1/3');
		assert.deepEqual(String(rn3), '-1/6');
	}
);

it('multiply two negative numbers together',
	function () {
		var rn1 = new RationalNumber(-1,2);
		var rn2 = new RationalNumber(-1,3);
		assert.deepEqual(String(rn1), '-1/2');
		assert.deepEqual(String(rn2), '-1/3');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '-1/2');
		assert.deepEqual(String(rn2), '-1/3');
		assert.deepEqual(String(rn3), '1/6');
	}
);

it('multiply zero and rational number together',
	function () {
		var rn1 = new RationalNumber(0,1);
		var rn2 = new RationalNumber(-1,3);
		assert.deepEqual(String(rn1), '0');
		assert.deepEqual(String(rn2), '-1/3');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '0');
		assert.deepEqual(String(rn2), '-1/3');
		assert.deepEqual(String(rn3), '0');
	}
);

it('multiply Infinity and Infinity together',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(1,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '1/0');
		assert.deepEqual(String(rn3), '1/0');
	}
);

it('multiply Infinity and -Infinity together',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(-1,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '-1/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '-1/0');
		assert.deepEqual(String(rn3), '-1/0');
	}
);

it('multiply -Infinity and Infinity together',
	function () {
		var rn1 = new RationalNumber(-1,0);
		var rn2 = new RationalNumber(1,0);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '1/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '1/0');
		assert.deepEqual(String(rn3), '-1/0');
	}
);

it('multiply -Infinity and -Infinity together',
	function () {
		var rn1 = new RationalNumber(-1,0);
		var rn2 = new RationalNumber(-1,0);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '-1/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '-1/0');
		assert.deepEqual(String(rn2), '-1/0');
		assert.deepEqual(String(rn3), '1/0');
	}
);

it('multiply NaN and a number together',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(-1,2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '-1/2');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '-1/2');
		assert.deepEqual(String(rn3), '0/0');
	}
);

it('multiply a number and NaN together',
	function () {
		var rn1 = new RationalNumber(-1,2);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '-1/2');
		assert.deepEqual(String(rn2), '0/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '-1/2');
		assert.deepEqual(String(rn2), '0/0');
		assert.deepEqual(String(rn3), '0/0');
	}
);

it('multiply a Infinity and NaN together',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(0,0);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '0/0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '0/0');
		assert.deepEqual(String(rn3), '0/0');
	}
);

it('multiply a Infinity and 0 together',
	function () {
		var rn1 = new RationalNumber(1,0);
		var rn2 = new RationalNumber(0,1);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '1/0');
		assert.deepEqual(String(rn2), '0');
		assert.deepEqual(String(rn3), '0/0');
	}
);

it('multiply NaN and 0 together',
	function () {
		var rn1 = new RationalNumber(0,0);
		var rn2 = new RationalNumber(0,1);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0');
		var rn3 = rn1.multiply(rn2);
		assert.deepEqual(String(rn1), '0/0');
		assert.deepEqual(String(rn2), '0');
		assert.deepEqual(String(rn3), '0/0');
	}
);


});
describe('#multiplyTo()', function () {


it('multiply two rational numbers together',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(1,3);
		assert.deepEqual(String(rn1), '1/2');
		assert.deepEqual(String(rn2), '1/3');
		rn1.multiplyTo(rn2);
		assert.deepEqual(String(rn1), '1/6');
		assert.deepEqual(String(rn2), '1/3');
	}
);


});
describe('#divide()', function () {

it('divide two rational integers together',
	function () {
		var rn1 = new RationalNumber(5);
		var rn2 = new RationalNumber(3);
		assert.deepEqual(String(rn1), '5');
		assert.deepEqual(String(rn2), '3');
		var rn3 = rn1.divide(rn2);
		assert.deepEqual(String(rn1), '5');
		assert.deepEqual(String(rn2), '3');
		assert.deepEqual(String(rn3), '5/3');
	}
);

it('divide 0 by 0',
	function () {
		var rn1 = new RationalNumber(0);
		var rn2 = new RationalNumber(0);
		assert.deepEqual(String(rn1), '0');
		assert.deepEqual(String(rn2), '0');
		var rn3 = rn1.divide(rn2);
		assert.deepEqual(String(rn1), '0');
		assert.deepEqual(String(rn2), '0');
		assert.deepEqual(String(rn3), '0/0');
	}
);

it('divide 1 by 0',
	function () {
		var rn1 = new RationalNumber(1);
		var rn2 = new RationalNumber(0);
		assert.deepEqual(String(rn1), '1');
		assert.deepEqual(String(rn2), '0');
		var rn3 = rn1.divide(rn2);
		assert.deepEqual(String(rn1), '1');
		assert.deepEqual(String(rn2), '0');
		assert.deepEqual(String(rn3), '1/0');
	}
);


});
describe('#divideTo()', function () {

it('divide two rational integers together',
	function () {
		var rn1 = new RationalNumber(5);
		var rn2 = new RationalNumber(3);
		assert.deepEqual(String(rn1), '5');
		assert.deepEqual(String(rn2), '3');
		rn1.divideTo(rn2);
		assert.deepEqual(String(rn1), '5/3');
		assert.deepEqual(String(rn2), '3');
	}
);


});
});
describe('Calculating Array of RationalNumbers', function() {
describe('Addition of Arrays', function() {


it('Add an array of RationalNumbers',
	function () {
		var rn1 = new RationalNumber(4, 5);
		var rn2 = new RationalNumber(3, 5);
		var rn3 = new RationalNumber(6, 5);
		var rn4 = new RationalNumber(9, 10);
		var sum = rn1.add([rn2, rn3, rn4]);
		assert.deepEqual(String(sum), '7/2');
	}
);

it('Add an array of strings',
	function () {
		var rn = new RationalNumber(4, 5);
		var sum = rn.add(['3/5', '6/5', '9/10']);
		assert.deepEqual(String(sum), '7/2');
	}
);

it('Add an array of integers',
	function () {
		var rn = new RationalNumber(4, 5);
		var sum = rn.add([8, -4, 1]);
		assert.deepEqual(String(sum), '29/5');
	}
);


});
});




// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri Jan  2 09:51:42 PST 2015
// Last Modified: Sun Jan  4 15:54:11 PST 2015
// Filename:		.../test/RationalNumber-base.js
// Syntax:			JavaScript 1.8.5/ECMAScript 5.1, Node 0.10
// vim:				ts=3
//
// Description:	Tests of the RationalNumber object.  Intended to be run
//                with the mocha JavaScript test framework with the command:
//                   mocha RationalNumber-base.js
//                Install mocha with the command:
//                   npm install mocha -g
//                Install npm via node installation, such as:
//							brew install node   # Apple OS X
//                   yum install node    # Fedora Linux
//						You can also run "make test" in this directory, or
//						"make test" in the parent directory, or "npm test"
//						in the parent directory.
//

// http://nodejs.org/api/assert.html
var assert = require('assert');

// Load the RationalNumber base members for testing:
var RationalNumber = require('../lib/RationalNumber-base.js');


describe('RationalNumber constructor tests', function() {
describe('Creating rational numbers with the constructor', function () {


it('Creating default value with constructor',
	function () {
		var rn = new RationalNumber();
		assert.deepEqual(String(rn), '0');
		assert.deepEqual(Number(rn), 0);
	}
);

it('Creating rational number from integer',
	function () {
		var rn = new RationalNumber(17);
		assert.deepEqual(String(rn), '17');
		assert.deepEqual(Number(rn), 17);
	}
);

it('Creating rational number from fractional number (fraction part ignored)',
	function () {
		var rn = new RationalNumber(17.15);
		assert.deepEqual(String(rn), '17');
		assert.deepEqual(Number(rn), 17);
	}
);

it('Creating rational number from two integers',
	function () {
		var rn = new RationalNumber(9, 2);
		assert.deepEqual(String(rn), '9/2');
		assert.deepEqual(Number(rn), 4.5);
	}
);

it('Create rational number with sign on second integer',
	function () {
		var rn = new RationalNumber(9, -2);
		assert.deepEqual(String(rn), '-9/2');
		assert.deepEqual(Number(rn), -4.5);
	}
);

it('Create positive rational number from two negative integers',
	function () {
		var rn = new RationalNumber(-9, -2);
		assert.deepEqual(String(rn), '9/2');
		assert.deepEqual(Number(rn), 4.5);
	}
);

it('Creating negative rational number from two integers',
	function () {
		var rn = new RationalNumber(-9, 2);
		assert.deepEqual(String(rn), '-9/2');
		assert.deepEqual(Number(rn), -4.5);
	}
);

it('Creating rational number from integer string',
	function () {
		var rn = new RationalNumber('3');
		assert.deepEqual(String(rn), '3');
		assert.deepEqual(Number(rn), 3);
	}
);

it('Creating rational number from negative integer string',
	function () {
		var rn = new RationalNumber('-324');
		assert.deepEqual(String(rn), '-324');
		assert.deepEqual(Number(rn), -324);
	}
);

it('Creating rational number from fraction string',
	function () {
		var rn = new RationalNumber('3');
		assert.deepEqual(String(rn), '3');
		assert.deepEqual(Number(rn), 3);
	}
);

it('Creating rational number from negative fraction string',
	function () {
		var rn = new RationalNumber('-8/17');
		assert.deepEqual(String(rn), '-8/17');
		assert.deepEqual(Number(rn), -8/17);
	}
);

it('Creating rational number from mixed fraction string',
	function () {
		var rn = new RationalNumber('4+1/16');
		assert.deepEqual(String(rn), '65/16');
		assert.deepEqual(rn.toStringMixed(), '4+1/16');
		assert.deepEqual(Number(rn), 4+1/16);
	}
);

it('Creating rational number from negative mixed fraction string',
	function () {
		var rn = new RationalNumber('-4-1/16');
		assert.deepEqual(String(rn), '-65/16');
		assert.deepEqual(rn.toStringMixed(), '-4-1/16');
		assert.deepEqual(Number(rn), -4-1/16);
	}
);

it('Creating rational number from sloppy negative mixed fraction string',
	function () {
		var rn = new RationalNumber('-4+1/16');
		assert.deepEqual(String(rn), '-65/16');
		assert.deepEqual(rn.toStringMixed(), '-4-1/16');
		assert.deepEqual(Number(rn), -4-1/16);
	}
);

it('Creating rational number from negative mixed fraction string with space',
	function () {
		var rn = new RationalNumber('-4 1/16');
		assert.deepEqual(String(rn), '-65/16');
		assert.deepEqual(rn.toStringMixed(), '-4-1/16');
		assert.deepEqual(Number(rn), -4-1/16);
	}
);

it('Creating rational number from positive mixed fraction string with space',
	function () {
		var rn = new RationalNumber('4 1/16');
		assert.deepEqual(String(rn), '65/16');
		assert.deepEqual(rn.toStringMixed(), '4+1/16');
		assert.deepEqual(Number(rn), 4+1/16);
	}
);

it('Creating rational number that needs to be reduced',
	function () {
		var rn = new RationalNumber(2, 4);
		assert.deepEqual(String(rn), '1/2');
		assert.deepEqual(Number(rn), 1/2);
	}
);

it('Creating rational number from string that needs to be reduced',
	function () {
		var rn = new RationalNumber('2/4');
		assert.deepEqual(String(rn), '1/2');
		assert.deepEqual(Number(rn), 1/2);
	}
);

it('Creating rational number from mixed fraction that needs to be reduced',
	function () {
		var rn = new RationalNumber('7+2/4');
		assert.deepEqual(String(rn), '15/2');
		assert.deepEqual(Number(rn), 7+1/2);
	}
);

it('Creating rational number from another rational number',
	function () {
		var rn1 = new RationalNumber('7+2/4');
		var rn2 = new RationalNumber(rn1);
		assert.deepEqual(String(rn2), '15/2');
		assert.deepEqual(Number(rn2), 7+1/2);
	}
);


});
describe('Creating infinities and NaN', function () {


it('Creating an infinite number with constructor',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Creating an infinite number with that needs reducing',
	function () {
		var rn = new RationalNumber(17, 0);
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Creating an infinite number that is not reduced',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(17, 0);
		assert.deepEqual(String(rn), '17/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Creating an infinite number with constructor',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Creating negative infinity with constructor',
	function () {
		var rn = new RationalNumber(-6, 0);
		assert.deepEqual(String(rn), '-1/0');
		assert.deepEqual(Number(rn), -Infinity);
	}
);

it('Creating NaN',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(String(rn), '0/0');
		assert.deepEqual(rn.toString(), '0/0');
		assert.deepEqual(rn.toStringMixed(), 'NaN');
		assert.deepEqual(isNaN(Number(rn)), true);
		assert.deepEqual(isNaN(rn.valueOf()), true);
		assert.deepEqual(isNaN(rn.toNumber()), true);
		assert.deepEqual(isNaN(rn.toFloat()), true);
	}
);


});
});
describe('Accessor function tests', function () {
describe('Manipulating the sign of a rational number', function () {


it('Change sign of rational number with setSign(number)',
	function () {
		var rn = new RationalNumber(1);
		rn.setSign(-1);
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign(1);
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign(-9);
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign(0);
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign(9);
		assert.deepEqual(rn.getSign(), 1);
	}
);

it('Change sign of rational number with setSign(string)',
	function () {
		var rn = new RationalNumber(1);
		rn.setSign('-');
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign('+');
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign('minus');
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign('negative');
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign('positive');
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign('plus');
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign('+');
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign('');
		assert.deepEqual(rn.getSign(), 1);
	}
);

it('Change sign of rational number with another rational number',
	function () {
		var rn = new RationalNumber(1);
		var rnpos = new RationalNumber(17, 12);
		var rnneg = new RationalNumber(-4, 51);
		assert.deepEqual(rn.getSign(), 1);
		rn.setSign(rnneg);
		assert.deepEqual(rn.getSign(), -1);
		rn.setSign(rnpos);
		assert.deepEqual(rn.getSign(), 1);
	}
);

it('Check sign value of 0',
	function () {
		var rn = new RationalNumber(0);
		assert.deepEqual(rn.getSign(), 1);
	}
);

it('Check sign of infinities and NaN',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(rn.getSign(), -1);
		rn.setValue(1, 0);
		assert.deepEqual(rn.getSign(), 1);
		rn.setValue(0, 0);
		assert.deepEqual(rn.getSign(), 1);
	}
);


});
describe('#getNumerator()', function () {


it('Get numerator of positive number',
	function () {
		var rn = new RationalNumber(8, 5);
		assert.deepEqual(rn.getNumerator(), 8);
	}
);

it('Get numerator of positive number which was reduced',
	function () {
		var rn = new RationalNumber(8, 4);
		assert.deepEqual(rn.getNumerator(), 2);
	}
);

it('Get numerator of negative number',
	function () {
		var rn = new RationalNumber(-8, 5);
		assert.deepEqual(rn.getNumerator(), -8);
	}
);


});
describe('#getNumeratorAbsoluteValue()', function () {


it('Get absolute numerator of positive number',
	function () {
		var rn = new RationalNumber(8, 5);
		assert.deepEqual(rn.getNumeratorAbsoluteValue(), 8);
	}
);

it('Get absolute numerator of negative number which was reduced',
	function () {
		var rn = new RationalNumber(8,-4);
		assert.deepEqual(rn.getNumeratorAbsoluteValue(), 2);
	}
);

it('Get absolute numerator of negative number',
	function () {
		var rn = new RationalNumber(-8, 5);
		assert.deepEqual(rn.getNumeratorAbsoluteValue(), 8);
	}
);


});
describe('#getDenominator()', function () {


it('Get absolute denominator of positive number',
	function () {
		var rn = new RationalNumber(8, 5);
		assert.deepEqual(rn.getDenominator(), 5);
	}
);

it('Get denominator of number which was reduced',
	function () {
		var rn = new RationalNumber(8,-4);
		assert.deepEqual(rn.getDenominator(), 1);
		var rn2 = new RationalNumber(8, 4);
		assert.deepEqual(rn.getDenominator(), 1);
	}
);

it('Get denominator of negative number',
	function () {
		var rn = new RationalNumber(-8, 5);
		assert.deepEqual(rn.getDenominator(), 5);
	}
);

it('Get denominator of an infinite number',
	function () {
		var rn = new RationalNumber(10, 0);
		assert.deepEqual(rn.getDenominator(), 0);
	}
);

it('Get denominator of NaN',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.getDenominator(), 0);
	}
);


});
describe('#setNumeratorNoReduce()', function () {


it('Set numerator to create a fraction which is not reduced',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumeratorNoReduce(15).toString(), '15/9');
	}
);

it('Set negative numerator to create a fraction which is not reduced',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumeratorNoReduce(-15).toString(), '-15/9');
	}
);


});
describe('#setNumerator()', function () {


it('Set numerator to create a fraction which should be reduced',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumerator(18).toString(), '2');
	}
);

it('Set negative numerator to create a fraction which is not reduced',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumerator(-18).toString(), '-2');
	}
);

it('Set numerator to change sign of fraction',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumerator(-21).toString(), '-7/3');
		assert.deepEqual(Number(rn), -7/3);
	}
);

it('Try to set numerator with a number with a fractional part.',
	function () {
		var rn = new RationalNumber(5, 9);
		assert.deepEqual(rn.setNumerator(-21.842).toString(), '-7/3');
		assert.deepEqual(Number(rn), -7/3);
	}
);


});
describe('#isNaN()', function () {


it('Check if NaN is identified as a NaN',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.isNaN(), true);
	}
);

it('Check if Infinity is not identified as a NaN',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(rn.isNaN(), false);
	}
);

it('Check if valid positive number not identified as a NaN',
	function () {
		var rn = new RationalNumber(1, 13);
		assert.deepEqual(rn.isNaN(), false);
	}
);

it('Check if valid negative number not identified as a NaN',
	function () {
		var rn = new RationalNumber(-2, 26);
		assert.deepEqual(rn.isNaN(), false);
	}
);


});
describe('#isInfinite()', function () {


it('Check if NaN is not identified as infinite',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.isInfinite(), false);
	}
);

it('Check if positive infinity is identified as infinite',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(rn.isInfinite(), true);
	}
);

it('Check if negative infinity is identified as infinite',
	function () {
		var rn = new RationalNumber(-5, 0);
		assert.deepEqual(rn.isInfinite(), true);
	}
);

it('Check if finite number is infinite',
	function () {
		var rn = new RationalNumber(1, 6);
		assert.deepEqual(rn.isInfinite(), false);
	}
);


});
describe('#setDenominatorAbsoluteValueNoReduce()', function () {


it('Set an unreduced denominator on negative number',
	function () {
		var rn = new RationalNumber(-10, 4);
		assert.deepEqual(rn.toString(), '-5/2');
		assert.deepEqual(rn.setDenominatorAbsoluteValueNoReduce(25).toString(), '-5/25');
	}
);

it('Set an unreduced denominator on positive number',
	function () {
		var rn = new RationalNumber(10, 4);
		assert.deepEqual(rn.toString(), '5/2');
		assert.deepEqual(rn.setDenominatorAbsoluteValueNoReduce(25).toString(), '5/25');
	}
);

it('Set denominator to zero',
	function () {
		var rn = new RationalNumber(10, 4);
		assert.deepEqual(rn.toString(), '5/2');
		assert.deepEqual(rn.setDenominatorAbsoluteValueNoReduce(0).toString(), '5/0');
	}
);

it('Set denominator with ignored fractional part',
	function () {
		var rn = new RationalNumber(10, 4);
		assert.deepEqual(rn.toString(), '5/2');
		assert.deepEqual(rn.setDenominatorAbsoluteValueNoReduce(-0.325).toString(), '5/0');
	}
);


});
describe('#reduce()', function () {


it('Reduce an unreduced positive fraction',
	function () {
		var rn = new RationalNumber(1, 4);
		assert.deepEqual(rn.toString(), '1/4');
		rn.setNumeratorNoReduce(2);
		assert.deepEqual(rn.toString(), '2/4');
		rn.reduce();
		assert.deepEqual(rn.toString(), '1/2');
	}
);

it('Reduce an unreduced positive fraction',
	function () {
		var rn = new RationalNumber(1,-4);
		assert.deepEqual(rn.toString(), '-1/4');
		rn.setNumeratorAbsoluteValueNoReduce(2);
		assert.deepEqual(rn.toString(), '-2/4');
		rn.reduce();
		assert.deepEqual(rn.toString(), '-1/2');
	}
);

it('Reduce an large fraction',
	function () {
		var topval = 2 * 3 * 5 * 7 * 11 * 13;
		var botval = 3 * 7 * 13 * 29 * 31;
		var rn = new RationalNumber();
		rn.setValueNoReduce(topval, botval);
		assert.deepEqual(rn.toString(), topval + '/' + botval);
		rn.reduce();
		assert.deepEqual(Number(rn), topval/botval);
		assert.deepEqual(rn.toString(), (2*5*11) + '/' + (29*31));
	}
);

it('Reduce Infinite number',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5, 0);
		assert.deepEqual(rn.toString(), '5/0');
		rn.reduce();
		assert.deepEqual(rn.toString(), '1/0');
	}
);

it('Reduce NaN number',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(0, 0);
		assert.deepEqual(rn.toString(), '0/0');
		rn.reduce();
		assert.deepEqual(rn.toString(), '0/0');
	}
);


});
describe('#setValue()', function () {


it('Create a positive value from a single number',
	function () {
		var rn = new RationalNumber();
		rn.setValue(5);
		assert.deepEqual(rn.toString(), '5');
		assert.deepEqual(Number(rn), '5');
	}
);

it('Create a negative value from a single number',
	function () {
		var rn = new RationalNumber();
		rn.setValue(-5);
		assert.deepEqual(rn.toString(), '-5');
		assert.deepEqual(Number(rn), -5);
	}
);

it('Create a positive value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValue(5, 7);
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), 5/7);
	}
);

it('Create a negative value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValue(-5, 7);
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create negative value from two numbers, using denominator to set sign',
	function () {
		var rn = new RationalNumber();
		rn.setValue(5, -7);
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create positive value from two negative numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValue(-5, -7);
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), -5/-7);
	}
);

it('Create positive value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber(5, 7);
		rn.setValue(rn2)
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), 5/7);
	}
);

it('Create negative value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber(-5, 7);
		rn.setValue(rn2)
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create positive value from positive integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('13');
		assert.deepEqual(rn.toString(), '13');
		assert.deepEqual(Number(rn), 13);
	}
);

it('Create negative value from negative integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('-13');
		assert.deepEqual(rn.toString(), '-13');
		assert.deepEqual(Number(rn), -13);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('13/7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('13/7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create negative value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('-13/7');
		assert.deepEqual(rn.toString(), '-13/7');
		assert.deepEqual(Number(rn), -13/7);
	}
);

it('Create negative value from two integer string with negative denominator',
	function () {
		var rn = new RationalNumber();
		rn.setValue('13/-7');
		assert.deepEqual(rn.toString(), '-13/7');
		assert.deepEqual(Number(rn), -13/7);
	}
);

it('Create positive value from two negative integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('-13/-7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create NaN from string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('0/0');
		assert.deepEqual(rn.toString(), '0/0');
		assert.deepEqual(isNaN(Number(rn)), true);
	}
);

it('Create -Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.setValue('-6/0');
		assert.deepEqual(rn.toString(), '-1/0');
		assert.deepEqual(Number(rn), -Infinity);
	}
);


});
describe('#setValueNoReduce() when value does not need to be reduced',
function () {


it('Create a postive value from a single number',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5);
		assert.deepEqual(rn.toString(), '5');
		assert.deepEqual(Number(rn), '5');
	}
);

it('Create a negative value from a single number',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(-5);
		assert.deepEqual(rn.toString(), '-5');
		assert.deepEqual(Number(rn), -5);
	}
);

it('Create a positive value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5, 7);
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), 5/7);
	}
);

it('Create a negative value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(-5, 7);
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create negative value from two numbers, using denominator to set sign',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5, -7);
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create positive value from two negative numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(-5, -7);
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), -5/-7);
	}
);

it('Create positive value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber(5, 7);
		rn.setValueNoReduce(rn2)
		assert.deepEqual(rn.toString(), '5/7');
		assert.deepEqual(Number(rn), 5/7);
	}
);

it('Create negative value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber(-5, 7);
		rn.setValueNoReduce(rn2)
		assert.deepEqual(rn.toString(), '-5/7');
		assert.deepEqual(Number(rn), -5/7);
	}
);

it('Create positive value from positive integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('13');
		assert.deepEqual(rn.toString(), '13');
		assert.deepEqual(Number(rn), 13);
	}
);

it('Create negative value from negative integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-13');
		assert.deepEqual(rn.toString(), '-13');
		assert.deepEqual(Number(rn), -13);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('13/7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('13/7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create negative value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-13/7');
		assert.deepEqual(rn.toString(), '-13/7');
		assert.deepEqual(Number(rn), -13/7);
	}
);

it('Create negative value from two integer string with negative denominator',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('13/-7');
		assert.deepEqual(rn.toString(), '-13/7');
		assert.deepEqual(Number(rn), -13/7);
	}
);

it('Create positive value from two negative integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-13/-7');
		assert.deepEqual(rn.toString(), '13/7');
		assert.deepEqual(Number(rn), 13/7);
	}
);

it('Create NaN from string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('0/0');
		assert.deepEqual(rn.toString(), '0/0');
		assert.deepEqual(isNaN(Number(rn)), true);
	}
);

it('Create -Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-1/0');
		assert.deepEqual(rn.toString(), '-1/0');
		assert.deepEqual(Number(rn), -Infinity);
	}
);


});
describe('#setValueNoReduce() when value needs to be reduced (but isn\'t)',
function () {


it('Create a positive value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5, 10);
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), 5/10);
	}
);

it('Create a negative value from two numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(-5, 10);
		assert.deepEqual(rn.toString(), '-5/10');
		assert.deepEqual(Number(rn), -5/10);
	}
);

it('Create negative value from two numbers, using denominator to set sign',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(5, -10);
		assert.deepEqual(rn.toString(), '-5/10');
		assert.deepEqual(Number(rn), -5/10);
	}
);

it('Create positive value from two negative numbers',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce(-5, -10);
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), -5/-10);
	}
);

it('Create positive value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber();
		rn2.setValueNoReduce(5, 10);
		rn.setValueNoReduce(rn2)
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), 5/10);
	}
);

it('Create negative value from another rational number',
	function () {
		var rn = new RationalNumber();
		var rn2 = new RationalNumber();
		rn2.setValueNoReduce(-5, 10);
		rn.setValueNoReduce(rn2)
		assert.deepEqual(rn.toString(), '-5/10');
		assert.deepEqual(Number(rn), -5/10);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('5/10');
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), 5/10);
	}
);

it('Create positive value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('5/10');
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), 5/10);
	}
);

it('Create negative value from two integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-5/10');
		assert.deepEqual(rn.toString(), '-5/10');
		assert.deepEqual(Number(rn), -5/10);
	}
);

it('Create negative value from two integer string with negative denominator',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('5/-10');
		assert.deepEqual(rn.toString(), '-5/10');
		assert.deepEqual(Number(rn), -5/10);
	}
);

it('Create positive value from two negative integer string',
	function () {
		var rn = new RationalNumber();
		rn.setValueNoReduce('-5/-10');
		assert.deepEqual(rn.toString(), '5/10');
		assert.deepEqual(Number(rn), 5/10);
	}
);


});
describe('#isSafe() -- check if number is affected by overflow', function () {


it('Check safe number',
	function () {
		var rn = new RationalNumber(1, 5);
		assert.deepEqual(rn.isSafe(), true);
	}
);

it('Check unsafe numerator',
	function () {
		var rn = new RationalNumber();
		rn.setNumeratorNoReduce(Math.pow(2, 53));
		assert.deepEqual(rn.isSafe(), false);
	}
);

it('Check unsafe denominator',
	function () {
		var rn = new RationalNumber();
		rn.setDenominatorAbsoluteValueNoReduce(Math.pow(2, 53));
		assert.deepEqual(rn.isSafe(), false);
	}
);

it('Check invalid numerator',
	function () {
		var rn = new RationalNumber();
		rn._n = -1;
		assert.deepEqual(rn.isSafe(), false);
	}
);

it('Check invalid denominator',
	function () {
		var rn = new RationalNumber();
		rn._d = -1;
		assert.deepEqual(rn.isSafe(), false);
	}
);

it('Check NaN',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.isSafe(), true);
	}
);

it('Check Infinity',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(rn.isSafe(), true);
	}
);

it('Check -Infinity',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(rn.isSafe(), true);
	}
);


});
describe('#checkOverflow() -- throw error if number has overflow', function () {


it('Check valid number',
	function () {
		var rn = new RationalNumber(1, 6);
		assert.deepEqual(rn.checkOverflow(), false);
	}
);

it('Check invalid number',
	function () {
		var rn = new RationalNumber(1,Math.pow(2, 53));
		assert.throws(function () {rn.checkOverflow()}, Error);
	}
);


});
describe('#isValid() -- check if safe, finite and not NaN', function () {


it('Check valid number',
	function () {
		var rn = new RationalNumber(1, 6);
		assert.deepEqual(rn.isValid(), true);
	}
);

it('Check NaN number',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.isValid(), false);
	}
);

it('Check Infinity number',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(rn.isValid(), false);
	}
);

it('Check -Infinity number',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(rn.isValid(), false);
	}
);

it('Check overflowing number',
	function () {
		var rn = new RationalNumber(1,Math.pow(2, 53));
		assert.deepEqual(rn.isValid(), false);
	}
);


});
describe('#checkOverflowOn()/#checkOverflowOff', function () {


it('Turn on automatic overflow check',
	function () {
		var rn = new RationalNumber();
		rn.checkOverflowOn();
		assert.throws(function () {rn.setValue(Math.pow(2, 53))}, Error);
	}
);

it('Turn off automatic overflow check',
	function () {
		var rn = new RationalNumber();
		rn.checkOverflowOn();
		assert.throws(function () {rn.setValue(Math.pow(2, 53))}, Error);
		rn.setValue(1);
		rn.checkOverflowOff();
		assert.doesNotThrow(function () {rn.setValue(Math.pow(2, 53))}, Error);
	}
);


});
});


describe('RationalNumber export functions', function() {
describe('Create numbers via Number(), .valueOf(), .toFloat()  or .toNumber()',
function () {


it('Create positive integer',
	function () {
		var rn = new RationalNumber(11);
		assert.deepEqual(Number(rn), 11);
		assert.deepEqual(rn.toNumber(), 11);
		assert.deepEqual(rn.toFloat(), 11);
		assert.deepEqual(rn.valueOf(), 11);
	}
);

it('Create negative integer',
	function () {
		var rn = new RationalNumber(-11);
		assert.deepEqual(Number(rn), -11);
		assert.deepEqual(rn.toNumber(), -11);
		assert.deepEqual(rn.toFloat(), -11);
		assert.deepEqual(rn.valueOf(), -11);
	}
);

it('Create positive fraction',
	function () {
		var rn = new RationalNumber(11, 13);
		assert.deepEqual(Number(rn), 11/13);
		assert.deepEqual(rn.toNumber(), 11/13);
		assert.deepEqual(rn.toFloat(), 11/13);
		assert.deepEqual(rn.valueOf(), 11/13);
	}
);

it('Create negative fraction',
	function () {
		var rn = new RationalNumber(-11, 13);
		assert.deepEqual(Number(rn), -11/13);
		assert.deepEqual(rn.toNumber(), -11/13);
		assert.deepEqual(rn.toFloat(), -11/13);
		assert.deepEqual(rn.valueOf(), -11/13);
	}
);

it('Create Infinity',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(Number(rn), Infinity);
		assert.deepEqual(rn.toNumber(), Infinity);
		assert.deepEqual(rn.toFloat(), Infinity);
		assert.deepEqual(rn.valueOf(), Infinity);
	}
);

it('Create -Infinity',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(Number(rn), -Infinity);
		assert.deepEqual(rn.toNumber(), -Infinity);
		assert.deepEqual(rn.toFloat(), -Infinity);
		assert.deepEqual(rn.valueOf(), -Infinity);
	}
);

it('Create NaN',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(isNaN(Number(rn)), true);
		assert.deepEqual(isNaN(rn.toNumber()), true);
		assert.deepEqual(isNaN(rn.toFloat()), true);
		assert.deepEqual(isNaN(rn.valueOf()), true);
	}
);


});
describe('Implicit use of .valueOf() for mathematical operations', function() {


it('Add two rational numbers as floating point numbers',
	function () {
		var rn1 = new RationalNumber(1, 3);
		var rn2 = new RationalNumber(2, 3);
		assert.deepEqual(rn1 + rn2, 1/3 + 2/3);
	}
);

it('Subtract two rational numbers as floating point numbers',
	function () {
		var rn1 = new RationalNumber(1, 3);
		var rn2 = new RationalNumber(2, 3);
		assert.deepEqual(rn1 - rn2, 1/3 - 2/3);
	}
);

it('Multiply two rational numbers as floating point numbers',
	function () {
		var rn1 = new RationalNumber(1, 3);
		var rn2 = new RationalNumber(2, 3);
		assert.deepEqual(rn1 * rn2, 1/3 * 2/3);
	}
);

it('Divide two rational numbers as floating point numbers',
	function () {
		var rn1 = new RationalNumber(1, 3);
		var rn2 = new RationalNumber(2, 3);
		assert.deepEqual(rn1 / rn2, (1/3) / (2/3));
	}
);


});
describe('Create strings via String(), .toString()', function () {


it('Create positive integer string',
	function () {
		var rn = new RationalNumber(11);
		assert.deepEqual(String(rn), '11');
		assert.deepEqual(rn.toString(), '11');
	}
);

it('Create negative integer string',
	function () {
		var rn = new RationalNumber(-11);
		assert.deepEqual(String(rn), '-11');
		assert.deepEqual(rn.toString(), '-11');
	}
);

it('Create positive fraction string',
	function () {
		var rn = new RationalNumber(11, 13);
		assert.deepEqual(String(rn), '11/13');
		assert.deepEqual(rn.toString(), '11/13');
	}
);

it('Create negative fraction string',
	function () {
		var rn = new RationalNumber(-11, 13);
		assert.deepEqual(String(rn), '-11/13');
		assert.deepEqual(rn.toString(), '-11/13');
	}
);

it('Create Infinity string',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(rn.toString(), '1/0');
	}
);

it('Create -Infinity string',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(String(rn), '-1/0');
		assert.deepEqual(rn.toString(), '-1/0');
	}
);

it('Create NaN string',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(String(rn), '0/0');
		assert.deepEqual(rn.toString(), '0/0');
	}
);


});
describe('Mixed fractions', function () {


it('Create positive mixed fraction',
	function () {
		var rn = new RationalNumber(3, 2);
		assert.deepEqual(rn.toStringMixed(), '1+1/2');
	}
);

it('Create negative mixed fraction',
	function () {
		var rn = new RationalNumber(-3, 2);
		assert.deepEqual(rn.toStringMixed(), '-1-1/2');
	}
);

it('Create mixed fraction with separating space',
	function () {
		var rn = new RationalNumber(3, 2);
		assert.deepEqual(rn.toStringMixed(' '), '1 1/2');
	}
);

it('Create negative mixed fraction with separating space',
	function () {
		var rn = new RationalNumber(-3, 2);
		assert.deepEqual(rn.toStringMixed(' '), '-1 1/2');
	}
);

it('Create mixed fraction with separating underscore',
	function () {
		var rn = new RationalNumber(3, 2);
		assert.deepEqual(rn.toStringMixed('_'), '1_1/2');
	}
);

it('Create negative mixed fraction with separating underscore',
	function () {
		var rn = new RationalNumber(-3, 2);
		assert.deepEqual(rn.toStringMixed('_'), '-1_1/2');
	}
);

it('Create mixed fraction with parentheses',
	function () {
		var rn = new RationalNumber(-3, 2);
		assert.deepEqual(rn.toStringMixed(',', ',', '(', ')'), '(-1,1/2)');
	}
);

it('Create mixed fraction with parentheses and negative sign on fraction',
	function () {
		var rn = new RationalNumber(-3, 2);
		assert.deepEqual(rn.toStringMixed(',', ',-', '(', ')'), '(-1,-1/2)');
	}
);

it('Create mixed fraction Infinity ',
	function () {
		var rn = new RationalNumber(1, 0);
		assert.deepEqual(rn.toStringMixed(' '), 'Infinity');
	}
);

it('Create mixed fraction -Infinity ',
	function () {
		var rn = new RationalNumber(-1, 0);
		assert.deepEqual(rn.toStringMixed(' '), '-Infinity');
	}
);

it('Create mixed fraction NaN ',
	function () {
		var rn = new RationalNumber(0, 0);
		assert.deepEqual(rn.toStringMixed(' '), 'NaN');
	}
);


});
describe('Converting to JSON string', function () {


it('Create positive number JSON string',
	function () {
		var rn = new RationalNumber(7, 6);
		assert.deepEqual(rn.toJSON(), '{"n":7, "d":6}');
	}
);

it('Create negative number JSON string',
	function () {
		var rn = new RationalNumber(-7, 6);
		assert.deepEqual(rn.toJSON(), '{"n":-7, "d":6}');
	}
);

it('Create negative zero JSON string',
	function () {
		var rn = new RationalNumber();
		rn.setSign('-');
		assert.deepEqual(rn.toJSON(), '{"n":-0}');
	}
);

it('Create negative zero with unreduced denominator JSON string',
	function () {
		var rn = new RationalNumber();
		rn.setDenominatorAbsoluteValueNoReduce(77);
		rn.setSign('-');
		assert.deepEqual(rn.toJSON(), '{"n":-0, "d":77}');
	}
);

it('Create JSON string with different property names',
	function () {
		var rn = new RationalNumber(7, 6);
		assert.deepEqual(rn.toJSON('numerator', 'denominator'),
			'{"numerator":7, "denominator":6}');
	}
);


});
describe('#toFloatJSON', function () {


it('Create JSON string with fractional remainder',
	function () {
		var rn = new RationalNumber(7, 2);
		assert.deepEqual(rn.toFloatJSON(),
			'{"f":3.5, "n":1, "d":2}');
	}
);

it('Create JSON string with fractional remainder for negative value',
	function () {
		var rn = new RationalNumber(-11, 5);
		assert.deepEqual(rn.toFloatJSON(),
			'{"f":-2.2, "n":1, "d":5}');
	}
);

it('Create JSON string with fractional remainder being 0',
	function () {
		var rn = new RationalNumber(100);
		assert.deepEqual(rn.toFloatJSON(),
			'{"f":100}');
	}
);

it('Set property names',
	function () {
		var rn = new RationalNumber(9, 4);
		assert.deepEqual(rn.toFloatJSON('float', 'numerator', 'denominator'),
			'{"float":2.25, "numerator":1, "denominator":4}');
	}
);


});
describe('#toFloatArray', function () {


it('Create Float array fractional remainders',
	function () {
		var rn = new RationalNumber(7, 2);
		var array = rn.toFloatArray();
		assert.deepEqual(array[0], 3.5);
		assert.deepEqual(array[1], 1);
		assert.deepEqual(array[2], 2);
		assert.deepEqual(array.length, 3);
	}
);

it('Create Float array for negative number',
	function () {
		var rn = new RationalNumber(-11, 5);
		var array = rn.toFloatArray();
		assert.deepEqual(array[0], -2.2);
		assert.deepEqual(array[1], 1);
		assert.deepEqual(array[2], 5);
		assert.deepEqual(array.length, 3);
	}
);

it('Create Float array for integer, brief form',
	function () {
		var rn = new RationalNumber(100);
		var array = rn.toFloatArray();
		assert.deepEqual(array[0], 100);
		assert.deepEqual(array.length, 1);
	}
);

it('Create Float array for integer, long form',
	function () {
		var rn = new RationalNumber(100);
		var array = rn.toFloatArray(true);
		assert.deepEqual(array[0], 100);
		assert.deepEqual(array[1], 0);
		assert.deepEqual(array[2], 1);
		assert.deepEqual(array.length, 3);
	}
);


});
});


describe('RationalNumber import functions', function() {
describe('#fromString()', function () {


it('Create positive integer from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('5');
		assert.deepEqual(String(rn), '5');
		assert.deepEqual(Number(rn), 5);
	}
);

it('Create negative integer from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-5');
		assert.deepEqual(String(rn), '-5');
		assert.deepEqual(Number(rn), -5);
	}
);

it('Create positive rational number from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('5/13');
		assert.deepEqual(String(rn), '5/13');
		assert.deepEqual(Number(rn), 5/13);
	}
);

it('Create negative rational number from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-5/13');
		assert.deepEqual(String(rn), '-5/13');
		assert.deepEqual(Number(rn), -5/13);
	}
);

it('Create negative rational number from poorly formatted string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('5/-13');
		assert.deepEqual(String(rn), '-5/13');
		assert.deepEqual(Number(rn), -5/13);
	}
);

it('Create NaN from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('NaN');
		assert.deepEqual(String(rn), '0/0');
		assert.deepEqual(isNaN(Number(rn)), true);
	}
);

it('Create Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('Infinity');
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Create negative Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-Infinity');
		assert.deepEqual(String(rn), '-1/0');
		assert.deepEqual(Number(rn), -Infinity);
	}
);

it('Create positive value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('1+1/16');
		assert.deepEqual(String(rn), '17/16');
		assert.deepEqual(Number(rn), 17/16);
	}
);

it('Create negative value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-1-1/16');
		assert.deepEqual(String(rn), '-17/16');
		assert.deepEqual(Number(rn), -17/16);
	}
);

it('Create negative value from alternate mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-1+1/16');
		assert.deepEqual(String(rn), '-17/16');
		assert.deepEqual(Number(rn), -17/16);
	}
);

it('Create negative value from spaced mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromString('-1 1/16');
		assert.deepEqual(String(rn), '-17/16');
		assert.deepEqual(Number(rn), -17/16);
	}
);


});
describe('#fromStringNoReduce()', function () {


it('Create positive unreduced rational number from string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('10/20');
		assert.deepEqual(String(rn), '10/20');
		assert.deepEqual(Number(rn), 10/20);
	}
);

it('Create negative unreduced rational number from string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('-10/20');
		assert.deepEqual(String(rn), '-10/20');
		assert.deepEqual(Number(rn), -10/20);
	}
);

it('Create negative unreduced rational number from poorly formatted string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('10/-20');
		assert.deepEqual(String(rn), '-10/20');
		assert.deepEqual(Number(rn), -10/20);
	}
);

it('Create NaN from string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('NaN');
		assert.deepEqual(String(rn), '0/0');
		assert.deepEqual(isNaN(Number(rn)), true);
	}
);

it('Create Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('Infinity');
		assert.deepEqual(String(rn), '1/0');
		assert.deepEqual(Number(rn), Infinity);
	}
);

it('Create negative Infinity from string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('-Infinity');
		assert.deepEqual(String(rn), '-1/0');
		assert.deepEqual(Number(rn), -Infinity);
	}
);

it('Create positive unreduced value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('1+2/16');
		assert.deepEqual(String(rn), '18/16');
		assert.deepEqual(Number(rn), 18/16);
	}
);

it('Create negative unreduced value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('-1-2/16');
		assert.deepEqual(String(rn), '-18/16');
		assert.deepEqual(Number(rn), -18/16);
	}
);

it('Create negative unreduced value from alternate mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('-1+2/16');
		assert.deepEqual(String(rn), '-18/16');
		assert.deepEqual(Number(rn), -18/16);
	}
);

it('Create negative unreduced value from spaced mixed fraction string',
	function () {
		var rn = new RationalNumber();
		rn.fromStringNoReduce('-1 2/16');
		assert.deepEqual(String(rn), '-18/16');
		assert.deepEqual(Number(rn), -18/16);
	}
);


});
describe('#parseString()', function () {


it('Create positive integer from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('5');
		assert.deepEqual(String(rn2), '5');
		assert.deepEqual(Number(rn2), 5);
	}
);

it('Create negative integer from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-5');
		assert.deepEqual(String(rn2), '-5');
		assert.deepEqual(Number(rn2), -5);
	}
);

it('Create positive rational number from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('5/13');
		assert.deepEqual(String(rn2), '5/13');
		assert.deepEqual(Number(rn2), 5/13);
	}
);

it('Create negative rational number from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-5/13');
		assert.deepEqual(String(rn2), '-5/13');
		assert.deepEqual(Number(rn2), -5/13);
	}
);

it('Create negative rational number from poorly formatted string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('5/-13');
		assert.deepEqual(String(rn2), '-5/13');
		assert.deepEqual(Number(rn2), -5/13);
	}
);

it('Create NaN from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('NaN');
		assert.deepEqual(String(rn2), '0/0');
		assert.deepEqual(isNaN(Number(rn2)), true);
	}
);

it('Create Infinity from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('Infinity');
		assert.deepEqual(String(rn2), '1/0');
		assert.deepEqual(Number(rn2), Infinity);
	}
);

it('Create negative Infinity from string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-Infinity');
		assert.deepEqual(String(rn2), '-1/0');
		assert.deepEqual(Number(rn2), -Infinity);
	}
);

it('Create positive value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('1+1/16');
		assert.deepEqual(String(rn2), '17/16');
		assert.deepEqual(Number(rn2), 17/16);
	}
);

it('Create negative value from mixed fraction string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-1-1/16');
		assert.deepEqual(String(rn2), '-17/16');
		assert.deepEqual(Number(rn2), -17/16);
	}
);

it('Create negative value from alternate mixed fraction string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-1+1/16');
		assert.deepEqual(String(rn2), '-17/16');
		assert.deepEqual(Number(rn2), -17/16);
	}
);

it('Create negative value from spaced mixed fraction string',
	function () {
		var rn = new RationalNumber();
		var rn2 = rn.parseString('-1 1/16');
		assert.deepEqual(String(rn2), '-17/16');
		assert.deepEqual(Number(rn2), -17/16);
	}
);


});
});
describe('Cloning and copying RationalNumbers', function() {
describe('#clone()', function () {


it('Create a clone of a rational number',
	function () {
		var rn = new RationalNumber(4, 6);
		var rn2 = rn.clone();
		var rn3 = rn;
		assert.deepEqual(String(rn), '2/3');
		assert.deepEqual(Number(rn), 2/3);
		assert.deepEqual(String(rn2), '2/3');
		assert.deepEqual(Number(rn2), 2/3);
		rn.setValue(1,2);
		assert.deepEqual(String(rn), '1/2');
		assert.deepEqual(Number(rn), 1/2);
		assert.deepEqual(String(rn2), '2/3');
		assert.deepEqual(Number(rn2), 2/3);
		assert.deepEqual(rn === rn2, false);
		assert.deepEqual(rn === rn3, true);
	}
);


});
describe('#copy()', function () {


it('Copy the contents of another RationalNumber',
	function () {
		var rn = new RationalNumber(4, 6);
		var rn2 = new RationalNumber();
		var rn3 = rn2;
		rn2.copy(rn);

		assert.deepEqual(String(rn), '2/3');
		assert.deepEqual(Number(rn), 2/3);
		assert.deepEqual(String(rn2), '2/3');
		assert.deepEqual(Number(rn2), 2/3);
		assert.deepEqual(rn === rn2, false);
		assert.deepEqual(rn2 === rn3, true);
		rn.setValue(1,2);
		assert.deepEqual(String(rn), '1/2');
		assert.deepEqual(Number(rn), 1/2);
		assert.deepEqual(String(rn2), '2/3');
		assert.deepEqual(Number(rn2), 2/3);
	}
);


});
});
describe('Greatest Common Divisor tests', function() {
describe('#gcdRecursive()', function () {


it('Various GCD tests done recursively',
	function () {
		var rn = new RationalNumber();
		assert.deepEqual(rn.gcdRecursive(2*3*5*7, 5*7*11*13), 35);
		assert.deepEqual(rn.gcdRecursive(-2*3*5*7, 5*7*11*13), 35);
		assert.deepEqual(rn.gcdRecursive(2*3*5*7, -5*7*11*13), 35);
		assert.deepEqual(rn.gcdRecursive(-2*3*5*7, -5*7*11*13), 35);
		assert.deepEqual(rn.gcdRecursive(2*3, 5*7*11*13), 1);
		assert.deepEqual(rn.gcdRecursive(-2*3, 5*7*11*13), 1);
		assert.deepEqual(rn.gcdRecursive(2*3, -5*7*11*13), 1);
		assert.deepEqual(rn.gcdRecursive(-2*3, -5*7*11*13), 1);
		assert.deepEqual(rn.gcdRecursive(0, 5*7*11*13), 5*7*11*13);
	}
);


});
describe('#gcdIterative()', function () {


it('Various GDC tests done iteratively',
	function () {
		var rn = new RationalNumber();
		assert.deepEqual(rn.gcdIterative(2*3*5*7, 5*7*11*13), 35);
		assert.deepEqual(rn.gcdIterative(-2*3*5*7, 5*7*11*13), 35);
		assert.deepEqual(rn.gcdIterative(2*3*5*7, -5*7*11*13), 35);
		assert.deepEqual(rn.gcdIterative(-2*3*5*7, -5*7*11*13), 35);
		assert.deepEqual(rn.gcdIterative(2*3, 5*7*11*13), 1);
		assert.deepEqual(rn.gcdIterative(-2*3, 5*7*11*13), 1);
		assert.deepEqual(rn.gcdIterative(2*3, -5*7*11*13), 1);
		assert.deepEqual(rn.gcdIterative(-2*3, -5*7*11*13), 1);
		assert.deepEqual(rn.gcdIterative(0, 5*7*11*13), 5*7*11*13);
	}
);


});
});
describe('Comparison tests', function() {
describe('#isEqual()', function () {


it('Compare two equal rational numbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(2,4);
		assert.deepEqual(rn1.isEqual(rn2), true);
	}
);

it('Compare two unequal rational numbers',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber(2,5);
		assert.deepEqual(rn1.isEqual(rn2), false);
	}
);

it('Compare two equal rational numbers, one which is not reduced',
	function () {
		var rn1 = new RationalNumber(1,2);
		var rn2 = new RationalNumber();
		rn2.setValueNoReduce(2, 4);
		assert.deepEqual(rn1.isEqual(rn2), false);
	}
);

it('Compare rational number to a string',
	function () {
		var rn = new RationalNumber(1,2);
		assert.deepEqual(rn.isEqual('1/2'), true);
		assert.deepEqual(rn.isEqual('3/2'), false);
	}
);

it('Compare rational number to an integer',
	function () {
		var rn = new RationalNumber(3,1);
		assert.deepEqual(rn.isEqual(3), true);
	}
);

it('Compare rational number to a mixed fraction string',
	function () {
		var rn = new RationalNumber(3,2);
		assert.deepEqual(rn.isEqual('1+1/2'), true);
	}
);


});
describe('#isPositive()', function () {


it('Test if positive number is positive',
	function () {
		var rn = new RationalNumber(3,2);
		assert.deepEqual(rn.isPositive(), true);
	}
);

it('Test if negative number is positive',
	function () {
		var rn = new RationalNumber(-3,2);
		assert.deepEqual(rn.isPositive(), false);
	}
);

it('Test if zero is positive',
	function () {
		var rn = new RationalNumber(0);
		assert.deepEqual(rn.isPositive(), false);
	}
);


});
describe('#isNegative()', function () {


it('Test if positive number is negative',
	function () {
		var rn = new RationalNumber(3,2);
		assert.deepEqual(rn.isNegative(), false);
	}
);

it('Test if negative number is negative',
	function () {
		var rn = new RationalNumber(-3,2);
		assert.deepEqual(rn.isNegative(), true);
	}
);

it('Test if zero is negative',
	function () {
		var rn = new RationalNumber(0);
		assert.deepEqual(rn.isNegative(), false);
	}
);


});
describe('#isInteger()', function () {


it('Test if rational number with denominator == 1  is an integer',
	function () {
		var rn = new RationalNumber(3,1);
		assert.deepEqual(rn.isInteger(), true);
	}
);

it('Test if rational number with denominator != 1  is an integer',
	function () {
		var rn = new RationalNumber(3,2);
		assert.deepEqual(rn.isInteger(), false);
	}
);


});
});





rational-number
===============

RationalNumber is an implementation for fractions in JavaScript
consisting of two integers.  Mathematical operations such as addition,
subtraction, multiplication and division are provided.  Division
by zero is allowed and should produce correct mathematical results
according to the use of Infinity and NaN in JavaScript.

Fractions are maintained by default in reduced form.  For example,
setting the value to 2/4 will automatically be reduced (simplified)
to 1/2. However functions forcing non-reduced fractions are
provided, particularly to avoid speed issues in intermediate
calculations (although the current mathematical functions will reduce
the fraction after every calculation to minimize the chance of overflow).

This implementation of rational numbers limits the numerator and
denominator to the range from 0 to 2^53&ndash;1 plus a sign.  Optional
overflow detection is included, with the methods checkOverflowOn()
and CheckOverflowOff() turning this feature on and off.


## Using in node applications

The RationalNumber module can be installed globally for use in
[node](http://nodejs.org) with the command:

``` bash
$ npm install -g rational-number
```

If you want only to use locally in a node project, then install as a package
dependency with the command:

``` bash
$ npm install --save rational-number
```

Here is an example of loading the module into a node script and adding two
rational numbers together:

``` javascript
var RationalNumber = require('rational-number');
    
var rn1 = new RationalNumber(4, 5);
var rn2 = new RationalNumber('26/4');
var rn3 = rn1.add(rn2);
console.log(rn1.toString(),"+",rn2.toString(),"=",rn3.toString());
console.log(rn1.toStringMixed("_"),"+",rn2.toStringMixed("_"),
   "=",rn3.toStringMixed("_"));
console.log(rn1.valueOf()+" + "+rn2.valueOf()+" = "+rn3.valueOf());
```

The above code should output the following text to the console:

``` text
4/5 + 13/2 = 73/10
4/5 + 6_1/2 = 7_3/10
0.8 + 6.5 = 7.3
```


## Using in web browsers

The JavaScript files for RationalNumber can also be used within
a webpage by including these two files:

``` HTML
<script src="RationalNumber-base.js"></script>
<script src="RationalNumber-math.js"></script>
```

The first file (RationalNumber-base.js) is required, while the
second one containing mathematical functions (add, subtract, etc.)
is optional.  The lib directory contains a makefile with example
commands to generate minified versions of the programs files.
Visit the [RationalNumber homepage](http://rationalnumber.sapp.org)
to try an online demo of rational number calculations running within
a webpage.


## Testing

Input and output from the code can be tested using
[mocha](http://mochajs.org) and the JavaScript files in the `test`
directory.  To test from a node installation:

``` bash
$ npm install   # to download mocha dependency if necessary
$ npm test
```


## Website

The website for RationalNumber documentation is 
[http://rationalnumber.sapp.org](http://rationalnumber.sapp.org).

And the corresponding GitHub repository is
[https://github.com/craigsapp/RationalNumber](https://github.com/craigsapp/RationalNumber).


## List of RationalNumber methods

Click on the method name to view documentation for that function.

* [**getNumerator**](http://rationalnumber.sapp.org/#getNumerator) &mdash; Return the numerator, including sign.
* [**getNumeratorAbsoluteValue**](http://rationalnumber.sapp.org/#getNumeratorAbsoluteValue) &mdash; Return the numerator, excluding sign.
* [**setNumerator**](http://rationalnumber.sapp.org/#setNumerator) &mdash; Set the numerator, reducing fraction if necessary.
* [**setNumeratorNoReduce**](http://rationalnumber.sapp.org/#setNumeratorNoReduce) &mdash; Set the numerator but don't reduce fraction.
* [**setNumeratorAbsoluteValueNoReduce**](http://rationalnumber.sapp.org/#setNumeratorAbsoluteValueNoReduce) &mdash; Sets numerator without changing sign or reducing.
* [**getDenominator**](http://rationalnumber.sapp.org/#getDenominator) &mdash; Return the denominator (always non-negative).
* [**setDenominatorAbsoluteValue**](http://rationalnumber.sapp.org/#setDenominatorAbsoluteValue) &mdash; Set the denominator (sign ignored).
* [**setDenominatorAbsoluteValueNoReduce**](http://rationalnumber.sapp.org/#setDenominatorAbsoluteValueNoReduce) &mdash; Set denominator, not trying to reduce the fraction.
* [**setValue**](http://rationalnumber.sapp.org/#setValue) &mdash; Set the numerator and denominator (sign can be on either or both).
* [**setValueNoReduce**](http://rationalnumber.sapp.org/#setValueNoReduce) &mdash; Set the numerator and denominator, but don't try to reduce.
* [**setSign**](http://rationalnumber.sapp.org/#setSign) &mdash; Set the sign to positive or negative.
* [**getSign**](http://rationalnumber.sapp.org/#getSign) &mdash; Returns &ndash;1 if negative, +1 otherwise.
* [**reduce**](http://rationalnumber.sapp.org/#reduce) &mdash; Reduce the fraction if needed.
* [**toFloat**](http://rationalnumber.sapp.org/#toFloat) &mdash; Alias for valueOf method.
* [**toNumber**](http://rationalnumber.sapp.org/#toNumber) &mdash; Alias for valueOf method.
* [**valueOf**](http://rationalnumber.sapp.org/#valueOf) &mdash; Return a floating-point copy of the rational number.
* [**toString**](http://rationalnumber.sapp.org/#toString) &mdash; Convert to a string in the form "n/d".
* [**toStringMixed**](http://rationalnumber.sapp.org/#toStringMixed) &mdash; Return a string as a mixed fraction.
* [**toJSON**](http://rationalnumber.sapp.org/#toJSON) &mdash; Create a JSON string.
* [**fromString**](http://rationalnumber.sapp.org/#fromString) &mdash; Read number from string.
* [**fromStringNoReduce**](http://rationalnumber.sapp.org/#fromStringNoReduce) &mdash; Read number from string without reducing.
* [**parseString**](http://rationalnumber.sapp.org/#parseString) &mdash; Return a new RationalNumber rather than changing current object.
* [**clone**](http://rationalnumber.sapp.org/#clone) &mdash; Make a new copy of the RationalNumber.
* [**copy**](http://rationalnumber.sapp.org/#copy) &mdash; Copy the value of another RationalNumber.
* [**isSafe**](http://rationalnumber.sapp.org/#isSafe) &mdash; Numerator and denominator both less than 2<sup>53</sup>.
* [**isNaN**](http://rationalnumber.sapp.org/#isNaN) &mdash; Returns true if equal to 0/0.
* [**isInfinite**](http://rationalnumber.sapp.org/#isInfinite) &mdash; Returns true if denominator is 0 and numerator is not.
* [**isValid**](http://rationalnumber.sapp.org/#isValid) &mdash; Returns true if safe, finite and not NaN.
* [**checkOverflow**](http://rationalnumber.sapp.org/#checkOverflow) &mdash; Same as isSafe(), but throws an error.
* [**checkOverflowOn**](http://rationalnumber.sapp.org/#checkOverflowOn) &mdash; Force validity check for overflows.
* [**checkOverflowOff**](http://rationalnumber.sapp.org/#checkOverflowOff) &mdash; Turn off automatic overflow validity checks.
* [**isEqual**](http://rationalnumber.sapp.org/#isEqual) &mdash; Return true if sign, numerator and denominator of two numbers are identical.
* [**isPositive**](http://rationalnumber.sapp.org/#isPositive) &mdash; Returns true if larger than 0.
* [**isNegative**](http://rationalnumber.sapp.org/#isNegative) &mdash; Returns true if smaller than 0.
* [**isInteger**](http://rationalnumber.sapp.org/#isInteger) &mdash; Returns true if denominator is 1.

Additional methods provided in RationalNumber-math.js:

* [**abs**](http://rationalnumber.sapp.org/#abs) &mdash; Return non-negative copy of the rational number.
* [**invert**](http://rationalnumber.sapp.org/#invert) &mdash; Switch the numerator and denominator.
* [**inversion**](http://rationalnumber.sapp.org/#inversion) &mdash; Alias for getInversion method.
* [**getInversion**](http://rationalnumber.sapp.org/#getInversion) &mdash; Return a reciprocal copy of called object.
* [**negate**](http://rationalnumber.sapp.org/#negate) &mdash; Make positive values negative and vice-versa.
* [**negation**](http://rationalnumber.sapp.org/#negation) &mdash; Alias for getNegation method.
* [**getNegation**](http://rationalnumber.sapp.org/#getNegation) &mdash; Return a copy of the object, with sign reversed.
* [**addTo**](http://rationalnumber.sapp.org/#addTo) &mdash; To this RationalNumber, add additional numbers.
* [**add**](http://rationalnumber.sapp.org/#add) &mdash; Similar to addTo(), but returns sum rather than altering contents.
* [**subtractTo**](http://rationalnumber.sapp.org/#subtractTo) &mdash; To this RationalNumber, subtract values.
* [**subtract**](http://rationalnumber.sapp.org/#subtract) &mdash; Similar to subtractTo(), but returns result rather than altering calling object.
* [**multiplyTo**](http://rationalnumber.sapp.org/#multiplyTo) &mdash; To this RationalNumber, multiply values.
* [**multiply**](http://rationalnumber.sapp.org/#multiply) &mdash; Similar to multiplyTo(), but returns result rather than altering calling object.
* [**divideTo**](http://rationalnumber.sapp.org/#divideTo) &mdash; To this RationalNumber, divide values.
* [**divide**](http://rationalnumber.sapp.org/#divide) &mdash; Similar to divideTo(), but returns result rather than altering calling object.




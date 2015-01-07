rational-number
===============

RationalNumber is an implementation for rational numbers in JavaScript
that manages fractions consisting of two integers.  Mathematical
operations such as addition, subtraction, multiplication and division
are provided.  Division by zero is allowed and should produce correct
mathematical results according to the use of Infinity and NaN in
JavaScript.

Fractions are maintained by default in reduced form.  For example,
setting the value to 2/4 will automatically be reduced (simplified)
to 1/2; However, functions for forcing non-reduced fractions are
provided, particularly to avoid speed issues for intermediate
calculations (although the current mathematical functions will reduce
the fraction after every calculation to minimize the chance of overflow).

This implementation limits the numerator and denominator to the
range from 0 to 2^53&ndash;1 plus a sign.  Optional overflow
detection is included, with the methods checkOverflowOn()
and CheckOverflowOff() turning this feature on and off.


## Usage in Node applications

This code can be installed for use in [node](http://nodejs.org) by 
installing globally with the command:

``` bash
$ npm install -g rational-number
```

If you want to install locally in a node project, then install as a package
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


## Browser

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


## Function list

Here is a brief description of the function prototypes provided in 
the RationalNumber class (see the website for more details):

* **setSign** &mdash; Set the sign to positive or negative.
* **getSign** &mdash; Returns +1 if positive, &ndash;1 if negative.
* **getNumerator** &mdash; Return the numerator, including sign.
* **getNumeratorAbsoluteValue** &mdash; Return the numerator, excluding sign.
* **getDenominator** &mdash; Return the denominator (always positive).
* **setNumeratorNoReduce** &mdash; Set the numerator but don't reduce fraction.
* **setNumerator** &mdash; Set the numerator, reducing if necessary.
* **setNumeratorAbsoluteValueNoReduce** &mdash; Sets the numerator, but does not try to reduce or change the sign of the current value.
* **setDenominatorAbsoluteValue** &mdash; Set the denominator (sign ignored).
* **setDenominatorAbsoluveValueNoReduce** &mdash; Set denominator, not trying to reduce.
* **reduce** &mdash; Reduce the fraction to its simplest form if needed.
* **setValue** &mdash; Set the numerator and denominator (sign can be on either or both).
* **setValueNoReduce** &mdash; Set the numerator and denominator, but don't try to reduce.
* **isSafe** &mdash; Check that numerator and denominator are less than 2^53.
* **isNan** &mdash; Returns true if equal to 0/0.
* **isInfinite** &mdash; Returns true denominator is 0 and numerator is not.
* **isValid** &mdash; Returns true if safe, finite and not NaN.
* **checkOverflow** &mdash; Same as isSafe(), but throws an error.
* **checkOverflowOn** &mdash; Force automatic validity checks for overflows.
* **checkOverflowOff** &mdash; Turn off overflow validity checks.
* **toFloat** &mdash; Alias for valueOf().
* **toNumber** &mdash; Alias for valueOf().
* **valueOf** &mdash; Return the floating-point version of fraction.
* **toString** &mdash; Convert to a string in the form "n/d".
* **toStringMixed** &mdash; Return a mixed fraction string.
* **toJSON** &mdash; Create a JSON string.
* **fromString** &mdash; Read number from string.
* **fromStringNoReduce** &mdash; Read number from string without reducing.
* **parseString** &mdash; Same as fromString(), but returns a new RationalNumber rather than changing current object.
* **clone** &mdash; Make a new copy of the RationalNumber.
* **copy** &mdash; Copy internal contents from another RationalNumber.
* **isEqual** &mdash; Returns true if the sign, numerator and denominator are the same as another rational number.
* **isPositive** &mdash; Returns true if larger than 0.
* **isNegative** &mdash; Returns true if smaller than 0.
* **isInteger** &mdash; Returns true if denominator is 1.

Additional methods provided in RationalNumber-math.js:

* **abs** &mdash; Return a copy of the RationalNumber which is non-negative.
* **invert** &mdash; Switch the numerator and denominator.
* **inversion** &mdash; Alias for getInversion().
* **getInversion** &mdash; Return new RationalNumber which is reciprocal of the called object.
* **negate** &mdash; Make positive values negative and vice-versa.
* **negation** &mdash; Alias of getNegation().
* **getNegation** &mdash; Return a copy of the object, with sign reversed.
* **addTo** &mdash; To this RationalNumber, add additional numbers.
* **add** &mdash; Similar to addTo(), but returns sum rather than altering contents.
* **subtractTo** &mdash; To this RationalNumber, subtract values.
* **subtract** &mdash; Similar to subtractTo(), but returns result rather than altering calling object.
* **multiplyTo** &mdash; To this RationalNumber, multiply values.
* **multiply** &mdash; Similar to multiplyTo(), but returns result rather than altering calling object.
* **divideTo** &mdash; To this RationalNumber, divide values.
* **divide** &mdash; Similar to divideTo(), but returns result rather than altering calling object.




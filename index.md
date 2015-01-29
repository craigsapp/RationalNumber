---
layout: index
vim:	  ts=3
---

{% include method-doc.html %}

<!-- BEGINNING OF TEXT --------------------------------------- -->



RationalNumber is an implementation of rational numbers in JavaScript
that manages fractions consisting of two integers.  Mathematical
operations such as addition, subtraction, multiplication and division
are provided.  Division by zero is allowed and should produce correct
mathematical results according to the use of Infinity and NaN in
JavaScript.

Fractions are maintained by default in reduced form.  For example,
setting the value to 2/4 will automatically be reduced (simplified)
to 1/2. However functions for forcing non-reduced fractions are
provided, particularly for avoiding speed issues in intermediate
calculations (although the current mathematical functions will
reduce the fraction after every calculation to minimize the chance
of overflow).

This implementation limits the numerator and denominator to the
range from 0 to 2<sup>53</sup>&ndash;1 plus a sign, and optional
automatic overflow detection is included by running `checkOverflowOn()`,
and `CheckOverflowOff()` turning this feature off.



## RationalNumber demonstration

The following section uses the RationalNumber Javascript code to
dynamically process rational numbers.  Try typing various values
in the four boxes below to create rational numbers.  The reduced
forms of the number will be shown to the right, and example
mathematical calculations using the two rational numbers is given
further below.  Try typing a very large number to see what happens
when any number has an absolute value greater or equal to 2<sup>53</sup>.

{% include rat-test.html %}



## Using in node applications

This code can be installed globally for use in [node](http://nodejs.org) 
with the command:

``` bash
$ npm install -g rational-number
```

If you want to install locally within anode project, then install
as a package dependency with the command:

``` bash
$ npm install --save rational-number
```

Here is an code example which loads the module into a node script,
creates two RationalNumbers (4/5 and 13/2), adds them, and then
prints the result to the console:

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

```
4/5 + 13/2 = 73/10
4/5 + 6_1/2 = 7_3/10
0.8 + 6.5 = 7.3
```



## Using in a web browser

The JavaScript code for rational numbers can also be used stand-alone
within a webpage by including these two files:

``` HTML
<script src="RationalNumber-base.js"></script>
<script src="RationalNumber-math.js"></script>
```

The first file ([RationalNumber-base.js](https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-base.js)) is required, while the
second one containing mathematical functions (add, subtract, etc.)
is optional.  The RationalNumber repository's lib directory contains
a makefile with example commands to generate minified versions of
the JavaScript programs.



## Testing

Input and output from the RationalNumber code can be tested using
[mocha](http://mochajs.org) and the JavaScript files in the `test`
directory of the repository.  To test from a node installation:

``` bash
$ npm install   # to download mocha dependency if necessary
$ npm test
```

If you have [mocha](http://mochajs.org) installed globally in your
search path (such as with "`npm install -g mocha`"), you can also
type one of the following equivalent shell commands to run the code
tests:

``` bash
$ make test
$ mocha test
$ cd test; make
$ cd test; mocha
```


<a name=doc> </a>
## RationalNumber methods

Click on the entries below to view documentation and examples for
each RationalNumber method.  Code examples can be run in the JavaScript
console for this page since it has already loaded a copy of the
RationalNumber code.  Press <span
onclick="(function(e){openAllDocumentation();e.preventDefault()})(event)"><span
class="keyboard-char">ctrl</span>+<span
class="keyboard-char">+/=</span></span> to open all documentation,
<span
onclick="(function(e){closeAllDocumentation();e.preventDefault()})(event)"><span
class="keyboard-char">ctrl</span>+<span
class="keyboard-char">&ndash;</span></span> to close all documentation,
and <span onclick="(function(e){toggleAllExamplesDisplay()})(event)"><span
class="keyboard-char">ctrl</span>+<span
class="keyboard-char">e</span></span> to toggle display of all
examples.

{% include method-list-1.html %}

<span style="height:30px;">&nbsp;</span>

### Additional functions

The following RationalNumber methods provide additional arithmetic
processing from the optional [RationalNumber-math.js](https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js) file:

{% include method-list-2.html %}




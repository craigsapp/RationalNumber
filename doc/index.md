---
layout: index
vim: ts=3
---

<!-- JavaScript function for page ------------------------------ -->

{% include method-doc.html %}

<script src="/javascripts/RationalNumber-0.1.0.min.js"></script>

<script>

document.addEventListener("DOMContentLoaded", function () {
	var docslots = document.querySelectorAll(".docslot");
	var source   = document.getElementById("method-doc").textContent;
	var template = Handlebars.compile(source);
	for (var i=0; i<docslots.length; i++) {
		insertDocumentation(docslots[i], template);
	}
});

</script>

<!-- BEGINNING OF TEXT --------------------------------------- -->

## RationalNumber methods

Here is a list of function prototypes provided by the RationalNumber
class in the file <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-base.js>RationalNumber-base.js</a>.
Click on the function name to view more details. This page includes
a copy of the RationalNumber code, so you can open a console for
this page and try out the examples found in the documentation.

<div class="docslot" id="setSign"><span style="padding-left:20px; font-weight:900">setSign</span> &mdash; Set the sign to positive or negative.</div>
<div class="docslot" id="getSign"><span style="padding-left:20px; font-weight:900">getSign</span> &mdash; Returns -1 if negative, +1 otherwise.</div>
<div class="docslot" id="getNumerator"><span style="padding-left:20px; font-weight:900">getNumerator</span> &mdash; Return the numerator, including sign.</div>
<div class="docslot" id="getNumeratorAbsoluteValue"><span style="padding-left:20px; font-weight:900">getNumeratorAbsoluteValue</span> &mdash; Return the numerator, excluding sign.</div>
<div class="docslot" id="getDenominator"><span style="padding-left:20px; font-weight:900">getDenominator</span> &mdash; Return the denominator (always positive).</div>
<div class="docslot" id="setNumeratorNoReduce"><span style="padding-left:20px; font-weight:900">setNumeratorNoReduce</span> &mdash; Set the numerator but don't reduce fraction.</div>
<div class="docslot" id="setNumerator"><span style="padding-left:20px; font-weight:900">setNumerator</span> &mdash; Set the numerator, reducing if necessary.</div>
<div class="docslot" id="setNumeratorAbsoluteValueNoReduce"><span style="padding-left:20px; font-weight:900">setNumeratorAbsoluteValueNoReduce</span> &mdash; Sets the numerator, but does not try to reduce or change the sign of the current value.</div>
<div class="docslot" id="setDenominatorAbsoluteValue"><span style="padding-left:20px; font-weight:900">setDenominatorAbsoluteValue</span> &mdash; Set the denominator (sign ignored).</div>
<div class="docslot" id="setDenominatorAbsoluveValueNoReduce"><span style="padding-left:20px; font-weight:900">setDenominatorAbsoluveValueNoReduce</span> &mdash; Set denominator, not trying to reduce.</div>
<div class="docslot" id="reduce"><span style="padding-left:20px; font-weight:900">reduce</span> &mdash; Reduce the fraction if needed.</div>
<div class="docslot" id="setValue"><span style="padding-left:20px; font-weight:900">setValue</span> &mdash; Set the numerator and denominator (sign can be on either or both).</div>
<div class="docslot" id="setValueNoReduce"><span style="padding-left:20px; font-weight:900">setValueNoReduce</span> &mdash; Set the numerator and denominator, but don't try to reduce.</div>
<div class="docslot" id="isSafe"><span style="padding-left:20px; font-weight:900">isSafe</span> &mdash; Numerator and denominator less than 2^53.</div>
<div class="docslot" id="isNan"><span style="padding-left:20px; font-weight:900">isNan</span> &mdash; Returns true if equal to 0/0.</div>
<div class="docslot" id="isInfinite"><span style="padding-left:20px; font-weight:900">isInfinite</span> &mdash; Returns true if denominator is 0 and numerator is not.</div>
<div class="docslot" id="isValid"><span style="padding-left:20px; font-weight:900">isValid</span><span style="padding-left:20px; font-weight:900">isValid</span><span style="padding-left:20px; font-weight:900">isValid</span><span style="padding-left:20px; font-weight:900">isValid</span><span style="padding-left:20px; font-weight:900">isValid</span> &mdash; Returns true if safe, finite and not NaN.</div>
<div class="docslot" id="checkOverflow"><span style="padding-left:20px; font-weight:900">checkOverflow</span> &mdash; Same as isSafe(), but throws an error.</div>
<div class="docslot" id="checkOverflowOn"><span style="padding-left:20px; font-weight:900">checkOverflowOn</span> &mdash; Force validity check for overflows.</div>
<div class="docslot" id="checkOverflowOff"><span style="padding-left:20px; font-weight:900">checkOverflowOff</span> &mdash; Turn off overflow validity checks.</div>
<div class="docslot" id="toFloat"><span style="padding-left:20px; font-weight:900">toFloat</span> &mdash; Alias for valueOf().</div>
<div class="docslot" id="toNumber"><span style="padding-left:20px; font-weight:900">toNumber</span> &mdash; Alias for valueOf().</div>
<div class="docslot" id="valueOf"><span style="padding-left:20px; font-weight:900">valueOf</span> &mdash; Return the floating-point version of fraction.</div>
<div class="docslot" id="toString"><span style="padding-left:20px; font-weight:900">toString</span> &mdash; Convert to a string in the form "n/d".</div>
<div class="docslot" id="toStringMixed"><span style="padding-left:20px; font-weight:900">toStringMixed</span> &mdash; Return a string as a mixed fraction.</div>
<div class="docslot" id="toJSON"><span style="padding-left:20px; font-weight:900">toJSON</span> &mdash; Create a JSON string.</div>
<div class="docslot" id="toFloatJSON"><span style="padding-left:20px; font-weight:900">toFloatJSON</span> &mdash; Create a float/fractional remainder JSON string.</div>
<div class="docslot" id="toFloatArray"><span style="padding-left:20px; font-weight:900">toFloatArray</span> &mdash; Create a float/fractional remainder Array.</div>
<div class="docslot" id="fromString"><span style="padding-left:20px; font-weight:900">fromString</span> &mdash; Read number from string.</div>
<div class="docslot" id="fromStringNoReduce"><span style="padding-left:20px; font-weight:900">fromStringNoReduce</span> &mdash; Read number from string without reducing.</div>
<div class="docslot" id="parseString"><span style="padding-left:20px; font-weight:900">parseString</span> &mdash; same as fromString(), but returns a new RationalNumber rather than changing current object.</div>
<div class="docslot" id="clone"><span style="padding-left:20px; font-weight:900">clone</span> &mdash; Make a new copy of the RationalNumber.</div>
<div class="docslot" id="copy"><span style="padding-left:20px; font-weight:900">copy</span> &mdash; Copy internal contents from another RationalNumber.</div>
<div class="docslot" id="isEqual"><span style="padding-left:20px; font-weight:900">isEqual</span> &mdash; returns true if the sign, numerator and denominator are the same as another rational number.</div>
<div class="docslot" id="isPositive"><span style="padding-left:20px; font-weight:900">isPositive</span> &mdash; Returns true if larger than 0.</div>
<div class="docslot" id="isNegative"><span style="padding-left:20px; font-weight:900">isNegative</span> &mdash; Returns true if smaller than 0.</div>
<div class="docslot" id="isInteger"><span style="padding-left:20px; font-weight:900">isInteger</span> &mdash; Returns true if denominator is 1.</div>

<span style="height:30px;">&nbsp;</span>

### Additional functions

The following RationalNumber methods provide additional arithmetic
processing from the optional <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js>RationalNumber-math.js</a> file:

<div class="docslot" id="abs"><span style="padding-left:20px; font-weight:900">abs</span> &mdash; Return non-negative copy of the rational number.</div>
<div class="docslot" id="invert"><span style="padding-left:20px; font-weight:900">invert</span> &mdash; Switch the numerator and denominator.</div>
<div class="docslot" id="inversion"><span style="padding-left:20px; font-weight:900">inversion</span> &mdash; Alias for getInversion method.</div>
<div class="docslot" id="getInversion"><span style="padding-left:20px; font-weight:900">getInversion</span> &mdash; Return a reciprocal copy of called object.</div>
<div class="docslot" id="negate"><span style="padding-left:20px; font-weight:900">negate</span> &mdash; Make positive values negative and vice-versa.</div>
<div class="docslot" id="negation"><span style="padding-left:20px; font-weight:900">negation</span> &mdash; Alias of getNegation method.</div>
<div class="docslot" id="getNegation"><span style="padding-left:20px; font-weight:900">getNegation</span> &mdash; Return a copy of the object, with sign reversed.</div>
<div class="docslot" id="addTo"><span style="padding-left:20px; font-weight:900">addTo</span> &mdash; To this RationalNumber, add additional numbers.</div>
<div class="docslot" id="add"><span style="padding-left:20px; font-weight:900">add</span> &mdash; Similar to addTo(), but returns sum rather than altering contents.</div>
<div class="docslot" id="subtractTo"><span style="padding-left:20px; font-weight:900">subtractTo</span> &mdash; To this RationalNumber, subtract values.</div>
<div class="docslot" id="subtract"><span style="padding-left:20px; font-weight:900">subtract</span> &mdash; Similar to subtractTo(), but returns result rather than altering calling object.</div>
<div class="docslot" id="multiplyTo"><span style="padding-left:20px; font-weight:900">multiplyTo</span> &mdash; To this RationalNumber, multiply values.</div>
<div class="docslot" id="multiply"><span style="padding-left:20px; font-weight:900">multiply</span> &mdash; Similar to multiplyTo(), but returns result rather than altering calling object.</div>
<div class="docslot" id="divideTo"><span style="padding-left:20px; font-weight:900">divideTo</span><span style="padding-left:20px; font-weight:900">divideTo</span><span style="padding-left:20px; font-weight:900">divideTo</span><span style="padding-left:20px; font-weight:900">divideTo</span><span style="padding-left:20px; font-weight:900">divideTo</span> &mdash; To this RationalNumber, divide values.</div>
<div class="docslot" id="divide"><span style="padding-left:20px; font-weight:900">divide</span><span style="padding-left:20px; font-weight:900">divide</span><span style="padding-left:20px; font-weight:900">divide</span><span style="padding-left:20px; font-weight:900">divide</span><span style="padding-left:20px; font-weight:900">divide</span> &mdash; Similar to divideTo(), but returns result rather than altering calling object.</div>




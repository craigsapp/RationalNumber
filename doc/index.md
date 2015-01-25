---
layout: index
vim: ts=3
---

<script src="/javascripts/handlebars-v2.0.0.js"></script>
<script src="/javascripts/aton.min.js"></script>
<style>
summary {
	outline:none;
}
</style>

<!-- Documentation templates for Handlebars ---------------------- -->

{% raw %}

<script id="method-doc" type="text/x-handlebars-template">
	{{#if LONGDESC}}
		<a name="{{METHOD}}"> </a>
		<details>
			<summary>
			<span style="font-weight:900">{{METHOD}}</span> &mdash;
			{{{SHORTDESC}}}
			</summary>
			<div style="margin-left:40px;">
				{{{LONGDESC}}}
				{{{showExamples EXAMPLE}}}
			</div>
		</details>
	{{else}}
		<a name="{{METHOD}}"> </a>
		<span style="padding-left:20px; font-weight:900">{{METHOD}}</span> &mdash;
			{{{SHORTDESC}}}
	{{/if}}
</script>

<script id="method-example" type="text/x-handlebars-template">
   <summary>{{{DESCRIPTION}}}</summary>
	<div class="highlight">
	<pre style="margin-left:50px; padding:0; padding-left:10px;">
		<code class="language-javascript" data-lang="javascript">
{{BRIEFCODE}}</code>
	</pre>
	</div>
</script>

<script>
// Handlebars helper functions

	Handlebars.registerHelper('showExamples', function (entry) {
	if (typeof entry === 'undefined') {
		return 'empty';
	}

	var source = document.getElementById("method-example").textContent;
	var template = Handlebars.compile(source);

	var output = '';
	if (entry instanceof Array) {
		output += '<br><span style="font-weight:700">Examples</span>';
		output += '<span';
		output += ' style="background:#bb2200; box-shadow:2px 2px 3px #777777; cursor:pointer; cursor:hand; font-size:80%; color:white; border-radius: 3px; padding-right:5px; margin-top:0; padding-left:5px; float:right;"';
		output += ' onclick="expandAllExamples(this);">'
		output += 'Expand all';
		output += '</span>\n';
		output += "<ol>\n";
		for (var i=0; i<entry.length; i++) {
			output += "<li>\n";
			output += "<details>\n";
			output += template(entry[i]);
			output += "</details>\n";
			output += "</li>\n";
		}
		output += "</ol>\n";
	} else {
	   output = '<details>';
		output += '<summary><span style="font-weight:700">Example</summary>';
		output += template(entry);
	   output += '</details>';
	}

   return output;
});



function expandAllExamples(element) {
	text = element.innerHTML;
	var detailslist = element.parentNode.querySelectorAll('li > details');
	var i;
	if (text.match(/Collapse all/)) {
		for(i=0; i<detailslist.length; i++) {
			detailslist[i].removeAttribute('open');
		}
		element.textContent = "Expand all";
	} else {
		// expand all examples
		for(i=0; i<detailslist.length; i++) {
			detailslist[i].setAttribute('open', true);
		}
		element.textContent = "Collapse all";
	}
	console.log("GOT HERE in expandAllExamples");
}

</script>
{% endraw %}

<!-- JavaScript function for page ------------------------------ -->

<script>

	document.addEventListener("DOMContentLoaded", function () {
		var docslots = document.querySelectorAll(".docslot");
		var source = document.getElementById("method-doc").textContent;
		var template = Handlebars.compile(source);
		for (var i=0; i<docslots.length; i++) {
			insertDocumentation(docslots[i], template);
		}
	});

	function insertDocumentation(target, template) {
		var name    = target.id;
		var file    = '/doc/methods/' + name + '.aton';
		var request = new XMLHttpRequest();
		request.open('GET', file);
		request.addEventListener('load', function () {
			var atondata = this.responseText;
			var aton = new ATON;
			aton.setOnlyChildRoot();
			var docobj = aton.parse(atondata);
			var dochtml = template(docobj);
			target.innerHTML = dochtml;
		});
		request.addEventListener('error', function () {
			console.error(this.statusText);
		});
		request.send();
	};

</script>

<!-- BEGINNING OF TEXT --------------------------------------- -->

## RationalNumber methods

Here is a list of function prototypes provided by the RationalNumber 
class in the file <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-base.js>RationalNumber-base.js</a>.  Click on the 
function name to view more details.

<div class="docslot" id="setSign"><span style="padding-left:20px; font-weight:900">setSign</span> &mdash; Set the sign to positive or negative.</div>
<div class="docslot" id="getSign"><span style="padding-left:20px; font-weight:900">getSign</span> &mdash; returns +1 if positive, -1 if negative.</div>
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
<div class="docslot" id="isValid"><span style="padding-left:20px; font-weight:900">isValid</span> &mdash; Returns true if safe, finite and not NaN.</div>
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

<div class="docslot" id="abs"><span style="padding-left:20px; font-weight:900">abs</span> &mdash; Return a copy of the RationalNumber which is non-negative.</div>
<div class="docslot" id="invert"><span style="padding-left:20px; font-weight:900">invert</span> &mdash; Switch the numerator and denominator.</div>
<div class="docslot" id="inversion"><span style="padding-left:20px; font-weight:900">inversion</span> &mdash; Alias for getInversion().</div>
<div class="docslot" id="getInversion"><span style="padding-left:20px; font-weight:900">getInversion</span> &mdash; Return new RationalNumber which is reciprocal of the called object.</div>
<div class="docslot" id="negate"><span style="padding-left:20px; font-weight:900">negate</span> &mdash; Make positive values negative and vice-versa.</div>
<div class="docslot" id="negation"><span style="padding-left:20px; font-weight:900">negation</span> &mdash; Alias of getNegation().</div>
<div class="docslot" id="getNegation"><span style="padding-left:20px; font-weight:900">getNegation</span> &mdash; Return a copy of the object, with sign reversed.</div>
<div class="docslot" id="addTo"><span style="padding-left:20px; font-weight:900">addTo</span> &mdash; To this RationalNumber, add additional numbers.</div>
<div class="docslot" id="add"><span style="padding-left:20px; font-weight:900">add</span> &mdash; Similar to addTo(), but returns sum rather than altering contents.</div>
<div class="docslot" id="subtractTo"><span style="padding-left:20px; font-weight:900">subtractTo</span> &mdash; To this RationalNumber, subtract values.</div>
<div class="docslot" id="subtract"><span style="padding-left:20px; font-weight:900">subtract</span> &mdash; Similar to subtractTo(), but returns result rather than altering calling object.</div>
<div class="docslot" id="multiplyTo"><span style="padding-left:20px; font-weight:900">multiplyTo</span> &mdash; To this RationalNumber, multiply values.</div>
<div class="docslot" id="multiply"><span style="padding-left:20px; font-weight:900">multiply</span> &mdash; Similar to multiplyTo(), but returns result rather than altering calling object.</div>
<div class="docslot" id="divideTo"><span style="padding-left:20px; font-weight:900">divideTo</span> &mdash; To this RationalNumber, divide values.</div>
<div class="docslot" id="divide"><span style="padding-left:20px; font-weight:900">divide</span> &mdash; Similar to divideTo(), but returns result rather than altering calling object.</div>



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

<div class="docslot" id="setSign"></div>
<div class="docslot" id="getSign"></div>
<div class="docslot" id="getNumerator"></div>
<div class="docslot" id="getNumeratorAbsoluteValue"></div>
<div class="docslot" id="getDenominator"></div>
<div class="docslot" id="setNumeratorNoReduce"></div>
<div class="docslot" id="setNumerator"></div>
<div class="docslot" id="setNumeratorAbsoluteValueNoReduce"></div>
<div class="docslot" id="setDenominatorAbsoluteValue"></div>
<div class="docslot" id="setDenominatorAbsoluveValueNoReduce"></div>
<div class="docslot" id="reduce"></div>
<div class="docslot" id="setValue"></div>
<div class="docslot" id="setValueNoReduce"></div>
<div class="docslot" id="isSafe"></div>
<div class="docslot" id="isNan"></div>
<div class="docslot" id="isInfinite"></div>
<div class="docslot" id="isValid"></div>
<div class="docslot" id="checkOverflow"></div>
<div class="docslot" id="checkOverflowOn"></div>
<div class="docslot" id="checkOverflowOff"></div>
<div class="docslot" id="toFloat"></div>
<div class="docslot" id="toNumber"></div>
<div class="docslot" id="valueOf"></div>
<div class="docslot" id="toString"></div>
<div class="docslot" id="toStringMixed"></div>
<div class="docslot" id="toJSON"></div>
<div class="docslot" id="toFloatJSON"></div>
<div class="docslot" id="toFloatArray"></div>
<div class="docslot" id="fromString"></div>
<div class="docslot" id="fromStringNoReduce"></div>
<div class="docslot" id="parseString"></div>
<div class="docslot" id="clone"></div>
<div class="docslot" id="copy"></div>
<div class="docslot" id="isEqual"></div>
<div class="docslot" id="isPositive"></div>
<div class="docslot" id="isNegative"></div>
<div class="docslot" id="isInteger"></div>

<span style="height:30px;">&nbsp;</span>

### Additional functions

The following RationalNumber methods provide additional arithmetic
processing from the optional <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js>RationalNumber-math.js</a> file:

<div class="docslot" id="abs"></div>
<div class="docslot" id="invert"></div>
<div class="docslot" id="inversion"></div>
<div class="docslot" id="getInversion"></div>
<div class="docslot" id="negate"></div>
<div class="docslot" id="negation"></div>
<div class="docslot" id="getNegation"></div>
<div class="docslot" id="addTo"></div>
<div class="docslot" id="add"></div>
<div class="docslot" id="subtractTo"></div>
<div class="docslot" id="subtract"></div>
<div class="docslot" id="multiplyTo"></div>
<div class="docslot" id="multiply"></div>
<div class="docslot" id="divideTo"></div>
<div class="docslot" id="divide"></div>



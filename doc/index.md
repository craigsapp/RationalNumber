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
class in the file 
[RationalNumber-base.js](https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-base.js) and
[RationalNumber-math.js](https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js) source files.  Click on the function names 
to view documentation and examples for
each RationalNumber method.  Example code can be run in the JavaScript
console for this page since this page has loaded a copy of the
RationalNumber code.  Press <span class="keyboard-char">ctrl</span>+<span
class="keyboard-char">+/=</span> to open all documentation,
<span class="keyboard-char">ctrl</span>+<span
class="keyboard-char">&ndash;</span> to close all docmentation, and
<span class="keyboard-char">ctrl</span>+<span
class="keyboard-char">e</span> to toggle display of all examples.

{% include method-list-1.html %}

<span style="height:30px;">&nbsp;</span>

### Additional functions

The following RationalNumber methods provide additional arithmetic
processing from the optional <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js>RationalNumber-math.js</a> file:

{% include method-list-2.html %}




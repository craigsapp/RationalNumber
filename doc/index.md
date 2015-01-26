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

{% include method-list-1.html %}

<span style="height:30px;">&nbsp;</span>

### Additional functions

The following RationalNumber methods provide additional arithmetic
processing from the optional <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js>RationalNumber-math.js</a> file:

{% include method-list-2.html %}




---
layout: index
vim: ts=3
---

<!-- JavaScript function for page ------------------------------ -->

{% include docslot/docslot.html %}

<script src="/javascripts/RationalNumber-0.1.0.min.js"></script>

<script>

document.addEventListener("DOMContentLoaded", function () {
	var docslots = document.querySelectorAll(".docslot");
	var source   = document.getElementById("docslot-main").textContent;
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
[RationalNumber-math.js](https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js) source files&#46;
{% include docslot/keyboard-commands-text.html %}

{% include docslot/method-list-1.html %}

<span style="height:30px;">&nbsp;</span>

### Mathematical functions

The following RationalNumber methods provide additional arithmetic
processing from the optional <a href=https://github.com/craigsapp/RationalNumber/blob/master/lib/RationalNumber-math.js>RationalNumber-math.js</a> file:

{% include docslot/method-list-2.html %}




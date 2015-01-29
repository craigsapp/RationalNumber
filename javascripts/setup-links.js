//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Thu Jan 22 19:09:03 PST 2015
// Last Modified: Wed Jan 28 23:58:28 PST 2015
// Filename:      /javascripts/setup-links.js
// Syntax:        JavaScript 1.8.5/ECMAScript 5.1
// vim:           ts=3
//
// Description:   Examine all links on a page, an if they start 
//                with ^https?:// then make then open in a new 
//                browser tab.
//


//////////////////////////////
//
// load event listener --
//

window.addEventListener('load', function () {
	externalLinks('new');
	titleLinkToHomepage('titlelink');
});



//////////////////////////////
//
// externalLinks -- Make external links open in a new tab.
//

function externalLinks(tabname) {
	if (!tabname) {
		tabname = 'new';
	}
	var links = document.querySelectorAll('a');
	var i;
	for (var i=0; i<links.length; i++) {
		if (links[i].href.match(/^https?:\/\//)) {
			links[i].target = tabname;
		}
	}
}



//////////////////////////////
//
// titleLinkToHomepage -- The title in the header will link to the
//		homepage -- except when on the homepage.
//

function titleLinkToHomepage(id) {
	var element = document.getElementById(id);
	if (!element) {
		return;
	}
	if (window.location.href.match(/^https?:\/\/([^\/])+\/(.+)/i)) {
		var content = '<a href="/">'
		content += element.innerHTML;
		content += '</a>';
		element.innerHTML = content;
	}
}




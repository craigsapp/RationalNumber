#
# Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sun Jan 25 05:59:18 PST 2015
# Last Modified: Mon Jan 26 03:50:30 PST 2015
# Filename:      _includes/Makefile
# Syntax:        GNU Makefile
#
# Description:   Fill in short descriptions of functions in index.
#


all: methoddoc

methoddoc: list1 list2

list1:
	./insertDescriptions method-list-1.html ../doc/methods \
		> temp.html && mv temp.html method-list-1.html

list2:
	./insertDescriptions method-list-2.html ../doc/methods \
		> temp.html && mv temp.html method-list-2.html



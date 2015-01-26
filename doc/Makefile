#
# Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sun Jan 25 05:59:18 PST 2015
# Last Modified: Sun Jan 25 05:59:20 PST 2015
# Filename:      doc/Makefile
# Syntax:        GNU Makefile
#
# Description:   Fill in short descriptions of functions in index.
#


all: list1 list2

list1:
	../_includes/insertDescriptions ../_includes/method-list-1.html \
		methods > temp.html && mv temp.html \
		../_includes/method-list-1.html

list2:
	../_includes/insertDescriptions ../_includes/method-list-2.html \
		methods > temp.html && mv temp.html \
		../_includes/method-list-2.html


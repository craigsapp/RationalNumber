#
# Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sun Jan 25 05:59:18 PST 2015
# Last Modified: Wed Jan 28 22:15:40 PST 2015
# Filename:      RationalNumber/_includes/docslot/Makefile
# Syntax:        GNU Makefile
#
# Description:   Fill in short descriptions of functions in index.
#

SRCDIR = ../../doc/methods
COMMAND = ./insertDescriptions

all: methoddoc

methoddoc: list1 list2

list1:
	$(COMMAND) method-list-1.html $(SRCDIR) > temp.html \
		&& mv temp.html method-list-1.html

list2:
	$(COMMAND) method-list-2.html $(SRCDIR) > temp.html \
		&& mv temp.html method-list-2.html



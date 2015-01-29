#
# Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sun Jan 25 05:59:18 PST 2015
# Last Modified: Wed Jan 28 23:29:15 PST 2015
# Filename:      RationalNumber/doc/Makefile
# Syntax:        GNU Makefile
#
# Description:   Fill in short descriptions of functions in index.
#

SRCDIR  = methods
TDIR    = ../_includes/docslot
COMMAND = insertDescriptions


all: list1 list2

list1:
	$(TDIR)/$(COMMAND) $(TDIR)/method-list-1.html $(SRCDIR) \
		> temp.html && mv temp.html $(TDIR)/method-list-1.html

list2:
	$(TDIR)/$(COMMAND) $(TDIR)/method-list-2.html $(SRCDIR) \
		> temp.html && mv temp.html $(TDIR)/method-list-2.html



#
# Programmer:	 Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sat Jan  3 09:04:49 PST 2015
# Last Modified: Sat Jan  3 09:10:51 PST 2015
# Filename:      .../lib/Makefile
# Syntax:        GNU Makefile
#
# Description:	 Makefile for various processing of RationalNumber module.
#
# minifiy and mocha need to be installed first, if not already available:
#	npm install -g minify
#	npm install -g mocha
# If you do not have npm installed, then install node.js accoding to your
# system, such as:
#	brew install node 	(Apple OS X)
#	yum install node	(Fedora linux)
#

all:
	@echo
	@echo "make test   -- Run code tests"
	@echo "make min    -- Create minimized versions of JavaScript files"
	@echo "make clean  -- Remove minimized versions of JavaScript files"
	@echo

min:
	(cd lib; $(MAKE) min)

tests: test
test:
	(cd test; $(MAKE))

clean:
	(cd lib; $(MAKE) clean)




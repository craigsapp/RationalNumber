#
# Programmer:	 Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Sat Jan  3 08:37:40 PST 2015
# Last Modified: Sun Jan 25 20:03:01 PST 2015
# Filename:      .../lib/Makefile
# Syntax:        GNU Makefile
#
# Description:	 Create minimal JavaScript files for RationalNumber.
#
# To install minify as a command-line program, run this command if it is 
# not already available:
#	npm install -g minify
# If you do not have npm installed, then install node.js accoding to your
# system, such as:
#	brew install node 	(Apple OS X)
#	yum install node	(Fedora linux)
#
# To run, type:
#	make
# or
#	make min
#

VERSION  = $(shell grep version ../package.json | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+')

# Try locally installed minify first
MINIFY = ../node_modules/.bin/minify
ifeq (,$(wildcard $(MINIFY)))
	# Globally installed minify
	MINIFY = minify
endif

min: RationalNumber-base RationalNumber-math combine

RationalNumber-base:
	$(MINIFY) RationalNumber-base.js > RationalNumber-base-$(VERSION).min.js

RationalNumber-math:
	$(MINIFY) RationalNumber-math.js > RationalNumber-math-$(VERSION).min.js

combine:
	cat RationalNumber-base-$(VERSION).min.js \
		RationalNumber-math-$(VERSION).min.js \
		> RationalNumber-$(VERSION).min.js

clean:
	rm *.min.js



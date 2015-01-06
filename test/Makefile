#
# Programmer:	 Craig Stuart Sapp <craig@ccrma.stanford.edu>
# Creation Date: Tue Dec 30 15:43:39 PST 2014
# Last Modified: Wed Dec 31 19:56:01 PST 2014
# Filename:      .../test/Makefile
# Syntax:        GNU Makefile
#
# Description:	  Run tests on the RationalNumber class.
#
# To install mocha as a command-line program, run this command if it is 
# not already available:
#	npm install -g mocha
# If you do not have npm installed, then install node.js accoding to your
# system, such as:
#	brew install node 	(Apple OS X)
#	yum install node	(Fedora linux)
#
# From the parent directory, you should be able to run these tests with
# the command:
#	make test
# 
# To run the tests from npm, go to the parent directory, and type:
#	npm test
# For this command, you may first need to install mocha in the 
# node_modules directory:
#	npm install mocha
#

# Try locally installed mocha first
MOCHA = ../node_modules/.bin/mocha
ifeq (,$(wildcard $(MOCHA)))
	# Globally installed mocha
	MOCHA = mocha
endif


all: test
test: 
	$(MOCHA) *.js

base: RationalNumberBase
math: RationalNumberMath

RationalNumberBase:
	$(MOCHA) RationalNumber-base.js

RationalNumberMath:
	$(MOCHA) RationalNumber-math.js


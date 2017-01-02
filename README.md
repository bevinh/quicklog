# quicklog
Quick and easy logger for Node
[![Coverage Status](https://coveralls.io/repos/github/bevinh/quicklog/badge.svg?branch=master)](https://coveralls.io/github/bevinh/quicklog?branch=master)

##Installation
'npm install quicklog-easy'

## Usage
Include at the top of your file "var quicklog = require('quicklog-easy');"

then use something like:

quicklog('pathtoyourfile.log', 'message you want to append to the log');

Anywhere you want to append, and to any logfile that you want to create!


The logfile will look like this: [Mon Jan 02 2017 17:26:37 GMT-0500 (EST) ]:success
and new entries will append to the bottom.
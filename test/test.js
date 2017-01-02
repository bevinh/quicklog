var quickLog = require('../quickLog.js');  // our module

describe('Log', function() {
    describe('#quickLog()', function() {
        it('should log without error', function() {
            var path = 'test.log';
                quickLog(path, 'success');
        });
    });
});
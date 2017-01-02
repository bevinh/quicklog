var quickLog = require('../app.js').quickLog;  // our module

describe('Log', function() {
    describe('#quickLog()', function() {
        it('should log without error', function() {
            var path = 'test.log';
                quickLog(path, 'success');
        });
    });
});
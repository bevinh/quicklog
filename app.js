
var fs = require('fs');
    //write the function to log any errors to the file you specify in the path variable
    exports.quickLog = function (path, e) {
        var d = new Date();
        var eWrite = "[" + d + " ]";
        eWrite += ":" + e + "\n";

        fs.appendFileSync(path, eWrite, encoding = 'utf8');

    }




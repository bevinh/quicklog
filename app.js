
module.exports = function (path, e){
    var fs = require('fs');
    //write the function to log any errors to the file you specify in the path variable
    function quickLog(path, e) {
        var d = new Date();
        var eWrite = "[" + d + " ]";
        eWrite += ":" + e + "\n";

        fs.appendFileSync(path, eWrite, encoding = 'utf8');
    }
    return quickLog(path, e);
};


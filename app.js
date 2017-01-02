var fs = require('fs');
var path = '';

//write the function to log any errors to the file you specify in the path variable
function logError(path, e){
    var d = new Date();
    var eWrite = "[" + d + " ]";
    eWrite += ":" + e + "\n";

    fs.appendFileSync(path, eWrite, encoding='utf8');
}
var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        //With mongoLab
        //return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds015849.mlab.com/nodetodosample'

        return 'mongodb://localhost:27017/nodetodosample';
    }
    
}
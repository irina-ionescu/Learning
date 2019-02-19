var configValues = require('./config');

module.exports = {
    
    getDbConnectionString : function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
        '@ds163764.mlab.com:63764/nodetodosample123';
    }
}
var db = require('../dbconnection');

var trainer = {
    
    getmytrainings:function(name,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where trainer=?",[name], callback);
    }
};

module.exports = trainer;
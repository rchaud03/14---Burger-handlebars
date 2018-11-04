var connection = require("./connection.js");

var orm = {
    select: function(whatToSelect, tableReturns) {
        var queryString = "Select ?? from ??";
        connection.query(queryString[whatToSelect, tableReturns], function(error, result) {
            if (error) throw error;
            console.log(result);
        });
    }
},
selectWhere:

//import orm file
var orm = require("../config/orm");

//create the object: a burger
var burger = {
    selectAll: function (cb)    {
        //need to select all of the burgers in the table
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    //cols and arrays 
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res)  {
            cb(res);
        });
    },

    //object values variable (objColumnValues) to be used to specify any columns with their values
    updateOne: function(objColValues, condition, cb)  {
        orm.updateOne("burgers", objColValues, condition, function(res)  {
            cb(res);
        });
    }

};
//export for the controller.js file
module.exports = burger;
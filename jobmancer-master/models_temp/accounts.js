// var Sequelize = require("sequelize");
// const sequelize = require('../config/database');







module.exports = (sequelize, DataTypes) => {
    var Accounts = sequelize.define("Account", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Accounts;
};


























// Account.sync();

// var account = {
//     fetchPasswordForUser: function (email, password, cb) {
//         var queryString = "SELECT * FROM accounts where email = ? AND pass = ?";
//         connection.query(queryString, [email, password], (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             cb(result)
//         });
//     },
//     createAccount: function (email, password, cb) {
//         var queryString = "INSERT INTO accounts where email = ? AND pass = ? AND";
//         connection.query(queryString, [email, password], function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result)
//         });
//     },

// };
// module.exports = Account;
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: "w7nt1vse1urxwpvy",
	password: "c1b9p51020h981u3",
	database: "eygnwwmhb7q9p28a"
  });

connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
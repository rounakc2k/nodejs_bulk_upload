const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'world'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

var sql = "INSERT INTO login (username, password, type) VALUES ?";

var values = [
    ['user10', 'password', 'user'],
    ['user11', 'random', 'manager'],
    ['user12', 'password', 'user'],
    ['user13', 'random', 'manager']
];

// var values = array([[0, 'xyz\\xyz', 'xyz1', 'xyz@xyz.com'],
// [1, 'xyz\\xyz', 'xyz2', 'xyz2@xyz.com'],
// [2, 'xyz\\xyz', 'xyz3', 'xyz3@xyz.xyz.com'],
// [3, 'xyz\\xyz', 'xyz4', 'xyz4@xyz.xyz.com'],
// [4, 'xyz\\xyz', 'xyz5', 'xyz5@xyz.xyz.com']], dtype=object)

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});

// Reference link https://levelup.gitconnected.com/bulk-operation-into-mysql-with-nodejs-478c8fc30917

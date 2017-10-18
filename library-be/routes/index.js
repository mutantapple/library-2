var express = require('express')
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '12-17-24',
    database: 'libaray'
});


/* GET home page. */
router.get('/', function (req, res, next) {

    connection.connect();

    connection.query('SELECT * from library', function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log('Error while performing Query.');
        }
    });

    connection.end();

    //res.render("index");
});

router.get('/all', function (req, res, next) {
    //res.render("media");

    //connection.connect();

    //connection.query('SELECT * from library', function (err, rows, fields) {
    //    if (!err) {
    //        res.json(rows);
    //    }
    //    else {
    //        console.log('Error while performing Query.');
    //    }
    //});

    //connection.end();
});

module.exports = router;

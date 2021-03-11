const express = require('express');

// const db = require('./db');

const app = express();

const mysql = require('mysql');
const conneciton = mysql.createConnection({
    host: '127.0.0.1',
    timezone:'HK',
    user: 'root',
    password: '123456',
    database: 'money'
})

conneciton.connect();

conneciton.query('select * from admin',(err,res)=>{
  console.log(res);
})

app.listen(3300, (err) => {});

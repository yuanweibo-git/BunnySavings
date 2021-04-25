const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  timezone: 'HK',
  user: 'root',
  password: '123456',
  database: 'money'
})

connection.connect()

function abc() {
  connection.query('select * from admin', (res) => {
    console.log(res)
  })
}

module.exports = {
  abc
}

class Database {
    static mysql = require('mysql')

    static pool = this.mysql.createPool({
      connectionLimit: 666,
      host: '127.0.0.1',
      timezone: 'HK',
      user: 'root',
      password: '123456',
      database: 'money'
    })

    /**
     * @description 从连接池中获取数据库连接
     * @returns {promise}
     */
    static _getConn_() {
      return new Promise((resolve, reject) => {
        Database.pool.getConnection((err, conn) => {
          if (err) {
            console.error('获取数据库连接失败。', err.stack)
            reject(false)
          }

          resolve(conn)
        })
      })
    }

    /**
     * @description 执行sql语句，对数据库进行增删改查
     * @param {object} conn 数据库连接
     * @param {String} sqlStr sql语句
     * @param {Object} data 要插入sql语句中的值
     * @returns {Promise} 成功返回执行结果 resolve(result)，错误返回 reject(false)
     */
    static _executeSql_(conn, sqlStr, data) {
      return new Promise((resolve, reject) => {
        // 使用try...catch语句捕获未知错误
        try {
          conn.query(sqlStr, data, (err, result, field) => {
            conn.release() // 释放连接

            if (err) {
              console.error('Class Database => _executeSql_(): sql语句执行错误。', err.stack)
              reject(false)
            }

            resolve(result)
          })
        } catch (ex) {
          console.error('Class Database => _executeSql_(): ', ex.message)
          reject(false)
        }
      })
    }

    /**
     * @description 开始一个事务
     * @param {object} conn 数据库连接
     * @returns {Promise} 成功返回一个开始事务的数据库连接 resolve(conn)，失败reject(false)
     */
    static _beginTransaction_(conn) {
      return new Promise((resolve, reject) => {
        try {
          conn.beginTransaction(err => {
            if (err) {
              console.error('Class Database => _beginTransaction_(): 事务启动失败。', err.stack)
              reject(false)
            }

            resolve(conn)
          })
        } catch (ex) {
          console.error('Class Database => _beginTransaction_(): ', ex.message)
          reject(false)
        }
      })
    }

    /**
     * @description 事务模式：执行sql语句，对数据库进行增删改查
     * @param {object} conn 一个打开了事务的数据库连接
     * @param {string} sqlStr sql语句
     * @param {object} data 要插入sql语句中的值
     * @returns {promise} 返回一个promise，成功resolve(result)，错误reject(false)并回滚之前的操作
     */
    static _transactionExecuteSql_(conn, sqlStr, data) {
      return new Promise((resolve, reject) => {
        try {
          conn.query(sqlStr, data, (err, result, field) => {
            if (err) {
              console.error('Class Database => _transactionExecuteSql_(): sql语句执行失败。', err.stack)
              conn.rollback() // 回滚数据库操作
              reject(false)
            }

            resolve(result)
          })
        } catch (ex) {
          console.error('Class Database => _transactionExecuteSql_(): ', ex.message)
          reject(false)
        }
      })
    }

    /**
     * @description 提交事务
     * @param {object} conn 一个开始了事务的数据库连接
     * @returns {Promise} 成功resolve(true)，失败reject(false)并回滚事务
     */
    static _commitTransaction_(conn) {
      return new Promise((resolve, reject) => {
        try {
          conn.commit((err) => {
            if (err) {
              console.error('Class Database => _commitTransaction_(): 事务提交失败。', err.stack)
              conn.rollback() // 回滚数据库操作
              conn.release() // 释放连接
              reject(false)
            }

            conn.release() // 释放连接
            resolve(true)
          })
        } catch (ex) {
          console.error('Class Database => _commitTransaction_(): ', ex.message)
          reject(false)
        }
      })
    }

    /**
   * @description 修改操作
   * @param {string} sqlStr 修改语句，例如：'update table set colomn = ? where column2 = ?'
   * @param {array} data 要插入修改语句中的值，例如：[10, 20]
   * @returns {Promise} 修改成功resolve(true)，失败返回false(注意：不是reject(false))
   */
    static update(sqlStr, data) {
      return Database._getConn_().then((conn) => {
        return Database._executeSql_(conn, sqlStr, data)
      }).then((result) => {
        // 修改成功resolve(true)
        return new Promise((resolve, reject) => {
          result.affectedRows > 0 ? resolve(true) : reject('修改失败。')
        })
      }).catch((err) => {
        // 捕获reject，打印错误信息并返回false。 err为reject(val)的值 => err = val
        console.error('Class Database => query(): ', err)
        // 调用catch并返回值，外部使用await才可以获取reject的值，当然catch也可以对返回的值做一定的处理。
        return false
      })
    }

    static query(sqlStr, data) {
      return Database._getConn_().then((conn) => {
        return Database._executeSql_(conn, sqlStr, data)
      }).catch((err) => {
        // 捕获reject，打印错误信息并返回false
        console.error('Class Database => query(): ', err)
        return false
      })
    }
}

module.exports = {
  query: Database.query,
  update: Database.update
}

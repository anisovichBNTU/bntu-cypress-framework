const mysql = require('mysql');

const Database = function(env) {
    this.config = {
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_SCHEMA
    }
    this.connection = mysql.createConnection(this.config);

    this.connect = function() {
        return new Promise((resolve, reject) => {
            this.connection.connect((error) => {
                console.log(error);
                if (error) reject(error)
            });
        });
    }

    this.query = function(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (error, results) => {
                if (error) reject(error)
                else {
                    return resolve(results);
                }
            });
        });
    }

    this.close = function() {
        return new Promise(function(resolve, reject) {
            this.connection.end((error) => {
                if (error) reject(error)
            });
        });
    }

};

module.exports = Database;
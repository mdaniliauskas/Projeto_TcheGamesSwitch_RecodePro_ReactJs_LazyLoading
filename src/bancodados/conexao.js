const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tchegames'
})

module.exports = conexao;
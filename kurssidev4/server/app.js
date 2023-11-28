const express = require('express')
 
const app = express()
const PORT = 8080;
const bcrypt = require("bcrypt")
const saltRounds = 10;
const mysql = require('mysql2');
 
app.use(express.static("build"));
app.use(express.json());
 
 
const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'kurspaloggin',
    host: 'localhost',
    port: 3306,
}
 
const connection = mysql.createConnection(dbConfig);
connection.connect();
app.listen(PORT, () => {
    console.log("Server started" + PORT);

    app.post('/create-user',(req, res) => {
        const b = req.body
        const number = parseInt(b.number)
        const query = 'INSERT INTO login (UserEmail, UserPassword, UserName, UserPhoneNummer) VALUES (?, ?, ?, ?)'
        const values = [b.email, b.password, b.username, b.phone]
        console.log(query, values)
        connection.query(query, values, (err, result) => {
            if (err){
                console.log(err)
                res.status(500).send(err)
            } else {
                res.status(200).send(result)  
            }
        })
    })
})
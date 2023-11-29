const express = require('express');
const app = express();
const PORT = 8080;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require('mysql2');

app.use(express.static('build'));
app.use(express.json());

const dbConfig = {
  user: 'root',
  password: 'root',
  database: 'kurspaloggin',
  host: 'localhost',
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);
connection.connect();

app.listen(PORT, () => {
  console.log('Server started' + PORT);

  app.post('/api/create-user', async (req, res) => {
    const b = req.body;

    // Check if the user already exists
    const userExistsQuery = 'SELECT * FROM login WHERE UserName = ? AND UserPhoneNummer = ? AND UserEmail = ? AND UserPassword = ?';
    const userExistsValues = [b.email, b.phone, b.username, b.password];

    connection.query(userExistsQuery, userExistsValues, async (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        if (results.length > 0) {
          // User already exists, handle accordingly
          res.status(400).send('User already exists');
        } else {
          // User doesn't exist, proceed with insertion
          const hash = await bcrypt.hash(b.password, saltRounds);
          const insertQuery =
            'INSERT INTO login (UserEmail, UserPassword, UserName, UserPhoneNummer) VALUES (?, ?, ?, ?)';
          const insertValues = [b.email, hash, b.username, b.phone];

          connection.query(insertQuery, insertValues, (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              res.status(200).send(result);
            }
          });
        }
      }
    });
  });
  app.post('/api/login', async (req, res) => {
    const b = req.body;
    const hash = await bcrypt.hash(b.password, saltRounds);
    
    const query = 'SELECT * FROM login WHERE UserName = ? AND UserEmail = ? AND UserPassword = ?'
    const values = [b.username, b.email, hash]

    connection.query(query, values, (err, result) => {
    console.log('result:', result);
    console.log('result.length:', result.length);
    console.log('passwordMatch:', passwordMatch);
    console.log('name:', b.username);
    console.log('email:', b.email);
    console.log('hash:', hash);
        if (err){
            console.log(err)
            res.status(500).send(err)
        } else {
            if(result.length > 0){
                const passwordMatch = await bcrypt.compare(b.password, hash);
                if(passwordMatch){
                res.status(200).send(result)  
            } else {
                res.status(401).send({ err: "Feil brukernavn eller passord" });
            }
        }
    
    })
  })
});

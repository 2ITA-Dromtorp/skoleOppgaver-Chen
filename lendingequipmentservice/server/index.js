const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const port = 3300;
const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

const db = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'dromtorplending'
}

const connection = mysql.createConnection(db);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    connection.connect(err => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    });
});

app.get('/',(req, res) => {
    const b = req.body
    const query = 'SELECT * FROM students'
    const values = [b.data]
    connection.query(query, values, (err, result) => {
        if (err){
            console.log(err)
            res.status(500).send(err)
        } else {
            res.status(200).send(result)  
        }
    })
})

app.post('/api/create-user', async (req, res) => {
    const b = req.body;

    // Check if the user already exists
    const userExistsQuery = 'SELECT * FROM students WHERE FirstName = ? AND LastName = ? AND UserName = ? AND TlfNumber = ? AND Email = ? AND Password = ?';
    const userExistsValues = [b.firstname, b.lastname, b.username, b.phone, b.email, b.password];

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
        //   const hash = await bcrypt.hash(b.password, saltRounds);
          const insertQuery =
            'INSERT INTO students (Email, Password, UserName, TlfNumber, FirstName, LastName) VALUES (?, ?, ?, ?, ?, ?)';
          const insertValues = [b.email, b.password, b.username, b.phone, b.firstname, b.lastname];

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
//   app.post('/api/login', async (req, res) => {
//     const b = req.body;
//     const hash = await bcrypt.hash(b.password, saltRounds);

//     const query = 'SELECT * FROM login WHERE UserName = ? AND UserEmail = ? AND UserPassword = ?'
//     const values = [b.username, b.email, hash]

//     connection.query(query, values, (err, result) => {
//     console.log('result:', result);
//     console.log('result.length:', result.length);
//     console.log('passwordMatch:', passwordMatch);
//     console.log('name:', b.username);
//     console.log('email:', b.email);
//     console.log('hash:', hash);
//         if (err){
//             console.log(err)
//             res.status(500).send(err)
//         } else {
//             if(result.length > 0){
//                 const passwordMatch = await bcrypt.compare(b.password, hash);
//                 if(passwordMatch){
//                 res.status(200).send(result)  
//             } else {
//                 res.status(401).send({ err: "Feil brukernavn eller passord" });
//             }
//         }

//         }})

// })  


const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require('mysql2');
const cors = require('cors')


app.use(cors());
app.use(express.static('build'));
app.use(express.json());


const dbConfig = {
  user: 'root',
  password: 'root',
  database: 'mlem',
  host: 'localhost',
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);
connection.connect(function (err) {
    if (err) {
        console.error('Connection failed!');
        throw err;
    }
    console.log('Connected to MySQL database!');
});



app.get('/api/select', async (req, res) => {
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
})





app.put('/api/update', async (req, res) => {
  const a = req.body.body;

  const b = JSON.parse(a)

  const query = 'UPDATE elev SET Fornavn = ?, Etternavn = ?, Klasse = ?, Hobby = ?, Kjonn = ?, DatamaskinId = ? WHERE ElevID = ?';
  const values = [b.Fornavn, b.Etternavn, parseInt(b.Klasse), b.Hobby, b.Kjonn, parseInt(b.DatamskinId), parseInt(b.ElevID)] 
  
console.log(values)
  connection.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        } else {
        res.send(JSON.stringify(result));
      }
    });

})





app.post('/api/insert', async (req, res) => {
  const a = req.body.body;

  const b = JSON.parse(a)

  const query = 'INSERT INTO elev (Fornavn, Etternavn, Klasse, Hobby, Kjonn, DatamaskinId)  VALUES ( ?, ?, ?, ?, ?, ?)';
  const values = [b.Fornavn, b.Etternavn, parseInt(b.Klasse), b.Hobby, b.Kjonn, parseInt(b.DatamskinId)] 
  
console.log(values)
  connection.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        } else {
        res.send(JSON.stringify(result));
      }
    });
})







app.delete('/api/delete', async (req, res) => {
  const a = req.body;
  // console.log(a)
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  // //const b = JSON.parse(a)

  const query = 'DELETE FROM elev WHERE ElevID = ?';
  const values = [parseInt(a.ElevID)]

  


  connection.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        } else {
        res.send(JSON.stringify(result));
      }
  })
})



// app.put('/update/:id', (req, res) => {    
//   const sql = "update student set Name = ?, Email = ? where ID = ?";    
//   const values = [        
//     req.body.name,        
//     req.body.email    
//   ]    
//   const id = req.params.id;        
//   db.query(sql, [...values, id], (err, data) => {        
//     if(err) return res.json("Error");        
//     return res.json(data);    
//   })})



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});


  
  // connection.end();
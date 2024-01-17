const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require('mysql2');
const util = require('util');
const cors = require('cors');

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
const queryAsync = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
  if (err) {
    console.error('Connection failed!');
    throw err;
  }
  console.log('Connected to MySQL database!');
});

app.get('/api/select', async (req, res) => {
  try {
    const results = await queryAsync('SELECT * FROM elev');
    res.send(JSON.stringify(results));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/update', async (req, res) => {
  const a = req.body.body;
  const b = JSON.parse(a);
  const query =
    'UPDATE elev SET Fornavn = ?, Etternavn = ?, Klasse = ?, Hobby = ?, Kjonn = ?, DatamaskinId = ? WHERE ElevID = ?';
  const values = [
    b.Fornavn,
    b.Etternavn,
    parseInt(b.Klasse),
    b.Hobby,
    b.Kjonn,
    parseInt(b.DatamskinId),
    parseInt(b.ElevID),
  ];

  try {
    await queryAsync(query, values);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/insert', async (req, res) => {
  const a = req.body.body;
  const b = JSON.parse(a);
  const query =
    'INSERT INTO elev (Fornavn, Etternavn, Klasse, Hobby, Kjonn, DatamaskinId)  VALUES ( ?, ?, ?, ?, ?, ?)';
  const values = [
    b.Fornavn,
    b.Etternavn,
    parseInt(b.Klasse),
    b.Hobby,
    b.Kjonn,
    parseInt(b.DatamskinId),
  ];

  try {
    await queryAsync(query, values);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/api/delete', async (req, res) => {
  const a = req.body;
  const query = 'DELETE FROM elev WHERE ElevID = ?';
  const values = [parseInt(a.ElevID)];

  try {
    await queryAsync(query, values);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
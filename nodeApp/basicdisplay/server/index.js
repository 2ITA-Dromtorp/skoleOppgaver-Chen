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



app.get('/', (request, response) => {
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log('Server started' + PORT);
// })

  // function (err) {
  //   if (err) throw err;
  //   console.error('Failed!');
  // });
  
  // connection.end();
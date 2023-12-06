// const express = require('express');
// const app = express();
// const PORT = 8080;
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const mysql = require('mysql2');

// app.use(express.static('build'));
// app.use(express.json());

// const dbConfig = {
//   user: 'root',
//   password: 'root',
//   database: 'kurspaloggin',
//   host: 'localhost',
//   port: 3306,
// };

// const connection = mysql.createConnection(dbConfig);
// connection.connect();

// app.listen(PORT, () => {
//   console.log('Server started' + PORT);

//   


const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const saltRounds = 10;

const uri = "mongodb+srv://dbTest:aTAwY7XcuR9CipbY@cluster0.igyiltn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let collection = null; // Add this variable to store the reference to the MongoDB collection

async function run() {
  try {
    await client.connect();
    const database = client.db("reactProsjekt"); // Replace with your actual database name
    collection = database.collection("react"); // Replace with your actual collection name
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to Mlem!");
  } finally {

  }
}

app.post('/api/create-user', async (req, res) => {
  const b = req.body;

  // Check if the user already exists
  const userExistsQuery = {
    UserName: b.username,
    UserPhoneNummer: b.phone,
    UserEmail: b.email,
  };

  const existingUser = await collection.findOne(userExistsQuery);

  if (existingUser) {
    // User already exists, handle accordingly
    res.status(400).send('User already exists');
    return;
  }

  // User doesn't exist, proceed with insertion
  const hash = await bcrypt.hash(b.password, saltRounds);
  const documentToInsert = {
    UserEmail: b.email,
    UserPassword: hash,
    UserName: b.username,
    UserPhoneNummer: b.phone,
  };

  try {
    const result = await collection.insertOne(documentToInsert);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.post('/api/login', async (req, res) => {
  const b = req.body;

  const query = {
    UserName: b.username,
    UserEmail: b.email,
  };

  const result = await collection.findOne(query);

  console.log('result:', result);

  if (result) {
    // User found, now compare passwords
    const passwordMatch = await bcrypt.compare(b.password, result.UserPassword);

    if (passwordMatch) {
      res.status(200).send(result);
    } else {
      res.status(401).send({ err: 'Feil brukernavn eller passord' });
    }
  } else {
    // No user found
    res.status(401).send({ err: 'Feil brukernavn eller passord' });
  }
});

run().catch(console.dir);

// Additional code to start the Express server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

//Importing all of our node modules
import express from "express"; // the framework that lets us build webservers
import pg from "pg";
import config from "./config.js"; //importing the connection string to our database hosted on NEON

//connecting to our PostgreSQL database , or db for short
const db = new pg.Pool({
  //new pg.Pool creates a connection to the database
  connectionString: config.databaseUrl, //this is the credentials to access the database. Keep private
  ssl: true, // use SSL encryption when connecting to the database to keep data safe in transit
});

//create an instance of express
const app = express();

//Defining out port number
//What port should our server listen to?
const port = 3000;

//Declaring that this server will be receiving and responding to requests in JSON
app.use(express.json()); // this server will receive and respond to requests with JSON data

//Turn on our server so that it can listen for requests and respond to those requests at our port #
//Hello you are on , listen to requests and respond to those requests
app.listen(port, () => {
  console.log(`Server is listening on port #${port}`);
}); //this method is turning on our server

app.get("/", (req, res) => {
  res.send("Hi, Server is ON!");
});

/*----------------------------------
Helper functions
----------------------------------*/

//getlawyers()
const getLegalHelp = async (zipcode) => {
  const data = await db.query(
    "SELECT * FROM legal_firms WHERE zipcode = $1 AND resource_type=$2;",
    [zipcode, "legal"]
  );
  console.log(data.rows);
  return data.rows;
};

//getALLHelp()
const getAllHelp = async (zipcode) => {
  // get all resources at that zip code
  const data = await db.query("SELECT * FROM resources where zipcode = $1", [
    zipcode,
  ]);
  console.log(data.rows);
  return data.rows;
};

//addOneClient()
const addOneClient = async (name, city, state, email, message) => {
  console.log("inside helper function //addOneClient()");
  console.log(name, city, state, email, message);
  const data = await db.query(
    //SQL Query should be written all in one line, using $1-$4 as placeholders for dynamic values
    "INSERT INTO clients (name, city, state, email, message) VALUES ($1,$2,$3,$4) RETURNING *;",
    [name, city, state, email, message] // order matters here
  );
  let addedClient = data;
  console.log("addedClient : ", data);
};

/*----------------------------------
API Endpoints
----------------------------------*/

//	GET	/get-legal-help/:zipcode	Retrieves lawyer at the zipcode
app.get("/get-legal-help/:zipcode", async (req, res) => {
  let zipcode = req.params.zipcode;
  //call helper function
  let lawyers = await getLegalHelp(zipcode);
  res.json(lawyers);
});

//	GET	/get-legal-help/:zipcode	Retrieves lawyer at the zipcode
app.get("/get-legal-help/:zipcode", async (req, res) => {
  let zipcode = req.params.zipcode;
  //call helper function
  let lawyers = await getLegalHelp(zipcode);
  res.json(lawyers);
});

//	GET	/get-all-help/:zipcode	Retrieves all help at the zipcode
app.get("/get-all-help/:zipcode", async (req, res) => {
  let zipcode = req.params.zipcode;
  //call helper function
  let resources = await getAllHelp(zipcode);
  res.json(resources);
});

//POST /add-one-client Adds client data to the database after client fills in the form (get help)
app.post("/add-one-client", async (req, res) => {
  try {
    const { name, city, state, email, message } = req.body;
    console.log("POST REQUEST :", req.body);
    //check for missing required field in the request body : id and newName
    if (!name || !city || !state || !email || !message) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let result = await addOneClient(name, city, state, email, message);
      console.log(result);
      res.status(200).send("Success, client was added");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

//POST /add-one-resource Adds resource data to the database after resource fills in the form (get involved)
app.post("/add-one-resource", async (req, res) => {});

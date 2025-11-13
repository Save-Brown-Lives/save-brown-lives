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
  const data = await db.query("SELECT * FROM legal_firms WHERE zipcode = $1;", [
    zipcode,
  ]);
  console.log(data.rows);
  return data.rows;
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

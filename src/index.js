import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'; // UNCOMMENT IF YOU WANT TO HOOK UP MONGODB

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config(); // load environment variables

/** UNCOMMENT IF YOU WANT TO HOOK UP MONGODB */

// const { mongoURI } = process.env;
// mongoose.connect(mongoURI, { useNewUrlParser: true });

// mongoose.connection.on('open', (ref) => {
//   console.log('Connected to mongo');
// });

// mongoose.connection.on('error', (err) => {
//   console.log('Could not connect to mongo! ');
//   return console.log(err);
// });

// set mongoose promises to es6 default
// mongoose.Promise = global.Promise;

/** ************************************* */

// default index route
app.get('/', (req, res) => {
  res.send('hi, this is the api!');
});

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);

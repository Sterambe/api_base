//initialize environment variables
const environment = process.env.ENVIRONMENT;
let envPath = './src/environments/.env-dev';

// if (environment === 'development') {
//   envPath = './src/environments/.env-dev';
// } else if (environment === 'local') {
//   envPath = './src/environments/.env-local';
// }
require('dotenv').config({ path: envPath });
console.log('Environment loaded: ' + process.env.ENVIRONMENT);

// require others
const express = require('express');
const fileupload = require('express-fileupload');

const cors = require('cors');
const app = express();
const Routes = require('./src/routes/index');

// middlewares
app.use(express.static('uploads'));
app.use(express.json());
app.use(cors());

// enable files upload
app.use(
  fileupload({
    createParentPath: true,
  })
);

// routes
app.use(Routes);

// Init Instances
const jwtHelper = require('./src/helper/jwt.helper').getInstance();

app.listen(3001, () => {
  console.log('Web Server listening on port 3001');
});

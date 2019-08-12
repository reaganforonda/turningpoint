const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const massive = require('massive');
const session = require('express-session');
const app = express();

const authController = require('./controllers/authController');

dotenv.config();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET_SESSION
} = process.env;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

app.use (
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: true
    })
)

// massive(CONNECTION_STRING).then((dbInstance) => {
//     app.set('db', dbInstance);
// });


/*****ENDPOINTS*****/
app.post('/api/auth/register', authController.register);



app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on: ${SERVER_PORT}`)
});
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const users = require('./routes/api/user')

const app = express()

// Then use it before your routes are set up:
app.use(cors());
//Add middleware for body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});

app.use('/api/user',users)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.port || 5000

app.listen(port, ()=> console.log(`the server is running on the port no ${port}`))
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Initialize the app
const app = express();

// Import routes
const router = require('./router');

// for parsing json
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)

// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

// Init MongoDB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true', {useNewUrlParser: true});
const db = mongoose.connection

//Check DB connection
if (!db) {
  console.log('Error connecting to MongoDB!');
} else {
  console.log('MongoDB connected successfully!');
}

// Setup express server port
const port = process.env.PORT || 3000;

// Reject all requests other than POST (Middleware)
app.all('*', function(req, res, next) {
  if (req.method != 'POST') {
    res.status(405)
        .json({'code': 'METHOD_NOT_ALLOWED', 'message': req.method + ' method is not allowed!'});
  }
  next();
});

// Load routes using /api endpoint
app.use('/api', router);

// Launch app to listen to specified port
const server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});


module.exports = server
var routes = require('express').Router();
var models = require('./models.js');

routes.post('/signup', (req, res) => {
  var createAccount = async () => {
    var results = await models.createAccount(req.body);
    try{res.sendStatus(200)}
    catch(err) {console.log('Error in creating acc in backend',err)}
  }
  createAccount();
});

routes.post('/addfave', (req, res) => {

});

module.exports = routes
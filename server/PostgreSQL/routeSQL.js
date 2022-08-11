var routes = require('express').Router();
var models = require('./models.js');

routes.post('/signup', (req, res) => {
  var createAccount = async () => {
    var results = await models.createAccount(req.body);
    try{res.sendStatus(200)}
    catch(err) {res.sendStatus(404)
      console.log('Error in creating acc in backend',err)}
  }
  createAccount();
});

routes.post('/addfave', (req, res) => {
  var addFave = async () => {
    var results = await models.addFave(req.body);
    try{res.sendStatus(200)}
    catch(err) {res.sendStatus(404)
      console.log('Error in adding faves in backend',err)}
  };
  addFave();
});

routes.get('/getfaves', (req, res) => {
  var getFaves = async () => {
    var results = await models.getFaves(req.query);
    try{res.status(200).send(results)}
    catch(err) {res.sendStatus(404)
      console.log('Error in getting faves in backend',err)}
  };
  getFaves();
});

routes.post('/postnote', (req, res) => {
  var postNotes = async () => {
    var results = await models.postNotes(req.body);
    try{res.sendStatus(200)}
    catch(err){res.sendStatus(404)
    console.log('Error in posting notes in back end')}
  };
  postNotes();
})

routes.get('/getnotes', (req, res) => {
  var getNotes = async () => {
    var results = await models.getNotes(req.query)
    try{res.status(200).send(results)}
    catch(err) {res.sendStatus(404)
    console.log('Error in getting notes from back end')}
  }
  getNotes();
});

routes.get('/getuserinfo', (req, res) => {
  var getUserInfo = async () => {
    var results = await models.getUserInfo()
    try{res.status(200).send(results)}
    catch(err){res.sendStatus(400)
    console.log('Error in getting all user data from back end', err)}
  };
  getUserInfo();
});

module.exports = routes
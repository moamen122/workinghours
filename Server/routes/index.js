var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("welcome to server");
});
var users = [
  {
    username: 'moamenamer', password: '1234'
  }
]
//get home page 


router.post('/login', function (req, res) {
  let result = users.find(user => user.username == req.body.username);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "successful login!"
      })
    } else {
      res.status(200).send({
        message: "password incorrect"
      })
    }

  } else {
    res.status(200).send({
      message: "user not found !"
    })
  }
})


module.exports = router;

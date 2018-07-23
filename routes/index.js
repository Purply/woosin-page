const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


const users = require('./users');
router.use('/users', users);

// const articles = require('./articles/routes');
// router.use('/articles', articles);
//
// const chats = require('./chats/routes');
// router.use('/chats', chats);
//
// const files = require('./files/routes');
// router.use('/files', files);

module.exports = router;
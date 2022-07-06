const express = require('express');
const router = express.Router();
const upload = require('./upload.setting')

router.post('/picture', upload.single('picture'),(req, res) => {
  const avatar = req.file;
  const userObj = {...req.body, avatar}
  res.status(200).json({data: userObj,status: 'SUCCESS', message: 'Profile Successfully upload'});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const upload = require('./upload.setting')

/*SINGLE FILE UPLOAD*/
router.post('/picture', upload.single('picture'),(req, res) => {
  const avatar = req.file;
  const userObj = {...req.body, avatar}
  res.status(200).json({data: userObj,status: 'SUCCESS', message: 'Profile Successfully upload'});
});

/*MULTIPLE FILE UPLOAD*/
router.post('/pictures', upload.array('pictures', 3),(req, res) => {
  const avatar = req.files;
  console.log(avatar)
  const userObj = {...req.body, ...avatar}
  res.status(200).json({data: userObj,status: 'SUCCESS', message: 'Profile Successfully upload'});
});

module.exports = router;

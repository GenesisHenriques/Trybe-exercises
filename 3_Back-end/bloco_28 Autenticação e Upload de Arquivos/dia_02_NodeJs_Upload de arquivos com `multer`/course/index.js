const express = require('express')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});
// const upload = multer({ dest: "uploads/" });
const upload = multer({ storage });
const app = express()
const port = 3000

app.get('/ping', (req, res) => res.send('Ping!'))

app.post('/upload', upload.single('arquivo'), (req, res) => {
  console.log('1', req.body);
  console.log('2', req.file);
  res.send('Ok!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
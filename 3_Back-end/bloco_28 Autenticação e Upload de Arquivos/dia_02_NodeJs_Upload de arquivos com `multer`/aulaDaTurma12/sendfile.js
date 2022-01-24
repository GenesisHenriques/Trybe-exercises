const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');

const URL = 'http://localhost:3000/files/upload';

main = async () => {
  const readStream = fs.createReadStream('./files/TrybeTrivia.png'); // abrir o stream

  const form = new FormData();
  form.append('file', readStream);

  await axios.post(URL, form, { headers: { ...form.getHeaders() } });

  readStream.close(); // Fecha o stream
};

main();
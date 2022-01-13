const express = require('express');
const error = require('./midlleware/error');
const login = require('./controller/login');
const users = require('./controller/users');
const topSecret = require('./controller/topSecret');

const auth = require('./midlleware/auth');
const admin = require('./midlleware/admin');

const port = 3000;

const app = express();

app.use(express.json());

app.post('/login', login);
app.get('/users/me', auth, users);
app.get('/top-secret',auth, admin, topSecret);
app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
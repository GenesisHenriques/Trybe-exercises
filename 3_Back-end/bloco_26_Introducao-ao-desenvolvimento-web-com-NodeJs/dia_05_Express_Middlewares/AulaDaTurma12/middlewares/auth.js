const users = [
  {
    username: 'pedrohrc',
    password: 'bananas'
  },
  {
    username: 'jade',
    password: 'lucas&leo'
  },
  {
    username: 'ricci',
    password: 'tuntztuntz'
  }
];

module.exports = async(req, res, next) => {
  const { username, password } = req.headers;
  const found = users.find(val => val.username === username);

  if(!username || !password) next({ message: 'must inform username and password', status: 401 })

  if(!found) next({ message: 'user not found.', status: 401 })


  if(found.password !== password) next({ message: 'wrong password.', status: 401 })

  req.user = found.username;

  next();
};
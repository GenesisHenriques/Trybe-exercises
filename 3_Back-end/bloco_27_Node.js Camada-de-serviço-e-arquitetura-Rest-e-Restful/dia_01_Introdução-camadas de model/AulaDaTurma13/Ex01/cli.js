// cli.js

/*
const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();
*/

// getUserMiddleware.js

const userModel = require('./userModel');

async function getUserMiddleware (req, res, next) {
        const { username } = req.body;
    try{

        const user = await userModel.getUser(username);

        if (!user) {
            return res.status(404).json({ message: 'user não encontrado' });
        }

        return res.status(200).json(user);
    }catch(e){
        res.status(500).json({message: `Algo deu errado :(`});
    }
}
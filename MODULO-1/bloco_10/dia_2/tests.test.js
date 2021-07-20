const getListAnimals = require('./exerciseAssin01');
// getListAnimals('Dog').then((b) => {
//   console.log(b[0]);
// });

describe('Quando o tipo do animal existe', () => {
  it('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});
describe('Quando o tipo do animal, não existe', () => {
  it('Retorne o erro', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

// -----------------------------------------------------
// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = require('./exercise01');

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

// ------------------------------------------------------
// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const getUserName = require('./exercise02');
// const a = getUserName(3).catch((b) => {
//   console.log(b);
// });


describe('Test the return of function getUserName', () => {
  it('Passing of ID 4 expect retun Mark', () => {
    expect.assertions(1);
    (getUserName(4).then((emplyoee) => {
      expect(emplyoee).toBe('Mark');
    }));
  });

  it('Passing of ID 4 expect retun error: User with 3 not found.', () => {
    expect.assertions(1);
    (getUserName(2).catch((emplyoee) => {
      expect(emplyoee).toBe('error: User with 3 not found.');
    }));
  });
});

// ------------------------------------------------------------------
// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

describe('Test the return of function getUserName, using async await', () => {
  it('Passing of ID 4 expect retun Mark', async () => {
    expect.assertions(1);
    await (getUserName(4).then((emplyoee) => {
      expect(emplyoee).toBe('Mark');
    }));
  });

  it('Passing of ID 4 expect retun error: User with 3 not found.', async () => {
    expect.assertions(1);
    try{
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({"error": "User with 2 not found."});
    }
  });
});
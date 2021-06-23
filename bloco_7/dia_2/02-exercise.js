const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};

const getValueByNumber = (obj, key) => {
  const array = Object.keys(obj);
  return array[key];
}

const verifyPair = (obj, key, value) => {
  let pair = Object.entries(obj);

  for (let index = 0; index < pair.length; index += 1) {
    if (pair[index][0] === key && pair[index][1] === value) {
      return true;
    }
  }
  return false;
}


// const allLessons = {};

// Object.assign(allLessons.lesson1 = lesson1);
// Object.assign(allLessons.lesson2 = lesson2);
// Object.assign(allLessons.lesson3 = lesson3);


const allLessons2 = Object.assign({}, { lesson1, lesson2, lesson3 });

const addLesson2 = (obj, kay, value) => {
  obj[kay] = value;
  return obj;
}

function viewKey() {
  let keys = Object.keys(lesson2);
  console.log(`Tamanho do objeto lesson2:${keys.length}`);
  console.log(`Chaves: ${keys}`);
}

function viewValue() {
  let values = Object.values(lesson2);
  console.log(`Valores: ${values}`);
}

addLesson2(lesson2,'telefone', '123456789');

//console.log(lesson2);
// viewKey();
// viewValue();
// console.log(allLessons);
//console.log(allLessons2);
//console.log(Object.keys(allLessons2)[0].numeroEstudantes);
//console.log(getNumberOfStudents(allLessons2));
//console.log(getValueByNumber(lesson1, 0));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
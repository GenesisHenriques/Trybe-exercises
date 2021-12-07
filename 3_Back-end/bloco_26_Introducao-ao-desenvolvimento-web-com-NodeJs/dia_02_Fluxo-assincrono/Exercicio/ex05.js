const fs = require('fs').promises;

// 5 Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createFilePromise = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );
  await Promise.all(createFilePromise);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile(',/fileAll.txt', newFileContent)
}

arrayToFile();

module.exports = arrayToFile;
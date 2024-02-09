const fs = require('fs/promises');

class QuestionAnswer {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

async function getQuestion(fileName) {
  const data = await fs.readFile(`./topics/${fileName}_flashcard_data.txt`, 'utf-8').then((elem) => elem.split('\n\n')); // array with 'Являются ли еноты травоядными, плотоядными или всеядными?\nвсеядными',
  const newData = data.map((elem) => elem.split('\n'));
  return newData.map((elem) => {
    const object = new QuestionAnswer(elem[0], elem[1]);
    return object;
  });
}

console.log(getQuestion('raccoon').then(console.log));

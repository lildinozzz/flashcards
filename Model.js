const fs = require('fs').promises;

class Model {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
async function readTopics() {
  const topics = await fs.readdir('./topics');
  return topics.map((el) => el.split('_')[0]);
}

async function getQuestion(fileName) {
  const data = await fs.readFile(`./topics/${fileName}_flashcard_data.txt`, 'utf-8').then((elem) => elem.split('\n\n')); // array with 'Являются ли еноты травоядными, плотоядными или всеядными?\nвсеядными',
  const newData = data.map((elem) => elem.split('\n')); // мэпаем на два элема в одном массиве
  return newData.map((elem) => { // мэпаем по элементу и создаем обьект
    const object = new Model(elem[0], elem[1]);
    return object;
  });
}

console.log(Model.getQuestion());

module.exports = Model;

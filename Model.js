const { read } = require('fs');

const fs = require('fs').promises;

class Model {
  constructor(type, index, question, answer) {
    this.type = type;
    this.index = index;
    this.question = question;
    this.answer = answer;
  }

  async readTopics() {
    const topics = fs.readdir('./topics/');
    return (await topics).map((elem) => elem.split('_')[0]); // разбиваем по названиям через _ и достаем ток [0] элемы
  }

  async getQuestion(fileName) {
    const data = await fs.readFile(`./topics/${fileName}_flashcard_data.txt`, 'utf-8').then((elem) => elem.split('\n\n')); // array with 'Являются ли еноты травоядными, плотоядными или всеядными?\nвсеядными',
    const newData = data.map((elem) => elem.split('\n')); // мэпаем на два элема в одном массиве
    let index = 1;
    return newData.map((elem) => { // мэпаем по элементу и создаем обьект
      const object = new Model('input', index++, elem[0], elem[1]);
      return object;
    });
  }
}
const test = new Model();
console.log(test.getQuestion('raccoon').then(console.log));

module.exports = Model;

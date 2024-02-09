const fs = require('fs').promises;

class Model {
  async readTopics() {
    const topics = fs.readdir('./topics/');
    return (await topics).map((elem) => elem.split('_')[0]); // разбиваем по названиям через _ и достаем ток [0] элемы
  }

  async getQuestion(fileName) {
    const data = await fs.readFile(`./topics/${fileName}_flashcard_data.txt`, 'utf-8').then((elem) => elem.split('\n\n')); // array with 'Являются ли еноты травоядными, плотоядными или всеядными?\nвсеядными',
    const newData = data.map((elem) => elem.split('\n')); // мэпаем на два элема в одном массиве
    const index = 1;
    return newData.map((elem) => // мэпаем по элементу и создаем обьект
      ({
        type: 'input', index, question: elem[0], answer: elem[1], name: elem[0]
      }));
  }
}

module.exports = Model;

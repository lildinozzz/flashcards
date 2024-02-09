const inquirer = require('inquirer');

class View {
  static chooseTopic(topics) {
    return inquirer.prompt(
      {
        type: 'list',
        name: 'topic',
        message: 'Выбери тему',
        choices: topics
      }
    );
  }

  static askQuestion(question) {
    return inquirer.prompt(
      question
    );
  }

  static showResult(data) {
    return data ? console.log('верно') : console.log('ответ неверный');
  }

  static showScore(score) {
    console.log(`Вы набрали ${score} баллов`);
  }
}
module.exports = View;

const yosay = require('yosay');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const topics = await this.model.readTopics(); // topics name
    const questions = await this.model.getQuestion(topic); // type,index,question,answer
    const correctAnswers = await this.model.getQuestion.answer;
    // const topic = await this.view.showTopics(topics);
    // const showQuestions = await this.view.showQuestion(questions);
    let counter = 0;
    const wrongAnswersArr = [];

    for (let i = 0; i < showQuestions.length; i += 1) {
      if (showQuestions[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        counter += 1;
      } else {
        wrongAnswersArr.push(i); // push into array some indexes
      }
    }

    if (!wrongAnswersArr.length) {
      console.log(yosay('Ты много знаешь!'));
    }
    console.log(`\nПравильных ответов: ${counter} из ${showQuestions.length}\n`);
  }
}

module.exports = Controller;

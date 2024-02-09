class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const topics = await this.model.readTopics(); // topics name
    const { topic } = await this.view.chooseTopic(topics); // terminal questions
    const questions = await this.model.getQuestion(topic);// type,index,question,answer
    const questionAnswer = await this.view.askQuestion(questions); // object that shows
    const correctAnswers = [...questions].map((elem) => elem.answer);

    let counter = 0;
    const wrongAnswersArr = [];

    for (let i = 0; i < questionAnswer.length; i += 1) {
      if (questionAnswer[i].answer.toLowerCase() === correctAnswers[i].toLowerCase()) {
        counter += 1;
      } else {
        wrongAnswersArr.push(i); // gonna push into array some indexes
      }
    }
    if (wrongAnswersArr.length >= 2) {
      console.log(('Какой ты молодец!'));
    } else {
      console.log('Надо было учиться в школе!');
    }
    console.log(`\nПравильных ответов: ${counter} из ${questions.length}\n`);
  }
}

module.exports = Controller;

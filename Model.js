const fs = require('fs').promises;

class Model {
  static async createQuestion() {
    const files = await fs.readdir('./topics');
    return files.map((file) => file.replace('.txt', ''));
  }

  static async readFile(fileName) {
    const data = (await fs.readFile(`./topics/${fileName}_flashcard_data.txt`, 'utf-8'));
    return data.split('\n');
  }
}

Model.readFile('raccoon').then(console.log);

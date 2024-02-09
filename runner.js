const Model = require('./Model');
const Controller = require('./Controller');
const View = require('./View');

const model = new Model();
const controller = new Controller(model, View);

controller.run();

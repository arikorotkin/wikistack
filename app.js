const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
const layout = require('./views/layout.js');
const { db, Page, User } = require('./models');

app.get('/', (req, res) => {
  res.send(layout('My Wikipedia Article'));
});

const PORT = 1234;

const init = async () => {
  await User.sync({ force: true });
  await Page.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

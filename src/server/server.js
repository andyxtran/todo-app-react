const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('views', path.resolve('src', 'server', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todos = [
  { id: 1, text: 'Hello, world!' },
  { id: 2, text: 'Pick up groceries', status: 'complete' }
];
let todoId = 3;

app.get('/', (req, res) => {
  const bundle = `//${req.hostname}:8080/public/bundle.js`;

  res.render('index', { bundle });
});

app.get('/todos', (req, res) => {
  res.json(JSON.stringify(todos));
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => {
    return todo.id === id;
  });

  res.json(JSON.stringify(todos[index]));
});

app.post('/todos', (req, res) => {
  const text = req.body.data.text;

  if (!text) {
    res.status(400).json({ message: 'text is required' });

    return;
  }

  const id = todoId++;
  const newTodo = { id, text, status: 'active' };

  todos.push(newTodo);

  res.status(201).json(todos);
});

app.delete('/todos/:id', (req, res) => {
  const deleteData = req.body.data;

  if (!deleteData) {
    res.status(400).send({ message: 'delete data required' });

    return;
  }

  const deleteFromDb = (data, db) => {
    for (let i = 0; i < db.length; i++) {
      if (db[i].id === data.id) {
        db.splice(i, 1);
      } 
    }
  };

  deleteFromDb(deleteData, todos);
  res.status(201).json(deleteData);
});

app.put('/todos/:id', (req, res) => {
  const putData = req.body.data;

  if (!putData) {
    res.status(400).send({ message: 'put ID required' });

    return;
  }

  const updateToDb = (data, db) => {
    for (let i = 0; i < db.length; i++) {
      if (db[i].id === data.id) {
        db[i].status = db[i].status === 'complete' ? 'active' : 'complete';
      }
    }
  }

  updateToDb(putData, todos);
  res.status(201).json(putData);
});

// Node server.
const port = 3000;
const server = app.listen(port, () => {
  console.log(`---> Application started on port: ${port}`);
});

// Dev server.
const devServer = require('../../tools/development-server');
const devPort = 8080;

devServer.listen(devPort, '0.0.0.0', () => {});

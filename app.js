const express = require('express');
const authRoutes = require('./routes/auth.routes');
const path = require('path');
const db = require('./data/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// keep commented for now
// app.use(express.json());
// app.use(cors());


app.use(authRoutes);

db.init().then( () => app.listen(
  PORT, () => console.log(`[SERVER]: Server has started up successfuly on PORT:${PORT}`)
)).catch( e => {
  console.log('[ERROR]: server could not be started');
  console.log(e);
});



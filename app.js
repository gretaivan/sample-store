const express = require('express');
const authRoutes = require('./routes/auth.routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// keep commented for now
// app.use(express.json());
// app.use(cors());
app.use(authRoutes);


app.listen(PORT, () => console.log(`[SERVER]: Server has started up successfuly...`));


const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// keep commented for now
// app.use(express.json());
// app.use(cors());
app.use(authRoutes);


app.listen(PORT, () => console.log(`[SERVER]: Server has started up successfuly...`));


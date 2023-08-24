
const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');

const app = express();

app.use(bodyParser.json());

app.use('/api', profileRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

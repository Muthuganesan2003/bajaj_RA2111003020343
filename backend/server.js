const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api', routes); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

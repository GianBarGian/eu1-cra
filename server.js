const express = require('express');
const path = require('path');

const app = express();

const pathToIndex = path.join(__dirname, 'build', 'index.html');
const pathToBuild = path.join(__dirname, 'build');

app.use(express.static(pathToBuild));

app.get('/', (req, res) => {
    res.sendFile(pathToIndex);
})

app.listen(process.env.PORT || 5000);
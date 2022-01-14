const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log("app is listing");
})
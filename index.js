const express = require('express');
const axios = require('axios');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
 });
  
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const { request, response } = require('express');
const express = require('express');
const  path  = require('path');
const app = express();

app.use(express.json());

const routes = require('./src/routes/routes');
app.use('/api/',routes);
app.use(express.urlencoded({extended: false}));

app.listen(3001, () => {
  console.log('server started');
});

//Routes
app.get('/', (request,response) => {
  response.sendFile(path.resolve(__dirname,'index.html'))
})


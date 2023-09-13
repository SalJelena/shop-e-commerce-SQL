const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const { connect } = require('./util/database');
//const { init } = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//init()
connect()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require("./routes"));

// app.get("/", (req, res) => {
//     res.send("Welcome to backend server")
// })

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log("server running great!");
  });
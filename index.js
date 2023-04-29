const express = require("express");
const sequelize = require("sequelize");
const shortUrl = require('./routes/urlRouter');
const homeRoutes = require('./routes/homeRouter');

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/urlapi', shortUrl);
app.use('/', homeRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log("Listening to PORT 3001!");
})
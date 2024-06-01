require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const ageRoute = require("./routes/ageRoute");
const userRoute = require('./routes/usersRoute')
const { sequelize } = require('./config/db');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const checkDBConnnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('DATABASE CONNECTED SUCCESSFULLY');
    } catch (error) {
        console.log('DB NOT CONNECTED');
        console.log(error.message);
    }
}

checkDBConnnection();

app.use(userRoute);


app.listen(process.env.PORT || port, () => {
    console.log(`App is listening on port:${process.env.PORT || port}`);
});
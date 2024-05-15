const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));


app.get("/users", (req, res) => {
    const data = {
        name: "Temi",
        age: 24,
        position: "manager"
    }

    res.status(201).json({
        status: 'success',
        data
    })
});

app.listen(port, () => {
    console.log(`App is listening on port:${port}`);
});
const data = require("../utils/ageFile");

function getAge(req, res) {
    
    const totalUsers = data.length;
    const totalAge = data.reduce((sum, data) => sum + data.age, 0);

   
    res.status(201).json({
        status: true,
        data,
        totalUsers,
        totalAge
    })
}

module.exports = getAge;
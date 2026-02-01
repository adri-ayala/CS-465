var fs = require('fs');
var tripd = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));


const travel = (req,res) => {
    res.render('travel',{ title: 'Travel Getaways', trips});
};
module.exports = {
    travel
}
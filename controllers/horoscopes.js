var Horoscope = require('../models/horoscope');

module.exports = {
  createHoroscope
};

async function createHoroscope(req, res) {
  try {
    await Horoscope.createHoroscope(req.body);
    // Use the horoscope action to return the list
    horoscopes(req, res);
  } catch (err) {
    res.json({err});
  }
}

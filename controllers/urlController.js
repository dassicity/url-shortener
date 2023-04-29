const nanoid = require('nanoid');
const urlDB = require('../config/db');
const urlModel = require('../models/urlModel');

const baseUrl = `localhost:3001/urlapi/`;

urlDB.sync()
    .then(() => {
        console.log("DB is running successfully");
    })
    .catch(err => {
        console.log(err);
    })

module.exports.getShortId = async (req, res, next) => {
    try {
        // Store the long Url
        const { longUrl } = req.body;
        // Generate a nano id for the long url
        const shortId = nanoid(4);
        // Store both of them associately in DB
        const shortUrl = await urlModel.create({
            longUrl,
            shortUrl: shortId
        });

        return res.status(200).json({
            'status': 'ok',
            'shortUrl': `${baseUrl}${shortId}`
        })

    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

}
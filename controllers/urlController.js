// const { nanoid } = require('nanoid');
const urlDB = require('../config/db');
const Url = require('../models/urlModel');

const baseUrl = `localhost:3001/urlapi/`;

urlDB.sync()
    .then(() => {
        console.log("DB is running successfully");
    })
    .catch(err => {
        console.log(err);
    })

module.exports.postShortId = async (req, res, next) => {
    try {
        // Store the long Url
        const { longUrl } = req.body;
        console.log(longUrl);
        // Generate a nano id for the long url
        const shortId = Math.floor(Math.random() * 10000);
        // Store both of them associately in DB
        const shortUrl = await Url.create({
            longUrl,
            shortUrl: shortId
        });
        // console.log("In getShortId");
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

module.exports.getShortId = async (req, res, next) => {
    try {
        const shortid = req.params.shortUrl;
        // fetch longUrl from database
        // console.log(shortid);
        const urlid = await Url.findOne({
            where: {
                shortUrl: shortid
            }
        });

        // console.log(urlid);

        if (!urlid) {
            return res.status(404).send("Invalid Short URL");
        }

        res.redirect(urlid.longUrl);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
const express = require('express');
const path = require('path');

exports.getHome = async (req, res, next) => {
    // console.log(__dirname);
    const htmlPath = path.join(__dirname, '../', 'public', 'index.html');
    res.sendFile(htmlPath);
}
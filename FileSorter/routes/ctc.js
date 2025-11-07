const express = require('express')
const router = express.Router()

const fs = require("fs")

module.exports = router
var path = require('path')


router.use((req, res, next) => {
    var dir = __dirname + 'path'

    fs.readdir('public', (err, files) => {
        if (err) {
            console.error('Error fetching file status:', err);
        }
        else {
            files.forEach(file => {
                console.log('If its file:', file);
                let a = path.extname(file);
                a = a.slice(1);
                let oldpath = path.join("public/", file);
                let newpath = path.join("public/", a,file);
                if (!fs.existsSync(path.join("public/", a))) {
                    fs.mkdirSync(path.join("public/", a));
                    fs.rename(oldpath, newpath, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        console.log('File Move Successfully.');
                    });
                }
                else{
                    fs.rename(oldpath, newpath, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        console.log('File Move Successfully.');
                    });
                }

            })

        }
    })
    next()
})
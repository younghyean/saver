const express = require('express');
const router = express.Router();
const pool = require('../config/db_pool');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

router.post('/', async function (req, res) {
    try {
        var connection = await pool.getConnection();
        const id = req.body.id;
        const password = req.body.password;
        const query = 'select * from user where id = ?';
        let user_info = await connection.query(query,id);
        if (password != user_info[0].password) res.status(401).send({ message: 'wrong id or password' });
        else {
            res.status(201).send({result:user_info[0],  message: "ok" });
                }

    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: err });
    }
    finally {
        pool.releaseConnection(connection);
    }

});

module.exports = router;

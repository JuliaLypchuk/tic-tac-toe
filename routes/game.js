var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Game = require('../models/game');

/*router.get('/', function (req, res, next) {
    GameScore.find()
        .populate('user', 'firstName')
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
});

router.use('/', function (req, res, next) {
    let token = req.headers.authorization;
    const decoded = jwt.decode(token);

    jwt.verify(token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated.',
                error: err
            });
        }
        next();
    })
});

*/
router.post('/', function (req, res, next) {
    let token = req.headers.authorization;
    const decoded = jwt.decode(token);

    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        const game = new Game({
            winScore: req.body.winScore,
            deadHeatScore: req.body.deadHeatScore,
            lossScore: req.body.lossScore,
            user: user._id
        });
        game.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.game.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

module.exports = router;
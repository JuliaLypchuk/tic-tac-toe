var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    winScore: {type: Number, required: true},
    deadHeatScore: {type: Number, required: true},
    lossScore: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (game) {
    User.findById(game.user, function (err, user) {
        user.game.pull(game._id);
        user.save();
    });
});

module.exports = mongoose.model('Game', schema);
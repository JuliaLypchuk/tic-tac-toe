/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (gameScore) {
    User.findById(gameScore.user, function (err, user) {
        user.messages.pull(gameScore._id);
        user.save();
    });
});

module.exports = mongoose.model('GameScore', schema); */
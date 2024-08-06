const mongoose = require('mongoose');

const FindingUserNameFromPokemon = new mongoose.Schema({

    users:[{ type:mongoose.Schema.ObjectId, ref:"Pokemon-User" }],

},{timestamps: true  })

const FindingUserNameModal = mongoose.model('UserName-list', FindingUserNameFromPokemon);

export default FindingUserNameModal;
const mongoose = require('mongoose');

const AddPokemonSchema = new mongoose.Schema({

    userName: { type: String },
    ability: { type: String },
    number: { type: String },
    name: { type: String },
    is_deleted: { type:Boolean,default:false}

},{timestamps: true  })


const addpokemonModal = mongoose.model('Pokemon-User', AddPokemonSchema);

export default addpokemonModal;
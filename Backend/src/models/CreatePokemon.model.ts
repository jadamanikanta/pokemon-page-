const mongoose = require('mongoose');

const PokemonUserSchema = new mongoose.Schema({
    ownerName: { type: String},
    pokemonName: {type: String},
    ability: {type: String},
    positionX: {type: String},
    positionY: { type: String},
    speed: { type: String},
    direction: { type: String}
}, {
    timestamps: true 
});

const PokemonUserModal = mongoose.model('Add-Pokemon', PokemonUserSchema);

export default PokemonUserModal;

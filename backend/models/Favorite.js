const mongoose = require('mongoose');


const FavoriteSchema = mongoose.Schema({
   
    user_id:{
        type: String,
        required: true
    },
    restaurant_url: {
        type: String,
        required: true
    },
    restaurant_thumb: {
        type: String,
        required: true
    },
    restaurant_cuisine: {
        type: String,
        required: true
        },
    restaurant_name: {
        type: String,
        required: true
    },
    restaurant_address: {
        type: String,
        required: true
    },
    user_rating: {
        type: Number
    },
    restaurant_latitude: {
        type: Number
    },
    restaurant_longitude: {
        type: Number
    },
    restaurant_menu_url: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Favorites', FavoriteSchema);
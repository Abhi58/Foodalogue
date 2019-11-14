module.exports = (app) => {
    const favorites = require('../controllers/favoriteController');

    // save a new favorite
    app.post('/favorites', favorites.save);

    // Retrieve the favories
    app.get('/favorites', favorites.findAll);

    // Retrieve a single favorite resturant
    app.post('/favorites/findFav', favorites.findOne);


    // Delete a Note with resurantId
    app.delete('/favorites/:resturantId', favorites.delete);
}
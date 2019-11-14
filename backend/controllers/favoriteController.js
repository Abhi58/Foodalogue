const Favorite = require('../models/Favorite');

exports.findAll = async (req, res) => {
    try {
        const favorites = await Favorite.find({ user_id: req.body.user_id});
        res.json(favorites);
    } catch (err) {

        res.json({ message: err });
    }
};

//Saves a favortie resturant
exports.save = async (req, res) => {

    const favorite = new Favorite(req.body);

    try {
        const savedPost = await favorite.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.findOne = async (req, res) => {

    let searchQuery= req.body.searchQuery;
    try {
        const result = await Favorite.find({ restaurant_name: searchQuery});
        res.json(result);
    } catch (err) {
        res.json({ message: err });
    }
};

exports.delete = async (res, req) => {

    try {
        const removedFavorite = await Favorite.remove({ _id: req.params.favId });
        res.json(removedFavorite);
    } catch (err) {
        res.json({ message: err });
    }

};
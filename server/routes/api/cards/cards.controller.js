var Card = require('./cards.model');


var controller = {};
controller.index = function (req, res) {
    Card.find({}, function (err, card) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send({ auth: true, card: card });
    });
};

controller.show = function (req, res) {
    Card.findOne({ _id: req.params.id }, function (err, card) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send(
            card
        );
    });
};

controller.create = function (req, res) {
    var card = new Card(req.body);
    card.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(card);
        }
    });
};

controller.delete = function (req, res) {
    Card.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
        if (!err) {
            console.log("Deleted");
            res.status(200).send({
                message: "Deleted"
            });
        }
    });
}

module.exports = controller;

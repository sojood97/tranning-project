var Board = require('./boards.model');


var controller = {};
controller.index = function (req, res) {
    Board.find({}, function (err, board) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send({ auth: true, board: board });
    });
};

controller.show = function (req, res) {
    Board.findOne({ _id: req.params.id }, function (err, board) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send(
            board
        );
    });
};

controller.create = function (req, res) {
    var board = new Board(req.body);
    board.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(board);
        }
    });
};

controller.delete = function (req, res) {
    Board.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
        if (!err) {
            console.log("Deleted");
            res.status(200).send({
                message: "Deleted"
            });
        }
    });
}

controller.edit = function (req, res) {
    Board.findByIdAndUpdate(req.params.id, req.body, function (err, updatedProduct) {
        Board.findOne({ _id: req.params.id })
            .then(function (res2) {
                res.send(res2);
            });
    });
}

module.exports = controller;

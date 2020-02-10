var List = require('./lists.model');


var controller = {};
controller.index = function (req, res) {
    List.find({}, function (err, list) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send({ auth: true, list: list });
    });
};

controller.show = function (req, res) {
    List.findOne({ _id: req.params.id }, function (err, list) {
        if (err)
            return res
                .status(500)
                .send(err);

        res.status(200).send(
            list
        );
    });
};

controller.create = function (req, res) {
    var list = new List(req.body);
    list.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(list);
        }
    });
};

controller.delete = function (req, res) {
    List.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
        if (!err) {
            console.log("Deleted");
            res.status(200).send({
                message: "Deleted"
            });
        }
    });
}

controller.edit = function (req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, function (err, updatedProduct) {
        List.findOne({ _id: req.params.id })
            .then(function (res2) {
                res.send(res2);
            });
    });
}

module.exports = controller;

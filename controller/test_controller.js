exports.test_controller = function () {
    return function (req, res, next) {
        var name = req.query.name
        if (name !== undefined) {
            req.hello = 'hello ' + name
            next()
        } else {
            req.hello = 'nothing'
            next()
        }
    }
}
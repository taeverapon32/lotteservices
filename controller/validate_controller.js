exports.check_header_param = function () {
    return function (req, res, next) {
        req.checkHeaders('BasicAuth', 'Basic Authentication is require in header').notEmpty()
        console.log('hello')
        var errors = req.validationErrors()
        console.log(errors)
        if (!errors) {
          next()
        } else {
            console.log('hello1')
          res.status(200).json({
            'res_code': 'XXX',
            'res_desc': errors[0].msg
          })
        }
      }
    }
    
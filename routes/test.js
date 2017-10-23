// var express = require('express')
// var router  = express.Router()

// router.get('/hello',
//     console.log('hello iam test rotes'),
//     function (req, res) {
//         var response = {
//             'res_code' : '0000',
//             'res_desc' : 'hello'
//         }
//     }
// )

// module.exports = router

const express = require('express')
const routes = express.Router()

const testUtils = require('../controller/test_controller')
const validateUtils = require('../controller/validate_controller')

routes.get('/',
    validateUtils.check_header_param(),
    testUtils.test_controller(),
    function (req, res) {
        var response = {
            'res_code': '0000',
            'res_desc': req.hello
        }
    res.status(200).json(response)
    }
)

module.exports = routes
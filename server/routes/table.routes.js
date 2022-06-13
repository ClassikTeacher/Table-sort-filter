const Router = require('express')
const router = new Router()
const tableController = require('../controller/table.controller')

router.post('/table', tableController.createRow)
router.get('/table', tableController.getTable)
router.get('/table/:id', tableController.getRow)
router.put('/table', tableController.updateRow)
router.delete('/table/:id', tableController.deleteRow)



module.exports = router
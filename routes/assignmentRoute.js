const express = require("express");
const {addAssignment,removeAssignment, viewAll} = require("../controller/assingnmentController");
const router = express.Router()

router.get('/',viewAll);
router.post('/add',addAssignment);
router.delete('/:id',removeAssignment);

module.exports = router;
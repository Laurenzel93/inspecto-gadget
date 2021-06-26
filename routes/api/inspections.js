const router = require("express").Router();
const inspectionsController = require("../../controllers/inspectionsController");

router.route("/")
  .get(inspectionsController.findOne)

router.route("/:address")
  .get(inspectionsController.findByAddress)
    
  
  



module.exports = router;
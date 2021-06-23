const router = require("express").Router();
const inspectionController = require("../../controllers/inspectionController");

// Matches with "/api/inspection"
router.route("/")
  .get(inspectionController.findAll)
  
// Matches with "/api/inspection/:id"
// router
//   .route("/:id")
//   .get(inspectionController.findById)
//   .put(inspectionController.update)
//   .delete(inspectionController.remove);

module.exports = router;
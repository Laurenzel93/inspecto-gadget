const router = require("express").Router();
const inspectionRoutes = require("./inspection");

// Inspector routes
router.use("/inspection", inspectionRoutes);

module.exports = router;
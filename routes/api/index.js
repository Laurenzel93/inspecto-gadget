const router = require("express").Router();
const inspectionRoutes = require("./inspections.js");
const userRoutes = require("./users");

// Inspector routes
router.use("/inspections", inspectionRoutes);
router.use("/users", userRoutes);

module.exports = router;
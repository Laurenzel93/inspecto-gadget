const router = require("express").Router();
const inspectionRoutes = require("./inspections.js");
const userRoutes = require("./users");
const permitRoutes = require("./permits");

router.use("/inspections", inspectionRoutes);
router.use("/users", userRoutes);
router.use("/permits", permitRoutes);

module.exports = router;
const router = require("express").Router();
const inspectionRoutes = require("./inspections.js");
const userRoutes = require("./users");
const permitRoutes = require("./permits");
const resultRoutes = require("./results")

router.use("/inspections", inspectionRoutes);
router.use("/users", userRoutes);
router.use("/permits", permitRoutes);
router.use("/results", resultRoutes);

module.exports = router;
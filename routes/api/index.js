const router = require("express").Router();
const inspectionRoutes = require("./inspections");
const userRoutes = require("./users");

// Inspector routes
router.use("/inspections", inspectionRoutes);


router.use('/users', function (req, res, next) {
  console.log('made it')
  console.log('Request Type:', req.method)
  next()
})

module.exports = router;
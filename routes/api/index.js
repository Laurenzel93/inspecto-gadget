const router = require("express").Router();
const inspectionRoutes = require("./inspection");
const userRoutes = require("./users");

// Inspector routes
router.use("/inspections", inspectionRoutes);
// router.use('/users', userRoutes);

router.use('/users', function (req, res, next) {
  console.log('made it')
  console.log('Request Type:', req.method)
  next()
})

module.exports = router;
const router = require("express").Router();
const { Inspection } = require("../../models");
const withAuth = require('../../scripts/auth');



router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    const inspectionData = await Inspection.findAll({
      order: [['date',  'ASC']],
      limit:30,
    }) 
    res.json(inspectionData)
 }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [['date',  'ASC']],
        limit:30,
        where: {
          inspector: req.session.name,
        },
      });
      console.log(inspectionData)
      res.json(inspectionData)
    } catch (error) {
      console.log(error);
    }
  }
});


module.exports = router;

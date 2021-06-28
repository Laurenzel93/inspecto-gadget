const router = require("express").Router();
const { Inspection } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    const inspectionData = await Inspection.findAll();
    return inspectionData;
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        where: {
          inspector: req.session.name,
        },
      });
      res.json(inspectionData)
    } catch (error) {
      console.log(error);
    }
  }
});

router.get('/address', withAuth, async (req, res) => {
   if (req.session.role === "admin") {
     const inspectionData = await Inspection.findAll({
        where: {
           address: req.address //TODO make sure this work
        }
     });
     return inspectionData;
   }
   if (req.session.role === "inspector") {
     try {
       const inspectionData = await Inspection.findAll({
         where: {
           inspector: req.session.name,
           address: req.address //TODO make sure this work
         },
       });
       return inspectionData;
     } catch (error) {
       console.log(error);
     }
   }
});

module.exports = router;

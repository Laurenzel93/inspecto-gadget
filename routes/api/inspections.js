const router = require("express").Router();
const { Inspection } = require("../../models");
const withAuth = require('../../scripts/auth');

router.post("/", withAuth, async (req, res) => {
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
      return inspectionData;
    } catch (error) {
      console.log(error);
    }
  }
});

router.post('/address', withAuth, async (req, res) => {
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

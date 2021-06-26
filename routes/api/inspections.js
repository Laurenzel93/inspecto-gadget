const router = require("express").Router();
const { Inspection } = require("../../models");

router.get("/", async (req, res) => {
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

router.get('/address', async (req, res) => {
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

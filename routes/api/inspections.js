const router = require("express").Router();
const { Inspection, Note } = require("../../models");
const withAuth = require('../../scripts/auth');



router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    const inspectionData = await Inspection.findAll({order: '"date" ASC'});
    res.json(inspectionData)
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [['date',  'ASC']],
        include: [{model: Note }],
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

router.get('/address/:id', withAuth, async (req, res) => {
   if (req.session.role === "admin") {
     const inspectionData = await Inspection.findAll({
        where: {
           address: req.params.id //TODO make sure this work
        }
     });
     return inspectionData;
   }
   if (req.session.role === "inspector") {
     try {
       const inspectionData = await Inspection.findAll({
         where: {
           inspector: req.session.name,
           address: req.params.id //TODO make sure this work
         },
       });
       return inspectionData;
     } catch (error) {
       console.log(error);
     }
   }
});

router.get("/id/:id", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    const inspectionData = await Inspection.findAll({
      include: [{model: Note }],
       where: {
          id: req.params.id //TODO make sure this work
       }
    });
    return inspectionData;
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        include: [{model: Note }],
        where: {
          inspector: req.session.name,
          id: req.params.id //TODO make sure this work
        },
      });
      return inspectionData;
    } catch (error) {
      console.log(error);
    }
  }
})

module.exports = router;

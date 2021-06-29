const router = require("express").Router();
const { Inspection, Note } = require("../../models");
const withAuth = require('../../scripts/auth');



router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    // console.log('=============');
    // console.log(res);
    // console.log('=============');

    const inspectionData = await Inspection.findAll({order: ['date', 'DESC']});
    try {
      console.log(res.json(inspectionData));
      res.json(inspectionData);
    } catch (err) {
      console.log(err);
    }
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

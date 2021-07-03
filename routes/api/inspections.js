const router = require("express").Router();
const { Inspection, Note, Permit, Result } = require("../../models");
const withAuth = require('../../scripts/auth');



router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [['date',  'ASC']],
        limit: 20,
        include: [
          {
            model: Note,
          },
          {
            model: Result,

           },
           {
            model: Permit,

           }
          ],
      });
     
      res.json(inspectionData)
    } catch (err) {
      console.log(err)
    };
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [['date',  'ASC']],
        limit:30,
        include: [
          {
            model: Note,
          },
          {
            model: Result,

           },
           {
            model: Permit,

           }
           
          ],
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



router.get("/id/:id", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    console.log(req.params.id)
    const inspectionData = await Inspection.findOne({
      include: [
        {
          model: Note,
        },
        {
          model: Result,

         }
        ],
       where: {
          id: req.params.id 
       }
    });
    res.json(inspectionData)
  }
  if (req.session.role === "inspector") {
    try {
      
      const inspectionData = await Inspection.findOne({
        include: [
          {
            model: Note,
          },
          {
            model: Result,
  
           }
  
          ],
        where: {
          inspector: req.session.name,
          id: req.params.id 
        },
      });
      res.json(inspectionData)
    } catch (error) {
      console.log(error);
    }
  }
})

module.exports = router;

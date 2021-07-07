const router = require("express").Router();
const { Inspection, Note, Permit, Result } = require("../../models");
const withAuth = require('../../scripts/auth');
const moment = require('moment');


router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [["date", "ASC"]],
        limit: 50,
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
      console.log(err);
    }
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [['date',  'ASC']],
        limit:20,
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
      console.log(inspectionData);
      res.json(inspectionData);
    } catch (error) {
      console.log(error);
    }
  }
});


router.get("/id/:id", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    console.log(req.params.id);
    const inspectionData = await Inspection.findOne({
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
          id: req.params.id 
       }
    });
    res.json(inspectionData);
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

           },
           {
            model: Permit,

           }
          ],
        where: {
          inspector: req.session.name,
          id: req.params.id 
        },
      });
      res.json(inspectionData);
    } catch (error) {
      console.log(error);
    }
  }
});

router.get("/calender", withAuth, async (req, res) => {
  let events = [];
  if (req.session.role === "admin") {
    try {
      const inspectionData = await Inspection.findAll();
      inspectionData.forEach((element) => {
          let date = moment(element.dataValues.date).format('YYYY-MM-DD')
          events.push({ title: `${element.dataValues.type}`, date: date.toString() });
      });
      console.log(events);
      res.json(events);
    } catch (err) {
      res.json(err);
      console.log(err);
    }
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        where: {
          inspector: req.session.name,
        },
      });
      inspectionData.forEach((element) => {
        let date = moment(element.dataValues.date).format('YYYY-MM-DD')
        events.push({ title: `${element.dataValues.type}`, date: date.toString() });
    });
      console.log(events);
      res.json(events);
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  }
});

module.exports = router;
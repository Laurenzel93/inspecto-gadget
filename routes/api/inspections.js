const router = require("express").Router();
const { Inspection, Note, Permit } = require("../../models");
const withAuth = require("../../scripts/auth");

router.get("/", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [["date", "ASC"]],
        limit: 20,
        include: [{ model: Note }],
      });
      inspectionData.forEach((element) => {
        console.log("============================");
        console.log(element.dataValues);
        console.log("----------------------------");
        element.dataValues.notes.forEach((note) => {
          console.log(note.dataValues.note);
        });
        console.log("============================");
      });
      res.json(inspectionData);
    } catch (err) {
      console.log(err);
    }
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        order: [["date", "ASC"]],
        limit: 30,
        include: [{ model: Note }],
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

// router.get('/address/:id', withAuth, async (req, res) => {
//    if (req.session.role === "admin") {

//      const inspectionData = await Inspection.findAll({
//         where: {
//            address: req.params.id //TODO make sure this work
//         }
//      });
//      return inspectionData;
//    }
//    if (req.session.role === "inspector") {
//      try {
//        const inspectionData = await Inspection.findAll({
//          where: {
//            inspector: req.session.name,
//            address: req.params.id //TODO make sure this work
//          },
//        });
//        res.json(inspectionData)
//      } catch (error) {
//        console.log(error);
//      }
//    }
// });

router.get("/id/:id", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    console.log(req.params.id);
    const inspectionData = await Inspection.findOne({
      include: [{ model: Note }],
      where: {
        id: req.params.id, //TODO make sure this work
      },
    });
    res.json(inspectionData);
  }
  if (req.session.role === "inspector") {
    try {
      const inspectionData = await Inspection.findAll({
        include: [{ model: Note }, { model: Permit }],
        where: {
          inspector: req.session.name,
          id: req.params.id, //TODO make sure this work
        },
      });
      res.json(inspectionData);
    } catch (error) {
      console.log(error);
    }
  }
});

router.get("/calender", withAuth, async (req, res) => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  let dateArray = [];
  let events = [];
  if (req.session.role === "admin") {
    try {
      const inspectionData = await Inspection.findAll();
      inspectionData.forEach((element) => {
        if (
          element.dataValues.date.getTime() >= firstDay.getTime() &&
          element.dataValues.date.getTime() <= lastDay.getTime()
        ) {
          dateArray.push(element.dataValues.date);
        }
      });
      dateArray.forEach((element) => {
        events.push(
          `{title: 'Inspection', start: ${element}},`
        );
      });
      console.log(events);
      console.log(dateArray);
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
      console.log(inspectionData);
      res.json(inspectionData);
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  }
});

module.exports = router;

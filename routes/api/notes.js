const router = require("express").Router();
const { Inspection, Note } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get('/');

router.get('/id/:id', withAuth, async (req, res) => {
  try {
    const noteData = await Note.findAll({
      where: {
        id: req.params.id,
      },
    });
    console.log(noteData)
    res.json(noteData)
  } catch (error) {
    console.log(error);
  }
});
const router = require("express").Router();
const { Permit } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get('/');

router.get('/id/:id', withAuth, async (req, res) => {
  try {
    const permitData = await Permit.findAll({
      where: {
        id: req.params.id,
      },
    });
    console.log(permitData)
    res.json(permitData)
  } catch (error) {
    console.log(error);
  }
});
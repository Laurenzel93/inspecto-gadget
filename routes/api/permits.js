const router = require("express").Router();
const { Permit } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get('/');

router.get('/id/:id', withAuth, async (req, res) => {
  console.log(req.params.id,)
  try {
    const permitData = await Permit.findOne({
      where: {
        inspection: req.params.id,
      },
    });
    console.log(permitData)
    res.json(permitData)
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
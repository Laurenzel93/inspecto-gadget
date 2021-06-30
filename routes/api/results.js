const router = require("express").Router();
const { Result } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get('/');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body.allResults.result)
    const resultData = await Result.create({
      result: req.body.allResults.result,
      notes: req.body.allResults.notes,
      inspection_id: req.body.allResults.inspection_id
    });
    console.log(resultData);
    res.json(resultData);
  } catch (err) {
    res.json(err);
    console.log(err);
  };
});

router.get('/id/:id', withAuth, async (req, res) => {
  try {
    const resultData = await Result.findAll({
      where: {
        id: req.params.id,
      },
    });
    console.log(resultData)
    res.json(resultData)
  } catch (error) {
    console.log(error);
  }
});

router.get('/inspection/:id', withAuth, async (req, res) => {
  try {
    const resultData = await Result.findAll({
      where: {
        inspection_id: req.params.id,
      },
    });
    console.log(resultData)
    res.json(resultData)
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
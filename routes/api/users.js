const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {

  console.trace('start');
  console.log('start but log')

  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    console.log(userData)

    if (!userData) {
      res.status.json({
        message: "Incorrect email or password, please try again",
      });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect email or password, please try again",
      });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });

    console.log(req.session.logged_in)
    console.log("YOURE LOGGED IN HARRY")
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

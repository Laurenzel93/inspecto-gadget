const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../scripts/auth");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

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
      req.session.name = userData.name;
      req.session.role = userData.role;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
    console.log('Login error! ' + err);
  }
});

router.post("/sessions", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    try {
      const sessions = await req.sessionStore.sessionModel.findAll();
      sessions.forEach((element) => {
        let parsedData = JSON.parse(element.dataValues.data).name;
        console.log("============================");
        console.log(element.dataValues.updatedAt);
        if (parsedData) {
          console.log(parsedData);
        }
      });
    } catch (err) {
      console.log('Sessions error! ' + err);
    }
  }

  return;
});

module.exports = router;

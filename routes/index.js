const router = require("express").Router();
const apiRoutes = require("./api");

const { User } = require("../models");

router.post("/api/users/login", async (req, res) => {
  debugger;

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

    console.log(req.session)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });

  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.get("/success", (req, res) => {
  debugger
  console.log("route hit");
  res.send("It works!!!!!")
});

router.get("/api/success", (req, res) => {
  debugger
  console.log("route hit");
  res.json({ message: "success" });
});

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
module.exports = router;

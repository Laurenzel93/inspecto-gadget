const express = require("express");
const session = require('express-session');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Cookie set-up
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// Use cookies
app.use(session(sess));

// Add routes, both API and view
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html")); //path.join(__dirname, "./client/build/index.html")
})

// Connect to server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "orchardlakeinspect",
    pass: "9JJ*ry8RMn$;5,xS"
  }
});

transporter.verify (function (err, succ) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our messages");
  }
});

function welcome (email) {
  let message = {
    from: "orchardlakeinspect@gmail.com",
    to: email,
    subject: "Welcome to Inspecto-Gadget!",
    text: "Thank you for signing up for Inspecto-Gadget",
    hmtl: "<p>Thank you for singing up for Inspecto-Gadget</p>"
  };
  
  transporter.sendMail(message); 
};

function inspection ({ email, details }) {
  let message = {
    from: "orchardlakeinspect@gmail.com",
    to: email,
    subject: "Welcome to Inspecto-Gadget!",
    text: details,
    hmtl: `<p>${details}</p>`
  };
  
  transporter.sendMail(message);
};

module.exports = { welcome, inspection };
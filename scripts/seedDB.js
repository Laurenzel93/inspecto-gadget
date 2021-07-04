const sequelize = require('../config/connection');
const { Note, Inspection, Permit, User, Invoice } = require('../models');

const noteData = require('./notes.json');
const inspectionData = require("./inspections.json");
const invoiceData = require("./invoices.json");
const permitData = require("./permits.json");
const userData = require("./users.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const permit = await Permit.bulkCreate(permitData, {
    individualHooks: true,
    returning: true,
  });
  const inspections = await Inspection.bulkCreate(inspectionData, {
    individualHooks: true,
    returning: true,  
  });
  const invoices = await Invoice.bulkCreate(invoiceData, {
    individualHooks: true,
    returning: true,
  }); 
  const note = await Note.bulkCreate(noteData, {
    individualHooks: true,
    returning: true,
  }) 
  .then(data => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
};

seedDatabase();

const sequelize = require('../config/connection');
const { Comment, Inspection, Permit, Result, Inspector, Contractor, Human } = require('../models');

const commentData = require('./comments.json');
const contractorData = require('./contractors.json');
const inspectionData = require("./inspections.json");
const inspectorData = require("./inspectors.json");
const invoiceData = require("./invoice.json");
const nameData = require("./name.json");
const permitData = require("./permits.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const inspectors = await Inspector.bulkCreate(inspectorData, {
    individualHooks: true,
    returning: true,
  });

  const inspections = await Inspection.bulkCreate(inspectionData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const contractor = await Contractor.bulkCreate(contractorData, {
    individualHooks: true,
    returning: true,
  });

  const invoice = await Invoice.bulkCreate(invoiceData, {
    individualHooks: true,
    returning: true,
  });

  const name = await Name.bulkCreate(nameData, {
    individualHooks: true,
    returning: true,
  });

  const permit = await Permit.bulkCreate(permitData, {
    individualHooks: true,
    returning: true,
  });



  process.exit(0);
};

seedDatabase();

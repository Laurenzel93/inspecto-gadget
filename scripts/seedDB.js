const sequelize = require('../config/connection');
const { Comment, Inspection, Permit, Contractor, User, Invoice, Owner } = require('../models');

const commentData = require('./comments.json');
const contractorData = require('./contractors.json');
const inspectionData = require("./inspections.json");
const invoiceData = require("./invoice_items.json");
const ownerData = require("./owners.json");
const permitData = require("./permits.json");
const userData = require("./users.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
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

  const invoice_item = await Invoice.bulkCreate(invoiceData, {
    individualHooks: true,
    returning: true,
  });

  const owner = await Owner.bulkCreate(ownerData, {
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

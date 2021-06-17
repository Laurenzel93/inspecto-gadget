const sequelize = require("../config/connection");
const { Permit, Inspection, Comment } = require("../models");

const inspectionData = require("./inspections.json");
const permitData = require("./permits.json");
const commentData = require("./comments.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const inspections = await Inspection.bulkCreate(inspectionData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const permits = await Permit.bulkCreate(permitData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
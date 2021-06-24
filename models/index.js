const Note = require("./Note");
const User = require("./User")
const Inspection = require("./Inspection");
const Permit = require("./Permit");
const Result = require("./Result");
const Invoice = require("./Invoice");




Permit.hasMany(Invoice, {
  foreignKey: 'permit_id',
  onDelete: 'CASCADE'
});
Permit.hasOne(Inspection, {
  foreignKey: 'permit_id',
  onDelete: 'CASCADE'
});
Inspection.hasMany(Note, {
  foreignKey: 'inspection_id',
  onDelete: 'CASCADE'
});






module.exports = { Note, Inspection, Permit, Result, User, Invoice };
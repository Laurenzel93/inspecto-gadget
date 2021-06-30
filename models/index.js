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
Invoice.belongsTo(Permit, {
  foreignKey: 'permit_id',
})
Permit.hasOne(Inspection, {
  foreignKey: 'permit_id',
  onDelete: 'CASCADE'
});
Inspection.belongsTo(Permit, {
  foreignKey: 'permit_id',
});
Inspection.hasMany(Note, {
  foreignKey: 'inspection_id',
  onDelete: 'CASCADE'
});
Note.belongsTo(Inspection, {
  foreignKey: 'inspection_id,'
});
Inspection.hasMany(Result, {
  foreignKey: 'inspection_id',
  onDelete: 'CASCADE'
});
Result.belongsTo(Inspection, {
  foreignKey: 'inspection_id,'
})






module.exports = { Note, Inspection, Permit, Result, User, Invoice };
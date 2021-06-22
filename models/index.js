const Comment = require("./Comment");
const Contractor = require("./Contractor");
const User = require("./User")
const Inspection = require("./Inspection");
const Permit = require("./Permit");
const Result = require("./Result");
const Invoice = require("./Invoice");
const Owner = require("./Owner");

Contractor.hasMany(Permit);
Owner.hasMany(Permit);
Permit.belongsTo(Owner);
Permit.belongsTo(Contractor);
Permit.hasMany(Invoice);
Permit.hasOne(Inspection);
Inspection.hasMany(Comment);






module.exports = { Comment, Inspection, Permit, Result, Owner, Contractor, User, Invoice };
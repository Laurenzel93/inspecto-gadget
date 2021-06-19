const Comment = require("./Comment");
const Contractor = require("./Contractor");
const Human = require("./Human")
const Inspection = require("./Inspection");
const Inspector = require("./Inspector");
const Permit = require("./Permit");
const Result = require("./Result");



Inspection.hasOne(Permit);
Permit.belongsTo(Inspection);

Comment.hasOne(Inspection);
Inspection.belongsTo(Comment);

module.exports = { Comment, Inspection, Permit, Result, Inspector, Contractor, Human };
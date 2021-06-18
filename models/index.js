const Comment = require("./Comment");
const Inspection = require("./Inspection");
const Permit = require("./Permit");
const Result = require("./Result");

Inspection.hasOne(Permit);
Permit.belongsTo(Inspection);

Comment.hasOne(Inspection);
Inspection.belongsTo(Comment);

module.exports = { Comment, Inspection, Permit, Result };
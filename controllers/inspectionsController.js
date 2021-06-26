
const { Inspection } = require('../models');

module.exports = {
  findAll: async (req, res) => {
    await Inspection.findAll({
       where: {
          inspector: "Ron Shelton",
      
        }
     })
  },
  findByAddress: async (req, res) => {
   await Inspection.findOne({
       where: {
          inspector: "Ron Shelton",
          address: address,
        }
     })
  } 
}

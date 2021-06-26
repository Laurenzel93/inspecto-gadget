
const { Inspection } = require('../models');

module.exports = {
  findOne: async (req, res) => {
    await Inspection.findOne({
      //  where: {
      //     inspector: "Ron Shelton",
      //     date: "2021-06-24 12:00:00",
      //   }
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

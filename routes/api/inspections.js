const router = require("express").Router();
const { Inspection } = require('../../models');

router.get("/", async (req, res) => {
try {
    const inspectionData = await Inspection.findAll({
       where: {
          inspector: "Ron Shelton",
      
        }
     })
     console.log(inspectionData)
    }catch(error)
    {console.log(error)}
})



module.exports = router;
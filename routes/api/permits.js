const router = require("express").Router();
const { Permit, Invoice, Inspection } = require("../../models");
const withAuth = require('../../scripts/auth');

router.get('/');

router.get("/id/:id", withAuth, async (req, res) => {
  if (req.session.role === "admin") {
    console.log(req.params.id)
    const permitData = await Permit.findOne({
      include: [{all: true}],
       where: {
          id: req.params.id 
       }
    });
    res.json(permitData)
  }
  if (req.session.role === "inspector") {
    try {
      
      const permitData = await Permit.findOne({
        include: [
        
          {
            model: Inspection,
  
          },
          {
            model: Invoice,
  
          }
  
          ],
        
      });
      res.json(permitData)
    } catch (error) {
      console.log(error);
    }
  }
})


module.exports = router;
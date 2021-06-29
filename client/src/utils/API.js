import axios from "axios";



export default {
  getInspections: function() {
    return axios.get("/api/inspections");
  }, 
  
  
}  

import axios from "axios";


export default {
  getInspections: function() {
    return axios.get("/api/inspections");
  }, 
  getAddress: function(address) {
    return axios.get("/api/address");
  }, 
};

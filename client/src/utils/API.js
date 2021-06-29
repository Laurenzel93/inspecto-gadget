import axios from "axios";



export default {
  getInspections: function() {
    return axios.get("/api/inspections");
  }, 
  getInspection: function(id) {
    return axios.get(`/api/inspections/id/${id}`)
  },
  getPermitByID: function(id) {
    return axios.get(`/api/permits/id/${id}`)
  }
};

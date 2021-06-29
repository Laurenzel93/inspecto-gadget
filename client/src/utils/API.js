import axios from "axios";


export default {
  getInspection: function() {
    return axios.get("/api/inspections");
  }, 
  getInspectionByAddress: function(address) {
    return axios.get(`/api/inspections/address/${address}`);
  }, 
  getInspectionByID: function(id) {
    return axios.get(`/api/inspections/id/${id}`)
  }
};

import axios from "axios";



export default {
  getInspections: function() {
    return axios.get(`/api/inspections`);
  }, 
  getInspection: function(id) {
    return axios.get(`/api/inspections/id/${id}`)
  },
  getPermit: function(id) {
    return axios.get(`/api/permits/id/${id}`)
  },
  postResult: function() {
    return axios.get("/api/results")
  },

};

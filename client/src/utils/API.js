import axios from "axios";



export default {
  getInspections: function() {
    return axios.get(`/api/inspections`);
  }, 
  getInspection: function(id) {
    return axios.get(`/api/inspections/id/${id}`)
  },
  getCalender: function() {
    return axios.get('/api/inspections/calender')
  },
  getPermit: function(id) {
    return axios.get(`/api/permits/id/${id}`)
  },
  postResult: function() {
    return axios.get("/api/results")
  },
  createUser: function(username, password, role, name) {
    return axios.post("/api/users/create", {
      username,
      password,
      role,
      name
    })
  }
};

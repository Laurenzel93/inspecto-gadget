import axios from "axios";



export default {
  getInspections: function() {
    return axios.get(`/api/inspections`);
  }, 
  getInspection: function(id) {
    return axios.get(`/api/inspections/id/${id}`);
  },
  getCalender: function() {
    return axios.get('/api/inspections/calender');
  },
  getPermit: function(id) {
    return axios.get(`/api/permits/id/${id}`);
  },
  postResult: function() {
    return axios.get("/api/results");
  },
  getUsers: function() {
    return axios.get('/api/users');
  },
  createUser: function(username, email, password, role, name) {
    return axios.post("/api/users/create", {
      username,
      password,
      email,
      role,
      name
    });
  }
};

import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default  {

  getInspections: function() {
    return axios.get("/api/inspections");
  },
  getAddress: function() {
    return axios.get("/api/address");
  },



}
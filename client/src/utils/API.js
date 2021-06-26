import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default  {

  getInspections: function(req) {
    if (req.session.role == "admin") {
    return axios.get("/api/admin/inspections");
    } else {
      return axios.get("/api/inspections");
    }
  },
  getAddress: function(address) {
    return axios.get("/api/inspections/address/" + address);
  },
  

}

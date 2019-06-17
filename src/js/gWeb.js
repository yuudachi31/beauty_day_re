import axios from "axios";
const apiKey = "CWB-18E07527-D7B2-49F5-AD3A-C0BC672EC24C";

export default axios.create({
  method: "get",
  baseURL: "https://opendata.cwb.gov.tw/api/v1/rest/datastore",
  params: {

  },
  headers: {
    Authorization: apiKey
  }
});

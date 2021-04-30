import axios from "axios";

export default {
  // get info about all 50 (51) states from database and show it when accessing baseServerURL + /api/states -> ex: http://127.0.0.1:3000/api/states
  getAllStates() {
    return axios.get("/api/states").then((response) => {
      return response.data;
    });
  },

  // update 'visited' column value on database when a state checkbox is selected/unselected for an individual state
  setVisited(stateName, visited) {
    let requestData = { visited: visited };
    return axios
      .patch("/api/states/" + stateName, requestData)
      .then((response) => {
        return response.data;
      });
  },

  // get info about only one state -> ex: http://localhost:8080/#/api/state/California
  getOneState(stateName) {
    return axios.get("/api/state/" + stateName).then((response) => {
      return response.data;
    });
  },
};

import axios from "axios";

export default axios.create({
  baseURL: "https://tims-board-games-api.herokuapp.com/api/",
  headers: {},
});

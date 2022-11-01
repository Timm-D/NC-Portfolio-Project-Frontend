import axios from "axios";

const baseURL = axios.create({
    baseURL: "https://tims-board-games-api.herokuapp.com/api"
});
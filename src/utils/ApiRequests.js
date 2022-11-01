import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://tims-board-games-api.herokuapp.com/api",
});

export const getAllReviews = (reviews) => {
  return baseURL.get(`/all_reviews/${reviews}`).then((res) => {
    return res.data;
  });
};

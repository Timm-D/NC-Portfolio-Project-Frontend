import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://tims-board-games-api.herokuapp.com/api/",
});

export const getAllReviews = (category) => {
  let path = "/reviews";
  if (category.length !== 0) {
    path += `?category=${category}`;
  }
  return baseURL.get(`${path}`).then((res) => {
    return res.data.reviews;
  });
};

export const getAllCategories = () => {
  return baseURL.get("/categories").then((res) => {
    return res.data.categories;
  });
};

import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://tims-board-games-api.herokuapp.com/api/",
});

export const getAllReviews = (category) => {
  let path;
  if (category === "reviews" || category === undefined ) {
    path = "";
  } else {
    path = `?category=${category}`;
  }
  return baseURL.get(`/reviews${path}`).then((res) => {
    return res.data.reviews;
  });
};

export const getAllCategories = () => {
  return baseURL.get("/categories").then((res) => {
    return res.data.categories;
  });
};

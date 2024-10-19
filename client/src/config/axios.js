import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  },
});

const commentsAxios = axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-type": "application/json",
  },
});

export { postsAxios, commentsAxios };

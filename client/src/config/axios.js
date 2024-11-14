import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://posts.com",
  headers: {
    "Content-type": "application/json",
  },
});

export { customAxios };

import { generatePath } from "react-router-dom";

import { postsAxios } from "../../config/axios";
import { API_ENDPOINTS } from ".";

const postsApi = {
  async getAll(signal) {
    return await postsAxios.get(API_ENDPOINTS.POSTS.LIST, {
      signal,
    });
  },
  async getOne(id, signal) {
    return await postsAxios.get(generatePath(API_ENDPOINTS.POSTS.ONE, { id }), {
      signal,
    });
  },
  async create(data, signal) {
    return await postsAxios.post(
      API_ENDPOINTS.POSTS.LIST,
      { title: data },
      {
        signal,
      }
    );
  },
};

export default postsApi;

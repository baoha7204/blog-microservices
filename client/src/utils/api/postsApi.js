import { generatePath } from "react-router-dom";

import { customAxios } from "../../config/axios";
import { API_ENDPOINTS } from ".";

const postsApi = {
  async getAll(signal) {
    return await customAxios.get(API_ENDPOINTS.POSTS.LIST, {
      signal,
    });
  },
  async getOne(id, signal) {
    return await customAxios.get(
      generatePath(API_ENDPOINTS.POSTS.ONE, { id }),
      {
        signal,
      }
    );
  },
  async create(data, signal) {
    return await customAxios.post(
      API_ENDPOINTS.POSTS.LIST,
      { title: data },
      {
        signal,
      }
    );
  },
};

export default postsApi;

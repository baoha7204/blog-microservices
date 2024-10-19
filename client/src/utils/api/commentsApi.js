import { generatePath } from "react-router-dom";

import { commentsAxios } from "../../config/axios";
import { API_ENDPOINTS } from ".";

const commentsApi = {
  async getAll(signal) {
    return await commentsAxios.get(API_ENDPOINTS.COMMENTS.LIST, {
      signal,
    });
  },
  async getOne(id, commentId, signal) {
    return await commentsAxios.get(
      generatePath(API_ENDPOINTS.COMMENTS.ONE, { id, commentId }),
      {
        signal,
      }
    );
  },
  async create(id, data, signal) {
    return await commentsAxios.post(
      generatePath(API_ENDPOINTS.COMMENTS.LIST, { id }),
      { content: data },
      {
        signal,
      }
    );
  },
};

export default commentsApi;

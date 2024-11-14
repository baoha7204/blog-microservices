import { generatePath } from "react-router-dom";

import { customAxios } from "../../config/axios";
import { API_ENDPOINTS } from ".";

const commentsApi = {
  async getAllByPost(postid, signal) {
    return await customAxios.get(
      generatePath(API_ENDPOINTS.COMMENTS.LIST, { id: postid }),
      {
        signal,
      }
    );
  },
  async getOne(postId, commentId, signal) {
    return await customAxios.get(
      generatePath(API_ENDPOINTS.COMMENTS.ONE, { id: postId, commentId }),
      {
        signal,
      }
    );
  },
  async create(id, data, signal) {
    return await customAxios.post(
      generatePath(API_ENDPOINTS.COMMENTS.LIST, { id }),
      { content: data },
      {
        signal,
      }
    );
  },
};

export default commentsApi;

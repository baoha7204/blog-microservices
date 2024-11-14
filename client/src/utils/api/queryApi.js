import { API_ENDPOINTS } from ".";
import { customAxios } from "../../config/axios";

const queryApi = {
  async getPosts(signal) {
    return await customAxios.get(API_ENDPOINTS.POSTS.LIST, { signal });
  },
};

export default queryApi;

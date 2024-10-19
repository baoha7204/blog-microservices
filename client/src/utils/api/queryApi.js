import { API_ENDPOINTS } from ".";
import { queryAxios } from "../../config/axios";

const queryApi = {
  async getPosts(signal) {
    return await queryAxios.get(API_ENDPOINTS.POSTS.LIST, { signal });
  },
};

export default queryApi;

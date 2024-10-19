export const API_ENDPOINTS = {
  POSTS: { LIST: "posts", ONE: "posts/:id" },
  COMMENTS: {
    LIST: "posts/:id/comments",
    ONE: "posts/:id/comments/:commentId",
  },
};

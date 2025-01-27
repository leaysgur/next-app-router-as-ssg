export const getAllPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return ["hello", "world", "export"];
};

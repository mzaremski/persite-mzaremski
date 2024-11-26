
export const getPosts = () => {
  const rawPosts = import.meta.glob(
    "./routes/blog.*.mdx",
    { eager: true }
  );
  
  const posts = Object.entries(rawPosts).map(([path, data]) => {
    return data
  }).map(({ meta }) => meta[0]);  

  return posts;
} 

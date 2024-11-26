
type Post = {
  meta: {
    title: string;
    description: string;
  };
  path: string;
} 

export const getPosts = (): Post[] => {
  const rawPosts = import.meta.glob(
    "./routes/posts.*.mdx",
    { eager: true }
  );
  
  return Object.entries(rawPosts).map(([path, data]) => {
    const {title, description} = (data as any).meta[0];
    const postFileName = path.replace("routes/posts.", "").replace(".mdx", "");

    return {
      meta: {
        title,
        description,
      },
      path: `/posts/${postFileName}`,
    }
  });
} 

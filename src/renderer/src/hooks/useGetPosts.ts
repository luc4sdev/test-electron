import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Error loading posts');
  }

  return response.json();
};

export function useGetPosts() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
}

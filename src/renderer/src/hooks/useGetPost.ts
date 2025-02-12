import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';


const fetchPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!response.ok) {
    throw new Error('Error fetching post');
  }

  return response.json();
};

export function useGetPost(id: string) {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
}

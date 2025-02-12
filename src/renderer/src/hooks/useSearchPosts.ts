import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';



const fetchPostsBySearch = async (searchTerm: string): Promise<Post[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
  
  if (!response.ok) {
    throw new Error('Error fetching posts');
  }

  return response.json();
};

export function useSearchPosts(searchTerm: string) {
  return useQuery<Post[]>({
    queryKey: ['searchPosts', searchTerm],
    queryFn: () => fetchPostsBySearch(searchTerm),
    enabled: !!searchTerm,
  });
}

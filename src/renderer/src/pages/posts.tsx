import { useQuery } from '@tanstack/react-query';
import { PostCard } from '../components/PostCard';
import { PostCardSkeleton } from '../components/PostCardSkeleton';
import { MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const { data: posts, isLoading, isError } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Error loading posts');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="p-8 bg-zinc-900 text-zinc-100 h-screen overflow-y-auto">
        <div className='flex justify-center items-center mb-6 gap-3'>
          <h1 className="text-5xl font-bold text-center">Posts</h1>
          <Link
            to='/search'
            className=' bg-zinc-200 hover:bg-zinc-400 rounded-md flex justify-center items-center'
          >
            <MagnifyingGlass className='size-10 font-extrabold text-zinc-950' />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-8">
        Error loading posts.
      </div>
    );
  }

  return (
    <div className="p-8 dark:bg-zinc-900 text-zinc-100 h-screen overflow-y-auto">
      <div className='flex justify-center items-center mb-6 gap-3'>
        <h1 className="text-5xl font-bold text-center">Posts</h1>
        <Link
          to='/search'
          className=' bg-zinc-800 hover:bg-zinc-700 rounded-md'
        >
          <MagnifyingGlass className='size-10 font-extrabold text-zinc-100' />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}
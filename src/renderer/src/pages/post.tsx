import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'phosphor-react';
import { useParams, Link } from 'react-router-dom';
import { PostCardSkeleton } from '../components/PostCardSkeleton';

interface Post {
  id: number;
  title: string;
  body: string;
}


export function Post() {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, isError } = useQuery<Post>({
    queryKey: ['post', id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error('Error loading post');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="p-8 bg-zinc-900 min-h-screen flex flex-col gap-5">
        <Link to="/">
          <ArrowLeft className="w-6 h-6 text-white hover:text-zinc-200" />
        </Link>
        <PostCardSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 bg-zinc-900 min-h-screen">
        <Link to="/">
          <ArrowLeft className="w-6 h-6 text-white hover:text-zinc-200" />
        </Link>
        <div className="text-center text-red-500 mt-8">
          Error loading post.
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-zinc-900 min-h-screen">
      <Link to="/">
        <ArrowLeft className="w-6 h-6 text-white hover:text-zinc-200" />
      </Link>
      <div className="max-w-2xl mx-auto bg-zinc-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-gray-100 font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-200">{post?.body}</p>
      </div>
    </div>
  );
}
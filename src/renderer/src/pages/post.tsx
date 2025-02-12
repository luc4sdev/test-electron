import { useParams } from 'react-router-dom';
import { PostCardSkeleton } from '../components/PostCardSkeleton';
import { useGetPost } from '../hooks/useGetPost';

export function Post() {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, isError } = useGetPost(id!);

  if (isLoading) {
    return (
      <div className="p-8 bg-zinc-100 dark:bg-zinc-800 min-h-screen">
        <PostCardSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 bg-zinc-100 dark:bg-zinc-800 min-h-screen">
        <div className="text-center text-red-500 mt-8">
          Error loading post.
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-zinc-100 dark:bg-zinc-800 min-h-screen">
      <div className="max-w-2xl mx-auto bg-zinc-300 dark:bg-zinc-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl dark:text-gray-100 font-bold mb-4">{post?.title}</h1>
        <p className="dark:text-gray-200">{post?.body}</p>
      </div>
    </div>
  );
}
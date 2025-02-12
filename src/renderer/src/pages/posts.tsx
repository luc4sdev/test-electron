import { PostCard } from '../components/PostCard';
import { PostCardSkeleton } from '../components/PostCardSkeleton';
import { useGetPosts } from '../hooks/useGetPosts';


export function Posts() {
  const { data: posts, isLoading, isError } = useGetPosts();

  if (isLoading) {
    return (
      <div className="p-8 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 h-screen overflow-y-auto">
        <div className='flex justify-center items-center mb-6 gap-3'>
          <h1 className="text-5xl font-bold text-center">Posts</h1>
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
    <div className="p-8 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 h-screen overflow-y-auto">
      <div className='flex justify-center items-center mb-6 gap-3'>
        <h1 className="text-5xl font-bold text-center">Posts</h1>
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
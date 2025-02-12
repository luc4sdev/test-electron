import { useState } from 'react';
import { PostCard } from '../components/PostCard';
import { PostCardSkeleton } from '../components/PostCardSkeleton';
import { SearchInput } from '../components/SearchInput';
import { useSearchPosts } from '../hooks/useSearchPosts';


export function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: posts, isLoading, isError } = useSearchPosts(searchTerm);


    return (
        <div className="p-8 bg-zinc-100 dark:bg-zinc-800 h-screen overflow-y-auto">
            <h1 className="text-5xl font-bold mb-6 text-center dark:text-zinc-100">
                Search Posts
            </h1>
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <PostCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {isError && (
                <div className="text-center text-red-500 mt-8">
                    Error to find post.
                </div>
            )}

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

            {!isLoading && !isError && posts?.length === 0 && (
                <div className="text-center dark:text-zinc-100 mt-8">
                    No posts found.
                </div>
            )}
        </div>
    );
}
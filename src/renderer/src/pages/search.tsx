import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PostCard } from '../components/PostCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import { PostCardSkeleton } from '../components/PostCardSkeleton';

interface Post {
    id: number;
    title: string;
    body: string;
}

export function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchPosts = async (): Promise<Post[]> => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
        );
        if (!response.ok) {
            throw new Error('Error to find post');
        }
        return response.json();
    };

    const { data: posts, isLoading, isError } = useQuery<Post[]>({
        queryKey: ['posts', searchTerm],
        queryFn: fetchPosts,
        enabled: !!searchTerm,
    });

    return (
        <div className="p-8 bg-zinc-900 h-screen overflow-y-auto">
            <Link to="/">
                <ArrowLeft className="w-6 h-6 text-white hover:text-zinc-200" />
            </Link>
            <h1 className="text-5xl font-bold mb-6 text-center text-zinc-100">
                Search Posts
            </h1>

            <div className="max-w-2xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {isLoading && (
                <div className="p-8 bg-zinc-900 min-h-screen flex flex-col gap-5">
                    <Link to="/">
                        <ArrowLeft className="w-6 h-6 text-white hover:text-zinc-200" />
                    </Link>
                    <PostCardSkeleton />
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
                <div className="text-center text-zinc-100 mt-8">
                    No posts found.
                </div>
            )}
        </div>
    );
}
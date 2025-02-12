import { Link } from 'react-router-dom';

interface PostCardProps {
    id: number;
    title: string;
    body: string;
}

export function PostCard({ id, title, body }: PostCardProps) {
    return (
        <Link
            to={`/post/${id}`}
            className="bg-zinc-300 dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
        >
            <h2 className="text-xl dark:text-zinc-100 font-semibold mb-2">{title}</h2>
            <p className="dark:text-zinc-200 text-ellipsis">{body}</p>
        </Link>
    );
}
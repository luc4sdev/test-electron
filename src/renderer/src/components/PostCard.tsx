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
            className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <h2 className="text-xl text-zinc-100 font-semibold mb-2">{title}</h2>
            <p className="text-zinc-200">{body.slice(0, 100)}...</p>
        </Link>
    );
}
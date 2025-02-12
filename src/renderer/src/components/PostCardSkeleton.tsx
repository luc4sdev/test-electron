export function PostCardSkeleton() {
    return (
        <div className="bg-zinc-300 dark:bg-zinc-700 p-6 rounded-lg shadow-lg animate-pulse">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-600 rounded mb-4"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded mb-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded mb-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded"></div>
        </div>
    );
}
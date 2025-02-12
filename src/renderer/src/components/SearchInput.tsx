interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

export function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
    return (
        <div className="max-w-2xl mx-auto mb-8">
            <input
                type="text"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
        </div>
    )
}
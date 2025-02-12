import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { ArrowLeft, MagnifyingGlass, Moon, Sun } from 'phosphor-react';

export default function Layout() {
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation()

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            <header className="p-4 flex justify-between">
                {location.pathname !== '/' ? (
                    <Link
                        to='/'
                        className='p-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer'
                    >
                        <ArrowLeft className="size-5 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-200" />
                    </Link>
                ) :
                    (<div className='flex-1' />)
                }
                <div className='flex justify-center items-center gap-3'>
                    <Link
                        to='/search'
                        className='p-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer'
                    >
                        <MagnifyingGlass className='size-5 text-zinc-900 dark:text-zinc-100' />
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer"
                    >
                        {isDarkMode ? <Sun className='size-5 text-yellow-500' /> : <Moon className='size-5 text-blue-500' />}
                    </button>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Posts } from './pages/posts';
import { Post } from './pages/post';
import { Search } from './pages/search';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/search" element={<Search />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}
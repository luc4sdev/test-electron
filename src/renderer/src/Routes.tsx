import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Posts } from './pages/posts';
import { Post } from './pages/post';
import { Search } from './pages/search';
import Layout from './pages/layout';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Posts />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/post/:id" element={<Post />} />
                </Route>
            </Routes>
        </Router>
    );
}
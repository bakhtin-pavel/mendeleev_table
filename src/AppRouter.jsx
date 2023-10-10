import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout, Main } from './pages';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/:id' element={<Main />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRouter;
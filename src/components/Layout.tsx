import HomeIcon from 'assets/icons/home.svg';
import {Background} from 'components/common/Background';
import IndexPage from 'components/pages/IndexPage';
import NotFoundPage from 'components/pages/NotFoundPage';
import React, {Suspense} from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';

const GameMakerPage = React.lazy(() => import(/* webpackChunkName: "gamemaker" */ 'components/pages/GameMakerPage'));
const TiBasicPage = React.lazy(() => import(/* webpackChunkName: "tibasic" */ 'components/pages/TiBasicPage'));

const renderPageRouter = () => (
    <Suspense fallback={<section />}>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/gamemaker" element={<GameMakerPage />} />
            <Route path="/tibasic" element={<TiBasicPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>
);

const renderFooter = () => (
    <footer id="footer" className="section">
        <Routes>
            <Route path="/" element={<Outlet />} />
            <Route path="*" element={
                <Link to="/" className="home-button" title="Home">
                    <HomeIcon className="home-icon" />
                </Link>
            } />
        </Routes>
        © 2011-{new Date().getFullYear()} Villermen
    </footer>
);

export default () => (
    <BrowserRouter basename="/home">
        <div className="container">
            <Background />
            {renderPageRouter()}
            {renderFooter()}
        </div>
    </BrowserRouter>
);

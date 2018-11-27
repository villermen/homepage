import * as React from 'react';
import {Suspense} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import IndexPage from 'components/pages/IndexPage';
import NotFoundPage from 'components/pages/NotFoundPage';
import Background from 'components/common/Background';
import HomeIcon from 'assets/icons/home.svg';

const GameMakerPage = React.lazy(() => import(/* webpackChunkName: "gamemaker" */ 'components/pages/GameMakerPage'));
const TiBasicPage = React.lazy(() => import(/* webpackChunkName: "tibasic" */ 'components/pages/TiBasicPage'));

const renderPageRouter = () => (
    <Suspense fallback={<section />}>
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/gamemaker" render={() => <GameMakerPage />} />
            <Route path="/tibasic" render={() => <TiBasicPage />} />
            <Route component={NotFoundPage} />
        </Switch>
    </Suspense>
);

const renderFooter = () => (
    <footer id="footer" className="section">
        <Switch>
            <Route exact path="/" />
            <Route>
                <Link to="/" className="home-button" title="Home">
                    <HomeIcon className="home-icon" />
                </Link>
            </Route>
        </Switch>
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

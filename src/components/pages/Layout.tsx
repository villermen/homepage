import * as React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import IndexPage from 'components/pages/IndexPage';
import NotFoundPage from 'components/pages/NotFoundPage';

// TODO: Code split pages
const renderPageRouter = () => (
    <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default () => (
    <BrowserRouter>
        <div className="container">
            <div className="background" />
            {renderPageRouter()}
            <footer id="footer" className="section">
                <Switch>
                    <Route exact path="/" />
                    <Route>
                        <Link to="/" className="home-button" title="Home">
                            <img src="images/home.png" alt="Home" />
                        </Link>
                    </Route>
                </Switch>
                © 2011-{new Date().getFullYear()} Villermen
            </footer>
        </div>
    </BrowserRouter>
);

import {RandomAction} from 'components/common/RandomAction';
import React from 'react';

// TODO: About that status code... <meta name="robots" content="noindex" /> in <head> (portal?)
export default () => (
    <section className="center">
        <p>
            I'm Villermen, I sometimes <RandomAction />.
        </p>
        <p>
            But I can't find that page you're looking for.
        </p>
        <h1>
            404 - Page not Found
        </h1>
    </section>
);

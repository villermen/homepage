import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    type: string,
    title: string,
    image: string,
    href: string,
    useRouter?: boolean,
}

export default (props: Props) => {
    const linkProps = {
        className: `project-button project-button--${props.type}`,
        href: props.href,
        title: props.title,
        children: <img className="project-image" src={props.image} alt={props.title} />,
    };

    return props.useRouter
        ? <Link to={props.href} {...linkProps} />
        : <a href={props.href} {...linkProps} />;
}

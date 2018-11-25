import * as React from 'react';
import {PureComponent, ReactNode} from 'react';
import Masonry from 'masonry-layout';

interface Props {
    children: ReactNode,
}

export default class ProjectButtonContainer extends PureComponent<Props, {}> {
    containerElement?: HTMLElement;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        new Masonry(this.containerElement, {
            itemSelector: '.project-button',
            columnWidth: 155,
            fitWidth: true,
            transitionDuration: 0,
        });
    }

    render() {
        return (
            <div
                className="project-button-container"
                ref={(element) => this.containerElement = element}
            >
                {this.props.children}
            </div>
        );
    }
}

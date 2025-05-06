import Masonry from 'masonry-layout';
import React, {ReactElement, ReactNode} from 'react';

interface ProjectButtonContainer {
    children: ReactNode,
}

export function ProjectButtonContainer(props: ProjectButtonContainer): ReactElement {
    function initializeMasonry(containerElement: HTMLElement): void {
        new Masonry(containerElement, {
            itemSelector: '.project-button',
            fitWidth: true,
            columnWidth: 150,
            transitionDuration: 0, // Done through CSS
        });
    }

    return (
        <div
            className="project-button-container"
            ref={initializeMasonry}
        >
            {props.children}
        </div>
    );
}

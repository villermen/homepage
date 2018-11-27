import * as React from 'react';

const turnDuration = 100000; // 100s

export default class Background extends React.PureComponent {
    background?: HTMLElement;
    animationFrameRequestId?: number;

    componentDidMount() {
        window.requestAnimationFrame(this.updateAnimation);
    }

    componentWillUnmount() {
        if (this.animationFrameRequestId) {
            window.cancelAnimationFrame(this.animationFrameRequestId);
        }
    }

    updateAnimation = () => {
        if (this.background) {
            const rotation = new Date().getTime() % turnDuration / turnDuration;
            this.background.style.transform = `rotate(${rotation}turn)`;
        }

        window.requestAnimationFrame(this.updateAnimation);
    };

    render() {
        return (
            <div className="background" ref={(background) => this.background = background} />
        );
    }
}

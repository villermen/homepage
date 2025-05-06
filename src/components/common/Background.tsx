import React, {ReactElement, useEffect, useRef, useState} from 'react';

const turnDuration = 100000; // 100s

export function Background(): ReactElement {
    const [animationRequestId, setAnimationRequestId] = useState<number>(null);
    const backgroundElement = useRef<HTMLDivElement>(null);

    function updateAnimation(): void {
        if (backgroundElement.current) {
            const rotation = new Date().getTime() % turnDuration / turnDuration;
            backgroundElement.current.style.transform = `rotate(${rotation}turn)`;
        }

        setAnimationRequestId(window.requestAnimationFrame(updateAnimation));
    }

    useEffect(() => {
        updateAnimation();

        return () => {
            if (!animationRequestId) {
                return;
            }

            window.cancelAnimationFrame(animationRequestId);
        };
    }, []);

    return (
        <div className="background" ref={backgroundElement} />
    );
}

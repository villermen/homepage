import React, {ReactElement, useEffect, useState} from 'react';

const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

interface ClockState {
    hours: string,
    minutes: string,
    seconds: string,
    date: string,
    timestamp: string,
    nextUpdate: number,
}

function getClockState(): ClockState {
    const dateInstance = new Date();

    return {
        hours: ('0' + dateInstance.getHours()).slice(-2),
        minutes: ('0' + dateInstance.getMinutes()).slice(-2),
        seconds: ('0' + dateInstance.getSeconds()).slice(-2),
        date: weekdays[dateInstance.getDay()] + ', ' + months[dateInstance.getMonth()] + ' ' + dateInstance.getDate(),
        timestamp: String(Math.floor(dateInstance.getTime() / 1000)),
        nextUpdate: 1000 - dateInstance.getMilliseconds(),
    };
}

export function Clock(): ReactElement {
    const [state, setState] = useState(getClockState());
    const [timeoutId, setTimeoutId] = useState<number>(null);

    function updateClock(): void {
        const newState = getClockState();
        setState(newState);
        setTimeoutId(window.setTimeout(updateClock, newState.nextUpdate));
    }

    useEffect(() => {
        updateClock();

        return () => {
            if (!timeoutId) {
                return;
            }

            window.clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="clock">
            <div className="clock__digit clock__digit-hours">{state.hours}</div>
            <div className="clock__digit clock__digit-minutes">{state.minutes}</div>
            <div className="clock__digit clock__digit-seconds">{state.seconds}</div>
            <div className="clock__date">{state.date}</div>
            <div className="clock__timestamp">{state.timestamp}</div>
        </div>
    );
}

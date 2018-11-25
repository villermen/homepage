import * as React from 'react';

const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

function getClockState() {
    const date = new Date();

    const clockHours = ('0' + date.getHours()).slice(-2);
    const clockMinutes = ('0' + date.getMinutes()).slice(-2);
    const clockSeconds = ('0' + date.getSeconds()).slice(-2);
    const clockDate = weekdays[date.getDay()] + ', ' +
        months[date.getMonth()] + ' ' + date.getDate();
    const clockTimestamp = String(Math.floor(date.getTime() / 1000));

    return {
        clockHours,
        clockMinutes,
        clockSeconds,
        clockDate,
        clockTimestamp
    };
}

interface State {
    clockHours: string,
    clockMinutes: string,
    clockSeconds: string,
    clockDate: string,
    clockTimestamp: string,
    timeoutId?: number,
}

export default class Clock extends React.PureComponent<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            ...getClockState(),
            timeoutId: this.scheduleClockUpdate(),
        };
    }

    scheduleClockUpdate() {
        return window.setTimeout(() => {
            this.setState({
                ...getClockState(),
                timeoutId: this.scheduleClockUpdate(),
            });
        }, 1000 - (new Date()).getMilliseconds());
    }

    componentWillUnmount() {
        if (this.state.timeoutId) {
            window.clearTimeout(this.state.timeoutId);
        }
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__digit clock__digit-hours">{this.state.clockHours}</div>
                <div className="clock__digit clock__digit-minutes">{this.state.clockMinutes}</div>
                <div className="clock__digit clock__digit-seconds">{this.state.clockSeconds}</div>
                <div className="clock__date">{this.state.clockDate}</div>
                <div className="clock__timestamp">{this.state.clockTimestamp}</div>
            </div>
        );
    }
}

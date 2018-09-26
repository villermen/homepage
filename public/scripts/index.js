document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-buttons').forEach(function(buttonContainer) {
        new Masonry(buttonContainer, {
            itemSelector: '.project-button',
            columnWidth: 155,
            fitWidth: true,
            transitionDuration: 0,
        });
    });

    if (document.querySelector('.clock')) {
        // Clock
        const weekdays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const hoursElement = document.querySelector('.clock__digit--hours');
        const minutesElement = document.querySelector('.clock__digit--minutes');
        const secondsElement = document.querySelector('.clock__digit--seconds');
        const dateElement = document.querySelector('.clock__date');
        const timestampElement = document.querySelector('.clock__timestamp');

        // Get it, date? Tough crowd today...
        function upDate() {
            const date = new Date();
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);
            const dateString = weekdays[date.getDay()] + ', ' +
                months[date.getMonth()] + ' ' + date.getDate();
            const timestamp = String(Math.floor(date.getTime() / 1000));

            if (hoursElement.textContent !== hours) {
                hoursElement.textContent = hours;
            }
            if (minutesElement.textContent !== minutes) {
                minutesElement.textContent = minutes;
            }
            if (secondsElement.textContent !== seconds) {
                secondsElement.textContent = seconds;
            }
            if (dateElement.textContent !== dateString) {
                dateElement.textContent = dateString;
            }
            if (timestampElement.textContent !== timestamp) {
                timestampElement.textContent = timestamp;
            }

            // Schedule next update at it's changing point
            setTimeout(upDate, 1000 - date.getMilliseconds());
        }

        upDate();
    }
});

function countdownTimer(number = 100, format = 'seconds') {
  const daysElement = document.querySelector('.days');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case 'seconds':
        return timer(number);
      case 'minutes':
        return timer(number * 60);
      case 'hours':
        return timer(number * 60 * 60);
      case 'days':
        return timer(number * 60 * 60 * 24);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
}

countdownTimer(30, 'days');

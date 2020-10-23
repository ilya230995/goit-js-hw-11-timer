const timerRef = document.querySelector("#timer-1");
const fieldRef = document.querySelectorAll(".field");
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minutesRef = document.querySelector('[data-value="mins"]');
const secondsRef = document.querySelector('[data-value="secs"]');

timerRef.style.display = "flex";
fieldRef.forEach((div) => {
  div.style.display = "flex";
  div.style.flexDirection = "column";
});

const countdownTimer = () => {
  const targetDate = new Date("Oct 26, 2020");
  setInterval(() => {
    const currentDate = new Date();
    const deltaTime = targetDate - currentDate;
    updateClockFace(deltaTime);
  }, 1000);
};

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${mins}`;
  secondsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, 0);
}

countdownTimer();

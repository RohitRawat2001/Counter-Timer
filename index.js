const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const containerTimer = document.querySelector(".containerTimer");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const counterTimer = () => {
    // Generating current Date in mm/dd/yyyy
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();
    now = `${mm}/${dd}/${yyyy}`;

    // Taking Target Date from User
    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    //   Checking if Target date is for next year
    if (now > targetDate)
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

    const intervalId = setInterval(() => {
        const nextDay = new Date(targetDate).getTime();     //getTime = milliseconds
        const TodayTime = new Date().getTime();

        const difference = nextDay - TodayTime;
        const leftDays = Math.floor(difference / day);
        const leftHours = Math.floor((difference % day) / hour);
        const leftMinutes = Math.floor(Math.floor((difference % hour) / minute));
        const leftSeconds = Math.floor((difference % minute) / second);

        daysElement.innerText = leftDays;
        hoursElement.innerText = leftHours;
        minutesElement.innerText = leftMinutes;
        secondElement.innerText = leftSeconds;

        // Stop Set Interval after reaching the target time
        if (difference < 0) {
            containerTimer.style.display = "none";
            heading.innerText = "Time's Up";
            clearInterval(intervalId);
        }

    }, 0)
}

counterTimer()
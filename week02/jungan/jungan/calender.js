const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const currentMonth = document.querySelector(".currentMonth");
const currentMonthHeader = currentMonth.querySelector("h2");
const currentMonthDates = currentMonth.querySelector(".calendar-dates")

const prevMonth = document.querySelector(".prevMonth");
const prevMonthHeader = prevMonth.querySelector("h2");
const prevMonthDates = prevMonth.querySelector(".calendar-dates")

const nextMonth = document.querySelector(".nextMonth");
const nextMonthHeader = nextMonth.querySelector("h2");
const nextMonthDates = nextMonth.querySelector(".calendar-dates")

const today = new Date(); // 현재 날짜를 나타내는 Date 객체
let todayMonth = today.getMonth(); // 현재 월을 나타내는 값
let todayYear = today.getFullYear();

let beforeMonth;
let beforeYear;


let afterMonth;
let afterYear;


function getBeforeAfterMonth() {
  // 이전 달 계산
  if (todayMonth === 0) {
    beforeMonth = 11;
    beforeYear = todayYear - 1;
  } else {
    beforeMonth = todayMonth - 1;
    beforeYear = todayYear;
  }

  // 다음 달 계산
  if (todayMonth === 11) {
    afterMonth = 0;
    afterYear = todayYear + 1;
  } else {
    afterMonth = todayMonth + 1;
    afterYear = todayYear;
  }
}

getBeforeAfterMonth();



function renderCalender(year, month, monthDates, monthHeader){
    monthDates.innerHTML = ""; //없으면 날짜가 계속 쌓인다
    monthHeader.textContent = `${year}년 ${month + 1}월`;
    const firstDayOfMonth = new Date(year, month, 1);//현재 달의 첫번째 날
    const startDayOfWeek = firstDayOfMonth.getDay();//첫번째 날의 요일
    // 달에 몇일까지 있는지 어떻게 아냐? day 는 1부터 31까지 있음 -> 0일이면 그 전 달의 마지막 날이 나온다?
    const daysInMonth = new Date(year,month+1,0).getDate();
    //첫번째 날의 요일이 올 때까지 빈칸
    for(let i = 0; i<startDayOfWeek; i++){
        const emptyDate = document.createElement("div");
        monthDates.appendChild(emptyDate)
    }
    //달의 날짜들 추가
    for(let i = 1; i<=daysInMonth;i++){
        const date = document.createElement("div");
        date.textContent = i;
        date.classList.add("date");
        monthDates.appendChild(date);
    }

}

renderCalender(todayYear, todayMonth, currentMonthDates, currentMonthHeader);
renderCalender(beforeYear, beforeMonth, prevMonthDates, prevMonthHeader);
renderCalender(afterYear, afterMonth, nextMonthDates, nextMonthHeader);

prevBtn.addEventListener("click", () => {
  todayMonth--;
  if (todayMonth < 0) {
    todayMonth = 11;
    todayYear--;
  }

  getBeforeAfterMonth();
  renderCalender(todayYear, todayMonth, currentMonthDates, currentMonthHeader);
  renderCalender(beforeYear, beforeMonth, prevMonthDates, prevMonthHeader);
  renderCalender(afterYear, afterMonth, nextMonthDates, nextMonthHeader);
});

nextBtn.addEventListener("click", () => {
  todayMonth++;
  if (todayMonth > 11) {
    todayMonth = 0;
    todayYear++;
  }

  getBeforeAfterMonth();
  renderCalender(todayYear, todayMonth, currentMonthDates, currentMonthHeader);
  renderCalender(beforeYear, beforeMonth, prevMonthDates, prevMonthHeader);
  renderCalender(afterYear, afterMonth, nextMonthDates, nextMonthHeader);
});




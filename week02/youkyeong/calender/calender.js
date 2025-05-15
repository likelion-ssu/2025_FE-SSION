// 코드가 바로 시작됨
(() => {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const calendarGrid = document.getElementById("calendarGrid");
  const dateTitle = document.getElementById("dateTitle");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthSelect = document.getElementById("monthSelect");

  let currentDate = new Date(); //자바스크립트 내장 함수

  // 사용자가 월을 선택할 수 있도록 초기화
  function initMonthSelect() {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${i}월`;
      monthSelect.appendChild(option); // 부모 자식에 자식 노드를 추가하는 메서드
    }
  }

  // 윤달 포함해서 달의 마지막 날짜 계산
  function getLastDate(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // 달력 그리기
  function drawCalendar(date) {
    calendarGrid.innerHTML = ""; //초기화

    const year = date.getFullYear();
    const month = date.getMonth(); // 0부터 시작(0은 1월)
    const today = new Date();

    // 날짜 제목 표시 (년 월)
    dateTitle.textContent = `${year}년 ${month + 1}월`;

    // 월 선택 상태 동기화
    monthSelect.value = month + 1;

    // 요일 헤더 출력
    dayNames.forEach((day) => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day-name");
      dayDiv.textContent = day;
      calendarGrid.appendChild(dayDiv);
    });

    // 이번 달 1일의 요일 구하기
    const firstDay = new Date(year, month, 1).getDay();

    // 이번 달 마지막 날짜 구하기
    const lastDate = getLastDate(year, month + 1);

    // 빈 칸(이전 달 날짜 안보이게) 표시
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty");
      calendarGrid.appendChild(emptyDiv);
    }

    // 날짜 채우기
    for (let i = 1; i <= lastDate; i++) {
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("date");
      dateDiv.textContent = i;

      // 오늘 날짜면, 강조 표시
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dateDiv.classList.add("today");
      }

      calendarGrid.appendChild(dateDiv);
    }
  }

  // addEventLister 메서드 사용

  // 이전 달로 이동
  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    drawCalendar(currentDate);
  });

  // 다음 달로 이동
  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    drawCalendar(currentDate);
  });

  // 월 선택시 해당 월로 이동
  monthSelect.addEventListener("change", () => {
    const selectedMonth = parseInt(monthSelect.value, 10) - 1;
    currentDate.setMonth(selectedMonth);
    drawCalendar(currentDate);
  });

  // 초기화
  initMonthSelect();
  drawCalendar(currentDate);
})();

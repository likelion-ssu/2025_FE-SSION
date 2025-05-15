let date = new Date();

let thisMonth = new Date(date.getFullYear(), date.getMonth(), date.getDate());

let currentYear = thisMonth.getFullYear();
let currentMonth = thisMonth.getMonth();

renderCalendar(thisMonth);

function renderCalendar(month) {
    currentYear = month.getFullYear();
    currentMonth = month.getMonth();

    const startDay = new Date(currentYear, currentMonth, 1);
    const startWeekDay = startDay.getDay(); 

    const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();

    const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const currentLastWeekDay = new Date(currentYear, currentMonth + 1, 0).getDay();

        
    $('.month_text').text(`${currentYear}.${currentMonth + 1}`);

    const $calendar = $('.dates');
    $calendar.empty();
    
    for (let i = startWeekDay - 1; i >= 0; i--) {
        $calendar.append(`<div class="datesdiv" id="datesdivprev">${prevLastDay - i}</div>`);
    }
    for (let i = 1; i <= currentLastDay; i++) {
        $calendar.append(`<div class="datesdiv">${i}</div>`);
    }
    for (let i = 1; i < 7 - currentLastWeekDay; i++) {
        $calendar.append(`<div class="datesdiv" id="datesdivnext">${i}</div>`);
    }
}

$('#prev').on('click', function () {
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalendar(thisMonth);
  });

$('#next').on('click', function () {
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalendar(thisMonth);
  });


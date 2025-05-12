const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

let tmp_date = new Date();
let tmp_year = tmp_date.getFullYear();
let tmp_month = tmp_date.getMonth();

let prev_button = document.getElementById(`prev_month`);
let next_button = document.getElementById(`next_month`);

prev_button.textContent = '<';
next_button.textContent = '>';

prev_button.addEventListener('click', () => {
    tmp_month--;
    if(tmp_month < 0) {
        tmp_month = 11;
        tmp_year--;
    }
    update_calendar();
})

next_button.addEventListener('click', () => {
    tmp_month++;
    if(tmp_month > 11) {
        tmp_month = 0;
        tmp_year++;
    }
    update_calendar();
})



make_calendar(year, month);

function make_calendar(year, month) {
    document.querySelector(`.year_month`).textContent = `${year}년 ${month + 1}월`;
    const first_day = new Date(year, month, 1).getDay();
    const last_date = new Date(year, month + 1, 0).getDate();

    let date = 1;

    for(let week = 1; week < 7; week++) {
        const week_part = document.getElementById(`week0${week}`);
        
        if(week_part == null) continue;
        week_part.innerHTML = ``;

        for(let day = 0; day < 7; day++) {
            if(week === 1 && day < first_day) {
                week_part.innerHTML += `<td></td>`;
            } else if (date > last_date) {
                week_part.innerHTML += `<td></td>`;
            } else {
                week_part.innerHTML += `<td>${date}</td>`;
                date++;
            }
        }
    }
}

function update_calendar() {
    make_calendar(tmp_year, tmp_month);
}
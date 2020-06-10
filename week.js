// Stwórz widok kalendarza na 7 dni i aktualną godzinę zgodną z lokalizacją
// użyj biblioteki moment.js, a potem wykonaj to samo nie używając
//  bibliteki moment
// do wykonania:
// - przyciski "Next Week" i "Prev Week" mają zmieniać aktualnie
// oglądany tydzień
// - dzisiejszy dzień ma być zaznaczony na zielono kolor fontu
// - przeszłość ma być zaznaczona na ciemnoszary kolor fontu
// - przyszłość tydzień w przód kolor fontu ma mieć jasno zielony
// - nad kalendarzem w górze ma się wyświetlać godzina zgodna z lokalizacją

// ustaw locale i i daj moment now
let locate = moment.locale();
let now = moment();
window.CALENDAR_DATE = moment();

// dateString - string - '03.03.2020'
// dateMoment - moment - moment('03.03.2020')
// dateMoment.format("DD.MM.YYYY") => dateString;

// dateWithMoment.add(date,'week');

function showActualDate(date) {
  const dateViewer = document.getElementById("now");
  dateViewer.innerHTML = date.format("DD.MM.YYYY");
  // dateViewer.style.color = "#00ff00";
}

// console.log(showActualDate(moment()));

function getWeekData(date) {

  const firstDayOfWeek = date.clone().startOf("week");
  const lastDayOfWeek = date.clone().endOf("week");
  
  const arrayOfWeekOfMoments = [];

  for (let i = 0; i < 7; i++) {
    const clone = firstDayOfWeek.clone();
    const nextDay = clone.add({ days: i });
    arrayOfWeekOfMoments.push(nextDay);
  }
  return arrayOfWeekOfMoments;
}

function convertWeekToDates(weekData) {
  return weekData.map((el) => el.format("DD.MM.YYYY"))
}
// console.log(arrayOfWeekOfDates);

function showWeek(week) {
  const calendarBody = document.getElementById("calendar-body"); // #week
  // dodać <tr></tr>
  const tr = document.createElement("tr");
  calendarBody.appendChild(tr);

  function showSingleDay(item) {
    // .appendChild - lepiej to
    // dodać dla każdego dnia <td>string z datą</td>
    const td = document.createElement("td");
    // console.log(item)
    // console.log(now.format("DD.MM.YYYY"));
    const momentItem = moment(item, "DD.MM.YYYY");
    // console.log(momentItem.format("DD.MM.YYYY"),now.format("DD.MM.YYYY"));

    if (momentItem.isAfter(now, 7, "day")) {
      // .future
      td.style.color = "#008000";
    }
    if (momentItem.isBefore(now, 7, "day")) {
      // .past
      // td.addClass('past')
      td.style.color = "#808080";
    }
    if (momentItem.isSame(now, "day")) {
      // .today
      td.style.color = "#00ff00";
    }

    td.innerHTML = item;

    tr.appendChild(td);
  }

  week.forEach(showSingleDay);
}

function generateWeekCalendar(date) {
  // pokaż aktualną datę
  showActualDate(date);

  // console.log(showActualDate(date));

  // na podstawie aktualnej daty wygeneruj tydzień momentów
  const weekOfMoments = getWeekData(date);
  // console.log(weekOfMoments);

  // na podstawie week data wygeneruj array z datami w formie stringów
  const weekOfDates = convertWeekToDates(weekOfMoments); // convertWeekToDateStrings
  // console.log(weekOfDates);

  showWeek(weekOfDates);
  // console.log(showWeek(weekOfDates))
  // showWeek(window.calendarStartDate)
}

function handleFormToChangeWeek() {
  // przechwycic formularz
  const form = document.getElementById("form");

  // przechwycic input[type=date] tego formularza
  const input = document.getElementById("inp");

  // przechwycić kliknięcie w przycisk
  // użytkownik klika w przycisk -> console.log(wartość z tego inputa)
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // na podstawie input.value
    console.log(moment(input.value));
    window.CALENDAR_DATE = moment(input.value);
    document.getElementById("calendar-body").innerHTML = "";
    generateWeekCalendar(window.CALENDAR_DATE);

    // w jakiś sposób przerzucić wartośc input.value
    // do generateWeekCalendar jako obiekt typu moment
  });
}

function handleButtonEvents(){
  const btnPrevious = document.getElementById("previous");
  btnPrevious.addEventListener("click", function(e) {
    //
    const previousWeek = moment(window.CALENDAR_DATE).subtract(7, "days");
    document.getElementById("calendar-body").innerHTML = "";
    // document.getElementById("calendar-body").style.color = "#808080";
    generateWeekCalendar(previousWeek);
  });
  
  const btnNext = document.getElementById("next");
  btnNext.addEventListener("click", function() {
    const nextWeek = moment(window.CALENDAR_DATE).add(7, "days");
    document.getElementById("calendar-body").innerHTML = "";
    // document.getElementById("calendar-body").style.color = "#00ff00";
    generateWeekCalendar(nextWeek);
  });
}


function onInit() {

  generateWeekCalendar(window.CALENDAR_DATE);
  handleFormToChangeWeek();
  handleButtonEvents()

}

window.onload = function() {
  onInit();
};


// zrobić to samo co z input.value


// const btnPrev = document.getElementById('previous')
// btnPrev.addEventListener('click', function() {
// 	console.log('Kliknąłem na button Previous')
// })

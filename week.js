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

console.log(showActualDate(moment()));

function getWeekData(date) {
  // date = now;
  const firstDayOfWeek = date.clone().startOf("week");
  console.log(firstDayOfWeek);
  const lastDayOfWeek = date.clone().endOf("week");
  const arrayOfWeekOfMoment = [];
  for (let i = 0; i < 7; i++) {
    const clone = firstDayOfWeek.clone();
    const nextDay = clone.add({ days: i });
    arrayOfWeekOfMoment.push(nextDay);
  }
  return arrayOfWeekOfMoment;
}

function convertWeekToDates(weekData) {
  const arrayOfWeekOfDates = weekData.map(function(el) {
    return el.format("DD.MM.YYYY");
  });
  return arrayOfWeekOfDates;
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

    if (momentItem.isAfter(now, 6, "day")) {
      td.style.color = "#008000	";
    }
    if (momentItem.isBefore(now, 6, "day")) {
      td.style.color = "#808080";
    }
    if (momentItem.isSame(now, "day")) {
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

  console.log(showActualDate(date));

  // na podstawie aktualnej daty wygeneruj tydzień momentów
  const weekOfMoments = getWeekData(date);
  console.log(weekOfMoments);

  // na podstawie week data wygeneruj array z datami w formie stringów
  const weekOfDates = convertWeekToDates(weekOfMoments);
  console.log(weekOfDates);

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

function onInit() {
  // console.log(now)

  generateWeekCalendar(window.CALENDAR_DATE);
  handleFormToChangeWeek();

  // getWeekData(now);
}

window.onload = function() {
  onInit();
};

// zrobić to samo co z input.value

const btnPrevious = document.getElementById("previous");
btnPrevious.addEventListener("click", function(e) {
  // console.log(window.CALENDAR_DATE)
  //   // w tym miejscu
  // musisz przechwycić now
  // odjąc tydzień
  // do generateWeekCalendar jako obiekt typu moment

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

// const btnPrev = document.getElementById('previous')
// btnPrev.addEventListener('click', function() {
// 	console.log('Kliknąłem na button Previous')
// })

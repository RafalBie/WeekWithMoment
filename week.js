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



function showActualDate(date) {
  const dateViewer = document.getElementById("now");
  dateViewer.innerHTML = date.format("DD.MM.YYYY");
}
console.log(showActualDate(now))


function getWeekData(date) {
  // date = now;
  const firstDayOfWeek = date.clone().startOf("week");
  const lastDayOfWeek = date.clone().endOf("week");
  const arrayOfWeekOfMoment = [];
  for (let i = 0; i < 7; i++) {
    const clone = firstDayOfWeek.clone();
    const nextDay = clone.add({ days: i });
    arrayOfWeekOfMoment.push(nextDay);
  }
  return arrayOfWeekOfMoment;
}


// console.log(getWeekData());
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
    td.innerHTML = item
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
    event.preventDefault()

    // na podstawie input.value
    console.log(moment(input.value));
    window.calendarStartDate = input.value;

    // w jakiś sposób przerzucić wartośc input.value
    // do generateWeekCalendar jako obiekt typu moment

  });

}




function onInit(){
 
  // console.log(now)

  generateWeekCalendar(window.calendarStartDate);
  handleFormToChangeWeek();

  // getWeekData(now);

}


window.onload = function() {
  window.calendarStartDate = moment()
  onInit()
  
};


// zrobić to samo co z input.value

const btnPrevious = document.getElementById("previous");
btnPrevious.addEventListener("click", function(e) {
console.log(window.calendarStartDate)
//   // w tym miejscu
  // musisz przechwycić now
  // dodać tydzień lub odjąc tydzień
  // do generateWeekCalendar jako obiekt typu moment
const newDate = window.calendarStartDate;
return newDate

  
});

const btnNext = document.getElementById("next");
btnNext.addEventListener("click", function() {
  console.log("Kliknąłem na button Next");
});

// const btnPrev = document.getElementById('previous')
// btnPrev.addEventListener('click', function() {
// 	console.log('Kliknąłem na button Previous')
// })

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
let locate = moment.locale()
const now = moment();

function showActualDate(date){
  date = document.getElementById('now');
  date.innerHTML = now.format('DD.MM.YYYY');
}
getWeekData(now);
function getWeekData(date) {
  date=now;
	const firstDayOfWeek = date.clone().startOf('week');
  const lastDayOfWeek = date.clone().endOf('week');
	const arrayOfWeekOfMoment = []
	for (let i = 0; i < 7; i++) {
		const clone = firstDayOfWeek.clone()
		const nextDay = clone.add({ days: i })
		arrayOfWeekOfMoment.push(nextDay)
	}
	return arrayOfWeekOfMoment
}
// console.log(getWeekData());
function convertWeekToDates(weekData) {
	const arrayOfWeekOfDates = weekData.map(function(el) {
		return el.format('DD.MM.YYYY')
	})
	return arrayOfWeekOfDates
}
console.log();

function showWeek(week){
  const calendarBody = document.getElementById('calendar-body') // #week
  // dodać <tr></tr>
  const tr = document.createElement("tr");
  calendarBody.appendChild(tr);
  function showSingleDay(item) {
    // .appendChild - lepiej to
    // dodać dla każdego dnia <td>string z datą</td>
    const td = document.createElement("td");
    td.innerHTML = showActualDate(item);
    tr.appendChild(td);
  }

  week.forEach(showSingleDay)
}


function generateWeekCalendar(date) {
  // pokaż aktualną datę
  showActualDate(date);
  console.log(showActualDate())

  // na podstawie aktualnej daty wygeneruj tydzień momentów
  const weekOfMoments = getWeekData(date)
  console.log(weekOfMoments)

  // na podstawie week data wygeneruj array z datami w formie stringów
  const weekOfDates = convertWeekToDates(weekOfMoments)
  console.log(weekOfDates)

  showWeek(weekOfDates)
}



function handleFormToChangeWeek(){


  // przechwycic formularz
  // przechwycic input[type=date] tego formularza
  // przechwycić kliknięcie w przycisk
  // użytkownik klika w przycisk -> console.log(wartość z tego inputa)
const form = document.getElementById('form');
const input =  document.getElementById("inp");
const btnPrevious = document.getElementById('previous')
	form.addEventListener('submit', function(e){
   input.value = "";
  });
  btnPrevious.addEventListener('click', function(e){
 console.log(input)
  });


	// function displayWeek(event) {
	// 	week.textContent = `Display ${event}`
	// 	event.preventDefault()
  // }
  
	

}



window.onload = function() {
  generateWeekCalendar()
  handleFormToChangeWeek()
}

// const btnPrevious = document.getElementById("previous");
// btnPrevious.addEventListener("click", function() {
//   console.log("Kliknąłem na button prevois");
// });




const btnNext = document.getElementById('next')
btnNext.addEventListener('click', function() {
	console.log('Kliknąłem na button Next')
})

// const btnPrev = document.getElementById('previous')
// btnPrev.addEventListener('click', function() {
// 	console.log('Kliknąłem na button Previous')
// })

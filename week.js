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
let locate = moment.locale();
const now = moment(); 
document.getElementById("now").innerHTML = now;
function getWeekData() {
  function displayWeek(event) {
    week.textContent = `Display ${event}`;
    event.preventDefault();
  }
  const form = document.getElementById('form');
  const btnPrevious = document.getElementById("previous");
  form.addEventListener('submit', displayWeek);

  const firstDayOfWeek = now.clone().startOf("week");
  const lastDayOfWeek = now.clone().endOf("week");
  const arrayOfWeekOfMoment = [];
  for (let i = 0; i < 7; i++) {
    const clone = firstDayOfWeek.clone();
    const x1 = clone.add({ days: i });
    arrayOfWeekOfMoment.push(x1);
  }
  return arrayOfWeekOfMoment;
};

function showWeekData() {
  const arrayOfWeekOfDates = getWeekData().map(function(el){
    return el.format('DD.MM.YYYY');
  });
  return arrayOfWeekOfDates;
};

window.onload = function(){
function calendar() {
  const tbl = document.getElementById("ul");
  showWeekData().forEach(myFunction);
  function myFunction(item) {
    document.getElementById("ul").innerHTML += item + "<br>";
  } 
}
return calendar()

}
// const btnPrevious = document.getElementById("previous");
// btnPrevious.addEventListener("click", function() {
//   console.log("Kliknąłem na button prevois");
// });
const btnNext = document.getElementById("next");  
btnNext.addEventListener("click", function() {
  console.log("Kliknąłem na button Next");
});




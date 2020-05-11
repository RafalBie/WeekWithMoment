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
function getWeekData() {
  let locate = moment.locale();
  const now = moment(); // wt
 document.getElementById("now").innerHTML = now;
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
const btnPrevious = document.getElementById("previous");
const btnNext = document.getElementById("next");  



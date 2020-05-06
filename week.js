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

// moment().format('MMMM Do YYYY, h:mm:ss a');
// moment().subtract(10, 'days').calendar();
// moment().subtract(10, 'days').calendar();
// console.log (moment().calendar())
// console.log(moment().locale())
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// window.onload = calendar;
// window.onload = function calendar(){

//         let today = moment().format('dddd');
//         let now = moment().format('DD.MM.YYYY');
//         let locate = moment.locale();
//         const tbl = document.getElementById("cell");
//         const newDay = document.createElement('th');
//         newDay.innerHTML = now;
//         tbl.appendChild(newDay)

//     }

window.onload = function(){
function calendar() {
  let locate = moment.locale();
  const now = moment(); // wt
 document.getElementById("now").innerHTML = now;


// do html atkualna data jest wrzuccam ana podstawie now

  const firstDayOfWeek = now.clone().startOf("week");
  console.log(firstDayOfWeek)
  
  const lastDayOfWeek = now.clone().endOf("week");
  const arrayOfWeekOfMoment = [];

  for (let i = 0; i < 7; i++) {
    const clone = firstDayOfWeek.clone();
    const x1 = clone.add({ days: i });
    arrayOfWeekOfMoment.push(x1);

  }
  console.log(arrayOfWeekOfMoment);  
  const arrayOfWeekOfDates = arrayOfWeekOfMoment.map(function(el){
    return el.format('DD.MM.YYYY')
  });
  const tbl = document.getElementById("ul");
  arrayOfWeekOfDates.forEach(myFunction);
  function myFunction(item) {
    document.getElementById("ul").innerHTML += item + "<br>";
  }
    console.log(arrayOfWeekOfDates);
    const btnPrevious = document.getElementById("previous");
    const btnNext = document.getElementById("next");  
}
return calendar()

}




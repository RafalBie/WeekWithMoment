// Przygotuj klasę .with-progress-reading-bar, która:

// - wizualnie tworzy nad elementem progress bar, który jest niebieski

// - progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu z klasą .with-progress-reading-bar

// - progress bar powienien być sticky do górnej krawędzi ekranu w obrębie elementu z klasą .with-progress-reading-bar / 
// jeśli przecina się z górną krawędzią okna

// jeśli dany element o klasie .with-progress-reading-bar ma wysokość 500px





// znalesc wszystkie elemwnty  .with_progress_reading_bar
// dla kazdego z tych elemntow trzeba znalesc wysokosc 
// dla kazddego z elemtow znalesc offsettop oddzielenie  od gornej krawędzi 



// dla kazdego z tych elemntow stworzyć w środku jako 1 child elemnet diva, o wysokośc np 10px i kolorze niebieskim




    window.addEventListener("scroll", function(event) {
      const elmnt = document.getElementById('content');
      const topElmnt = elmnt.scrollTop; 
      const widthElmnt = elmnt.scrollWidth;
      const heightElmnt = elmnt.clientHeight;
      const leftElmnt = elmnt.clientLeft;
      const a = (leftElmnt,topElmnt);
      const b = (topElmnt,leftElmnt+widthElmnt);
      

      // const left = (window.pageXOffset || elmnt.scrollLeft) + (elmnt.clientLeft || 0);
      // const top = (window.pageYOffset || elmnt.scrollTop)  - (elmnt.clientTop || 0);
      console.log(topElmnt)
      console.log(a)
      console.log(b)
      console.log(widthElmnt)
      console.log(heightElmnt)
      console.log(leftElmnt);
      // console.log(left)
});


  



  
  
  
  
  
  
  
  
  
  
  // const h = document.documentElement;
  // console.log(h)
  // const b = document.body;
  // console.log(b)

  // const winScroll = document.documentElement.scrollTop; 
  // console.log(winScroll);
  // const height = document.documentElement.scrollHeight;
  // console.log(height);
  // let progress = document.querySelector('.with_progress_reading_bar');
  // console.log(progress);
  // const offsettop = progress.scrollHeight
  // console.log(offsettop)

  // document.addEventListener('scroll', function() {
  //     // scroll = (b[winScroll]) / ((b[height]) - b.clientHeight) * 100;
  //     scroll = ((b.winScroll /  b.height) - b.clientHeight) * 100;
  //     console.log(scroll)
   
  //    });


//   var h = document.documentElement,
 
//    b = document.body,
//    st = 'scrollTop',

//   sh = 'scrollHeight',
//   progress = document.querySelector('.with_progress_reading_bar'),
//  scroll ;

// document.addEventListener('scroll', function() {
//   scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   console.log(scroll)
//   progress.style.setProperty('--scroll', scroll + '%');
// });
// console.log(h)
// console.log(st)
// console.log(progress)







  // const height = document.documentElement.scrollHeight;
 
  // console.log(height);
  // const height2 = document.querySelector(".content2").scrollHeight;
  // console.log(height2);
  // if (winScroll < height) {
  //   const scrolled = (winScroll / height) * 100;
  //   // console.log(scrolled);

  //   document.getElementById("myBar").style.width = scrolled + "%";
  // } else if (winScroll > height) {
  //   const scrolled2 = (winScroll / height2) * 100;
  //   // console.log(scrolled);

  //   document.getElementById("myBar2").style.width = scrolled2 + "%";
  // }

  // dla każdego z tych elemementów odzyskać jego pozycje i wymiary
// }

// window.onscroll = function() {
//   addReadingProgressBars();
// };

// https://www.jqueryscript.net/demo/Top-Scroll-Progress-Indicator-Plugin-With-jQuery-Scrollgress/

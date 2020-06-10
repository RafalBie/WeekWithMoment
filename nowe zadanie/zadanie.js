
// Przygotuj klasę .with-progress-reading-bar, która:

// - wizualnie tworzy nad elementem progress bar, który jest niebieski

// - progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu z klasą .with-progress-reading-bar

// - progress bar powienien być sticky do górnej krawędzi ekranu w obrębie elementu z klasą .with-progress-reading-bar / jeśli przecina się z górną krawędzią okna


function addReadingProgressBars(){
    // znaleźć elementy z klasą .with-progress-reading-bar
    const wrapper = document.querySelector('div');
    let wrapperY = 150;
    wrapper.style.top = wrapperY + "px";
  wrapper.addEventListener('mousemove', (e)=> {
  wrapperY = e.clientY;
  wrapper.style.top = wrapperY + "px";
  console.log("ruszamy myszka")

})
    // dla każdego z tych elemementów odzyskać jego pozycje i wymiary
}


window.onload = function() {
    addReadingProgressBars();
  };
  

// https://www.jqueryscript.net/demo/Top-Scroll-Progress-Indicator-Plugin-With-jQuery-Scrollgress/
// Przygotuj klasę .with-progress-reading-bar, która:

// - wizualnie tworzy nad elementem progress bar, który jest niebieski

// - progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu z klasą .with-progress-reading-bar

// - progress bar powienien być sticky do górnej krawędzi ekranu w obrębie elementu z klasą .with-progress-reading-bar / jeśli przecina się z górną krawędzią okna

// jeśli dany element o klasie .with-progress-reading-bar ma wysokość 500px

function addReadingProgressBars() {
  // znaleźć elementy z klasą .with-progress-reading-bar
  const winScroll = document.documentElement.scrollTop; // window.scrollTop
  console.log(winScroll);
  // const height = document.documentElement.scrollHeight;
  const height = document.querySelector(".content1").scrollHeight;
  console.log(height);
  const height2 = document.querySelector(".content2").scrollHeight;
  console.log(height2);
  if (winScroll < height) {
    const scrolled = (winScroll / height) * 100;
    // console.log(scrolled);

    document.getElementById("myBar").style.width = scrolled + "%";
  } else if (winScroll > height) {
    const scrolled2 = (winScroll / height2) * 100;
    // console.log(scrolled);

    document.getElementById("myBar2").style.width = scrolled2 + "%";
  }

  // dla każdego z tych elemementów odzyskać jego pozycje i wymiary
}

window.onscroll = function() {
  addReadingProgressBars();
};

// https://www.jqueryscript.net/demo/Top-Scroll-Progress-Indicator-Plugin-With-jQuery-Scrollgress/

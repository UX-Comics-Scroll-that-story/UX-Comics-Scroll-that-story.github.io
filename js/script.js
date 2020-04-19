const jackScrolling = document.querySelectorAll('.jack');

const backgroundScrolling = document.querySelectorAll('.panel-transition');

const chapter1scrolling = document.querySelectorAll('.end-chapter-1');

const chapter2scrolling = document.querySelectorAll('.end-chapter-2');

const chapter3scrolling = document.querySelectorAll('.end-chapter-3');

// IMPOSTAZIONI
const panelOptions = {
    rootMargin: "-50% 0px -50% 0px"
};

const backgroundOptions = {
    rootMargin: "200% 0px -75% 0px",
    threshold: 0
};

const chapter1options = {
    rootMargin: "200% 0px -75% 0px",
};

const chapter2options = {
    rootMargin: "200% 0px -75% 0px",
};

const chapter3options = {
    rootMargin: "200% 0px -80% 0px",
};

// FA APPARIRE E NASCONDE IL PERSONAGGIO DALLE VIGNETTE
const jackObserver = new IntersectionObserver(function (entries, jackObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
        }
    });
}, panelOptions);

jackScrolling.forEach(jack => {
    jackObserver.observe(jack);
});

// PERMETTE LA TRANSIZIONE DELLE VIGNETTE A FINE CAPITOLO
const backgroundObserver = new IntersectionObserver(function (entries, backgroundObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
        }
    });
}, backgroundOptions);

backgroundScrolling.forEach(background => {
    backgroundObserver.observe(background);
});

// NASCONDE IL CAPITOLO 1
const chapter1observer = new IntersectionObserver(function (entries, chapter1observer) {
    entries.forEach(entry => {
        console.log(entry.target);

        if (!entry.isIntersecting) {
            entry.target.classList.add("fast-appear");
            document.getElementById("chapter-1").style.opacity = "1";
        } else {
            entry.target.classList.remove("fast-appear");
            document.getElementById("chapter-1").style.opacity = "0";
        }
    });
}, chapter1options);

chapter1scrolling.forEach(endChapter1 => {
    chapter1observer.observe(endChapter1);
});

// NASCONDE IL CAPITOLO 2
const chapter2observer = new IntersectionObserver(function (entries, chapter2observer) {
    entries.forEach(entry => {
        console.log(entry.target);

        if (!entry.isIntersecting) {
            entry.target.classList.add("fast-appear");
            document.getElementById("chapter-2").style.opacity = "1";
        } else {
            entry.target.classList.remove("fast-appear");
            document.getElementById("chapter-2").style.opacity = "0";
        }
    });
}, chapter2options);

chapter2scrolling.forEach(endChapter2 => {
    chapter2observer.observe(endChapter2);
});

// NASCONDE IL CAPITOLO 3
const chapter3observer = new IntersectionObserver(function (entries, chapter3observer) {
    entries.forEach(entry => {
        console.log(entry.target);

        if (!entry.isIntersecting) {
            entry.target.classList.add("fast-appear");
            document.getElementById("chapter-3").style.opacity = "1";
        } else {
            entry.target.classList.remove("fast-appear");
            document.getElementById("chapter-3").style.opacity = "0";
        }
    });
}, chapter3options);

chapter3scrolling.forEach(endChapter3 => {
    chapter3observer.observe(endChapter3);
});
const Project = () => {
  return (
    <section className="project" id="project">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1">Projekty</h2>
      <div className="">
        <ul className="bg-secondary bg-opacity-25 rounded-4 m-1 p-2 ">
          <li className="name list-group">Projekty studenckie:</li>
          <li className=" list-group">
            <b>Praca inżynierska</b>– Realizacja projektu informatycznego związanego z tworzeniem aplikacji webowej
            opartej głównie na front-endzie. W projekcie wykorzystano HTML, CSS (w tym RWD) oraz JavaScript (bez użycia
            frameworków, z wykorzystaniem czystego JavaScriptu). Projekt dostępny na GitHubie.
          </li>
          <li className=" list-group">
            <b>Projekt studencki</b>– Współpraca z firmą BSB w ramach projektu organizowanego przez uczelnię. Moje
            zadania obejmowały tworzenie front-endu przy użyciu HTML, CSS i JavaScript, a także integrację API Google
            Maps. Współdzieliłem projekt z zespołem, korzystając z GitHub do zarządzania wersjami. Udział w projekcie
            pozwolił na rozwinięcie umiejętności pracy zespołowej oraz stosowanie praktycznych rozwiązań
            technologicznych.
          </li>
        </ul>

        <ul className="xd bg-secondary bg-opacity-25 rounded-4 m-1 p-2 ">
          <li className="name list-group">Projekty Komercyjne:</li>
          <li className=" list-group">
            <b>Strona wizytówkowa - Wycieczki do Kenii</b> – Projekt strony promującej wycieczki do Kenii, zawierającej
            galerię zdjęć, szczegółowy cennik i formularz kontaktowy do organizatora wycieczek. Projekt zrealizowany
            przy użyciu Vite, HTML, CSS, React, Bootstrap i SCSS, co zapewnia nowoczesny wygląd i responsywność strony.
            Kod projektu dostępny na GitHubie.
          </li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-4 m-1 p-2 ">
          <li className="name list-group">Mini Projekty:</li>

          <li className=" list-group">
            <b>Counter</b>– Aplikacja licznika umożliwiająca dodawanie i odejmowanie wartości za pomocą przycisków.
            Stworzona przy użyciu HTML, CSS i JavaScript. Obsługuje wartości liczbowe w zakresie od -9999999 do 99999999
            oraz zapisuje aktualną wartość licznika w localStorage, aby była dostępna po odświeżeniu strony. Projekt
            dostępny na GitHubie.
          </li>
          <li className="list-group">
            <b>Strona CV</b> – Strona internetowa prezentująca moje CV w nowoczesnej i przejrzystej formie. Strona
            zawiera sekcje z doświadczeniem zawodowym, umiejętnościami, edukacją oraz możliwością kontaktu. Zbudowana z
            wykorzystaniem Vite, HTML, CSS, React, Bootstrap i SCSS, zapewnia responsywność oraz szybkie ładowanie.
            Projekt dostępny na GitHubie.
          </li>
          <li className="list-group">
            <a href="https://github.com/aJpaRmp?tab=repositories">- Inne</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;

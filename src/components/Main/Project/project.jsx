const Project = () => {
  return (
    <section className="project" id="project">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1 fs-4">Projekty</h2>
      <div className="d-flex">
        <ul className="bg-secondary w-50 bg-opacity-25 rounded-4 m-1 p-2 ">
          <li className="name list-group">Projekty studenckie:</li>
          <li className=" list-group">
            <b>Praca inżynierska</b>– Realizacja projektu informatycznego związanego z tworzeniem aplikacji webowej
            opartej głównie na front-endzie. W projekcie wykorzystano HTML, CSS (w tym RWD) oraz JavaScript (bez użycia
            frameworków, z wykorzystaniem czystego JavaScriptu).{" "}
            <a href="https://github.com/aJpaRmp/GamingHub" target="_blank" className="text-black text-decoration-none">
              Projekt dostępny na GitHubie.
            </a>
          </li>
          <li className=" list-group">
            <b>Projekt studencki</b>– Współpraca z firmą BSB w projekcie uczelnianym. Tworzyłem front-end w HTML, CSS,
            JavaScript oraz integrowałem API Google Maps. Pracując zespołowo, korzystaliśmy z GitHub do zarządzania
            wersjami, co pozwoliło mi rozwinąć umiejętności pracy zespołowej i praktycznego stosowania technologii.
            <a href="https://github.com/Svobek/meet-it" target="_blank" className="text-black text-decoration-none">
              Projekt dostępny na GitHubie.
            </a>
          </li>
        </ul>
        <ul className="bg-secondary w-50 bg-opacity-25 rounded-4 m-1 p-2 ">
          <li className="name list-group">Mini Projekty:</li>

          <li className="list-group">
            <b>Strona Portfolio</b> - Moje osobiste portfolio, które prezentuje projekty, umiejętności oraz
            doświadczenie w tworzeniu stron internetowych. Znajdziesz tu także odnośniki do wybranych repozytoriów.
            <a href="https://github.com/aJpaRmp/MyWebsite" target="_blank" className="text-black text-decoration-none">
              Projekt dostępny na GitHubie.
            </a>
          </li>

          <li className="list-group">
            <b>Strona CV</b> – Strona internetowa prezentująca moje CV w nowoczesnej i przejrzystej formie. Strona
            zawiera sekcje z doświadczeniem zawodowym, umiejętnościami, edukacją. Zbudowana z wykorzystaniem Vite, HTML,
            CSS, React, Bootstrap i SCSS.
            <a href="https://github.com/aJpaRmp/MyWebsite" target="_blank" className="text-black text-decoration-none">
              Projekt dostępny na GitHubie.
            </a>
          </li>
          <li className="list-group">
            <b>Inne Projekty</b>
            <a
              href="https://github.com/aJpaRmp?tab=repositories"
              target="_blank"
              className="text-black text-decoration-none"
            >
              - wiele więcej projektów dostępnych na moim profilu GitHub.
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;

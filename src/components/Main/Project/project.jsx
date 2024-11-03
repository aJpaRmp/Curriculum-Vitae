const Project = () => {
  return (
    <section className="project" id="project">
      <h2 className="text-center">Projekty</h2>
      <ul>
        <li className="name">Projekty studenckie:</li>
        <li>
          <b>Praca inżynierska</b>– Realizacja projektu informatycznego związanego z tworzeniem aplikacji webowej
          opartej głównie na front-endzie. W projekcie wykorzystano HTML, CSS (w tym RWD) oraz JavaScript (bez użycia
          frameworków, z wykorzystaniem czystego JavaScriptu). Projekt dostępny na GitHubie.
        </li>
        <li>
          <b>Projekt studencki</b>– Współpraca z firmą BSB w ramach projektu organizowanego przez uczelnię. Moje zadania
          obejmowały tworzenie front-endu przy użyciu HTML, CSS i JavaScript, a także integrację API Google Maps.
          Współdzieliłem projekt z zespołem, korzystając z GitHub do zarządzania wersjami. Udział w projekcie pozwolił
          na rozwinięcie umiejętności pracy zespołowej oraz stosowanie praktycznych rozwiązań technologicznych.
        </li>
      </ul>
    </section>
  );
};

export default Project;

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1">Certyfikaty</h2>
      <div className="d-flex">
        <ul className="bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
          <li className="date">01.2020</li>
          <li className="name-c">E14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami</li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
          <li className="date">06.2019</li>
          <li className="name-c">E13 Projektowanie lokalnych sieci komputerowych i administrowanie sieciami</li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
          <li className="date">06.2018</li>
          <li className="name-c">E12 Montaż i eksploatacja komputerów osobistych oraz urządzeń peryferyjnych</li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;

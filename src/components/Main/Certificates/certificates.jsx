const Certificates = () => {
  return (
    <section id="certificates" className="w-100">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1 fs-4">Certyfikaty</h2>
      <div className="d-flex">
        <ul className="bg-secondary bg-opacity-25 rounded-3 m-1 p-1 list-inline">
          <li className="date opacity-75">01.2020</li>
          <li className="name-c fw-bold">
            E14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami
          </li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-3 m-1 p-1 list-inline">
          <li className="date opacity-75">06.2019</li>
          <li className="name-c fw-bold">E13 Projektowanie lokalnych sieci komputerowych i administrowanie sieciami</li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-3 m-1 p-1 list-inline">
          <li className="date opacity-75">06.2018</li>
          <li className="name-c  fw-bold ">
            E12 Montaż i eksploatacja komputerów osobistych oraz urządzeń peryferyjnych
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certificates;

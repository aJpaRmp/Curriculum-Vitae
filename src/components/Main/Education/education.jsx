const Education = () => {
  return (
    <section id="education">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1">Wykształcenie</h2>
      <ul className="ukw bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
        <li className="date">10.2020 – 03.2024 (3 lata 6 mies.)</li>
        <li className="name">Uniwersytet Kazimierza Wielkiego w Bydgoszczy</li>
        <li className="study">Kierunek: Informatyka</li>
        <li className="study">Poziom wykształcenia: Inżynier</li>
      </ul>
      <ul className="zsm bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
        <li className="date ">09.2016 – 04.2020 (3 lata 8 mies.)</li>
        <li className="name">Zespół Szkół Mechanicznych nr. 1 w Bydgoszczy</li>
        <li className="study">Kierunek: Informatyka</li>
        <li className="study ">Poziom wykształcenia: Technik</li>
      </ul>
    </section>
  );
};

export default Education;

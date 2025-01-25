const Footer = () => {
  return (
    <>
      <p className="p__info text-center opacity-25 m-5">
        <a
          href="https://github.com/aJpaRmp/Curriculum-Vitae"
          className="text-secondary link-underline link-underline-opacity-0"
        >
          CV - wykonane za pomoca HTML , SCSS, Bootstrap , React - Javascript i Vite. Cały kod dostępny na GitHub.
        </a>
      </p>
      <p className="rodo mx-3 text-center">
        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji
        zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
        danych oraz uchylenia dyrektywy 95/46/WE (RODO).
      </p>
    </>
  );
};

export default Footer;

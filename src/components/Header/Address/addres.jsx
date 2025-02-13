import Git from "../../../assets/github.png";
import Linkedin from "../../../assets/linkedin.png";
import Tel from "../../../assets/phone.png";
import Email from "../../../assets/mail.png";
import Web from "../../../assets/web.png";

const Address = () => {
  return (
    <address className="d-flex flex-column justify-content-evenly align-items-center">
      <ul className="m-0 p-0">
        <li className="list-group mb-2">
          <a
            title="kontakt@pawlowskimichal.pl"
            href="mailto:mp.pawlowskimichal@gmail.com"
            className="text-black text-decoration-none align-middle"
          >
            <img title="Mój email" className="p-1 bg-black rounded-3" id="img-adr-email" src={Email} alt="mój mail" />

            {/* <i className="m-1">mp.pawlowskimichal@gmail.com</i> */}
            <i className="m-1">kontakt@pawlowskimichal.pl</i>
          </a>
        </li>
        <li className="list-group">
          <a title="+48 728 117 024" href="tel:+48728117024" className="text-black text-decoration-none align-middle fs-6">
            <img title="Mój telefon" className="p-1 bg-black rounded-3" id="img-adr-tel" src={Tel} alt="mój telefon" />

            <i className="m-1">+48 728 117 024</i>
          </a>
        </li>
        <li className="list-group">
          <a title="pawlowskimichal.pl"  href="pawlowskimichal.pl" target="_blank" className="d-flex justify-content-center align-items-center my-1 text-decoration-none">
            <img title="Moja strona internetowa" className="me-1" src={Web} alt="Link do mojej strony internetowej" />
            <p className="text-black text-decoration-none align-middle fs-6 ms-1 me-auto my-auto">pawlowskimichal.pl</p>
          </a>
        </li>
        <li className="list-group">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/michalpawlowski-mp/"
            className="d-flex justify-content-center align-items-center my-1 text-decoration-none"
          >
            <img title="Mój profil na Linkedin" src={Linkedin} alt="Link do mojego profilu na portalu Linkedin" className="me-1" />
            <p className="text-black text-decoration-none align-middle fs-6 ms-1 me-auto my-auto">
              /michalpawlowski-mp
            </p>
          </a>
        </li>
        <li className="list-group">
          <a
            target="_blank"
            href="https://github.com/michalpawlowski-mp"
            className="d-flex justify-content-center align-items-center my-1 text-decoration-none"
          >
            <img title="Mój profil na Github" className="me-1" src={Git} alt="Link do mojego profilu na GitHub" />
            <p className="text-black text-decoration-none align-middle fs-6 ms-1 me-auto my-auto">/michalpawlowski-mp</p>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;

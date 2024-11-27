import Git from "../../../assets/github.png";
import Linkedin from "../../../assets/linkedin.png";
import Tel from "../../../assets/phone.png";
import Email from "../../../assets/mail.png";

const Address = () => {
  return (
    <address className="d-flex flex-column justify-content-evenly align-items-center">
      <ul className="">
        <li className="list-group">
          <a
            className="link-underline link-underline-opacity-0"
            title="mp.pawlowskimichal@gmail.com"
            href="mailto:mp.pawlowskimichal@gmail.com"
          >
            <img title="Email" className="img-adr" id="img-adr-email" src={Email} alt="mój mail" />
            <b>E-mail: </b>
            {/* <i>kontakt@michalpawlowski.pl</i> */}
            <i> mp.pawlowskimichal@gmail.com</i>
          </a>
        </li>
        <li className="list-group">
          <a className="link-underline link-underline-opacity-0" title="728 117 024" href="tel:728 117 024">
            <img title="Telefon" className="img-adr" id="img-adr-tel" src={Tel} alt="mój telefon" />
            <b>Telefon: </b>
            <i> 728 117 024</i>
          </a>
        </li>
      </ul>
      <div id="links">
        <a className="link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/michalpawlowski-mp/">
          <img
            title="Linkedin"
            className="link-profile"
            src={Linkedin}
            alt="Link do mojego profilu na portalu Linkedin"
          />
          michalpawlowski-mp
        </a>
        <a className="link-underline link-underline-opacity-0" href="https://github.com/aJpaRmp">
          <img title="Github" className="link-profile" src={Git} alt="Link do mojego profilu na GitHub" />
          aJpaRmp
        </a>
      </div>
    </address>
  );
};

export default Address;

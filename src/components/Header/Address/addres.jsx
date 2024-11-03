import Git from "../../../assets/github.png";
import Linkedin from "../../../assets/linkedin.png";
import Tel from "../../../assets/phone.png";
import Email from "../../../assets/mail.png";

const Address = () => {
  return (
    <address className="">
      <ul>
        <li>
          <a title="mp.pawlowskimichal@gmail.com" href="mailto:mp.pawlowskimichal@gmail.com">
            <img className="img-adr" id="img-adr-email" src={Email} alt="mój mail" />
            <b>E-mail</b>
            <i>: mp.pawlowskimichal@gmail.com</i>
          </a>
        </li>
        <li>
          <a title="728 117 024" href="tel:728 117 024">
            <img className="img-adr" id="img-adr-tel" src={Tel} alt="mój telefon" />
            <b>Telefon</b>
            <i>: 728 117 024</i>
          </a>
        </li>
      </ul>
      <div id="links ">
        <a href="https://www.linkedin.com/in/micha%C5%82-paw%C5%82owski-0b61a4227/">
          <img className="link-profile" src={Linkedin} alt="Link do mojego profilu na portalu Linkedin" />
        </a>
        <a href="https://github.com/aJpaRmp">
          <img className="link-profile" src={Git} alt="Link do mojego profilu na GitHub" />
        </a>
      </div>
    </address>
  );
};

export default Address;

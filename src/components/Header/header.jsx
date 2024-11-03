import Address from "./Address/addres.jsx";
import Me from "../../assets/MP.jpg";

const Header = () => {
  return (
    <header>
      <img className="mypicture" src={Me} alt="Zdjęcie Michała Pawłowskiego" title="Moje zdjęcie" />
      <div className="">
        <div className="">
          <h1>Michał Pawłowski</h1>
          {/* <span>Junior Frontend Developer</span> */}
        </div>
        <button type="button" className="" id="downloadBtn">
          Pobierz CV
        </button>
      </div>
      <Address />
    </header>
  );
};

export default Header;

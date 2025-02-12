import Address from "./Address/addres.jsx";
import Me from "../../assets/MP.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/Curriculum vitae - Michal Pawlowski.pdf";
      link.download = "CV-MichałPawłowski.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    document.getElementById("downloadBtn").onclick = handleDownload;
  }, []);

  return (
    <header className="d-flex justify-content-between p-1">
      <img
        className="mypicture rounded-4 border border-2 border-secondary my-auto"
        src={Me}
        alt="Zdjęcie Michała Pawłowskiego"
        title="Moje zdjęcie"
      />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="">
          <h1 className="fs-2 mt-4">inż. Michał Pawłowski</h1>
          {/* <span>Junior Frontend Developer</span> */}
        </div>
        <button title="Pobierz moje CV w formie PDF" type="button" className="btn btn-outline-secondary m-auto text-uppercase" id="downloadBtn">
          Pobierz CV
        </button>
      </div>
      <Address />
    </header>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <a href="https://www.facebook.com/ExcelMenuiseries#">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/excel_menuiseries/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.google.com/maps?cid=10784869451143381952">
        <FontAwesomeIcon icon={faLocationDot} />
      </a>
    </>
  );
}

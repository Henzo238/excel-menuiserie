import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/company/excel-menuiseries/posts/?feedView=all"
        target="blank"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.facebook.com/ExcelMenuiseries#"
        target="_blank"
        className="facebook"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.instagram.com/excel_menuiseries/"
        target="_blank"
        className="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.google.com/maps?cid=10784869451143381952"
        target="_blank"
        className="location"
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </a>
    </footer>
  );
}

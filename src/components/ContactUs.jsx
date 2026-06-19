// icons
import { MdEmail } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// hooks
import useTitle from "./hooks/useTitle";

const ContactUs = () => {
  // title
  useTitle("React Spotify - 📫");

  return (
    <section className="d-flex flex-row justify-content-center align-items-center m-auto">
      <p className="col-5 d-none d-sm-block info-box shadow">
        I hope you enjoyed the site. I have prepared a box for you that you can
        contact me. I'll be happy if you send me your suggestions, comments,
        criticisms & job offers .
      </p>
      <ul className="wrapper">
        {/* github */}
        <a
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://github.com/parham-ab"
        >
          <li className="icon github">
            <span className="tooltip">Github</span>
            <span>
              <BsGithub />
            </span>
          </li>
        </a>
        {/* linkedin */}
        <a
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/parham-abolghasemi/"
        >
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <span>
              <BsLinkedin />
            </span>
          </li>
        </a>
        {/* email */}
        <a rel="noopener noreferrer" href="mailto:parhamab17@gmail.com">
          <li className="icon email">
            <span className="tooltip">Email</span>
            <span>
              <MdEmail />
            </span>
          </li>
        </a>
        {/* website */}
        <a
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://parham-ab.netlify.app/"
        >
          <li className="icon website">
            <span className="tooltip">Website</span>
            <span>
              <FaInternetExplorer />
            </span>
          </li>
        </a>
      </ul>
    </section>
  );
};

export default ContactUs;

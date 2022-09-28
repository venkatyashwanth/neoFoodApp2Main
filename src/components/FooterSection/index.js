import "./index.css";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { BsApple } from "react-icons/bs";
import googlePlay from "../../icons/googlePlaySvg.svg"

const socialIcons = [
  {
    icon: <ImLinkedin2 />,
    id: 1,
  },
  {
    icon: <FaInstagram />,
    id: 2,
  },
  {
    icon: <GrTwitter />,
    id: 3,
  },
  {
    icon: <AiOutlineYoutube />,
    id: 4,
  },
  {
    icon: <RiFacebookFill />,
    id: 5,
  },
];

export const FooterSection = () => {
  return (
    <>
      <div className="footerSectionContainer">
        <div>
          <div className="footerMainDisplay d-flex justify-content-between">
            <div className="cont1">
              <img src="./media/blackLogo.png" alt="logo" />
              NOM-NOM
            </div>
            <div className="divStyle"></div>
          </div>
          <div className="footerLinks d-flex justify-content-between flex-wrap mt-5">
            <div className="footersList">
              <ul>
                <li>ABOUT NOM-NOM</li>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footersList">
              <ul>
                <li>NOMVERSE</li>
                <li>NOM-NOM</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Nomlad</li>
              </ul>
            </div>
            <div className="footersList">
              <ul>
                <li>FOR RESTURANTS</li>
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </ul>
              <ul className="mt-5">
                <li>FOR ENTERPRISES</li>
                <li>NOM-NOM For Work</li>
              </ul>
            </div>
            <div className="footersList">
              <ul>
                <li>LEARN MORE</li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="footersList">
              <ul>
                <li>SOCIAL LINKS</li>
              </ul>
              <div className="d-flex">
                {socialIcons.map((item) => (
                  <div className="socialMediaLinks" key={item.id}>
                    <i>{item.icon}</i>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <a href="#0" className="btn btnStyle">
                  <BsApple size={32}/>
                  <div>
                    <span>Download on the </span>
                    <p>App Store</p>
                  </div>
                </a>
                <a href="#0" className="btn btnStyle mt-3">
                  {/* <BsApple size={32}/> */}
                  <img height={24} src={googlePlay} alt="google" />
                  <div>
                    <span>GET IT ON</span>
                    <p>Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

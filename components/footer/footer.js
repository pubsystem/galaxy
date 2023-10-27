import Link from "next/link";
import styles from "./footer.module.css";
// import Image from "next/image";

const headerLinkDataLeft = [
  {
    text: "BLOG",
    herf: "/blog",
    className: "blue",
  },
  {
    text: "SHOP",
    herf: "/shop",
    className: "yellow",
  },
  {
    text: "NEWS",
    herf: "/news",
    className: "green",
    last: true,
  },
];
const headerLinkDataRight = [
  {
    text: "LOGIN",
    herf: "/blog",
    className: "blue",
  },
  {
    text: "SHOP3",
    herf: "/shop",
    className: "yellow",
  },
  {
    text: "EMAIL",
    herf: "mailto:TORONTOKYO715@gmail.com",
    className: "green",
    last: true,
  },
];

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.authorContainer}>
          <p className={styles.authorName}>Ning Lu</p>
          <a
            className={styles.authorEmail}
            herf="mailto:lu000194@algonquinlive.com"
          >
            lu000194@algonquinlive.com
          </a>
        </div>
        <div className={styles.ulContainer}>
          <ul>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Travel guides</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-tiktok-line"></i>
            <i className="ri-youtube-line"></i>
            <i className="ri-linkedin-line"></i>
            <i className="ri-github-fill"></i>
            <i className="ri-facebook-circle-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

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
          <div className={styles.iconContainer}>
            <i
              class="ri-twitter-x-line"
              className={`ri-twitter-x-line ${styles.red}`}
            ></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-tiktok-line"></i>
            <i class="ri-youtube-line"></i>
            <i class="ri-linkedin-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

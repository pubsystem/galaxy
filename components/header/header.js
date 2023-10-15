import HeaderLink from "./headerLink";
import styles from "./header.module.css";
// import Image from "next/image";
import SearchBar from "@/components/searchBar/searchBar";

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

const Header = () => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <nav className={styles.nav}>
          {headerLinkDataLeft.map((i) => (
            <HeaderLink {...i} key={i.text} />
          ))}
        </nav>
        <h1 className={styles.title}>G A L A X Y</h1>
        <nav className={styles.nav}>
          {headerLinkDataRight.map((i) => (
            <HeaderLink {...i} key={i.text} />
          ))}
        </nav>
      </header>
      <SearchBar />
    </>
  );
};

export default Header;

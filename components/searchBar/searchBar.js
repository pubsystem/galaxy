import styles from "./searchBar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const userInfo = "userInfouserInfouserInfo";
const searchBarCenterLink = [
  {
    name: "Twitter",
    link: "123",
    key: "Twitter",
  },
  {
    name: "Facebook",
    link: "123321",
    key: "Facebook",
  },
  {
    name: "Insagram",
    link: "123",
    key: "Insagram",
  },
];

const SearchBar = () => {
  const router = useRouter();
  let { route } = router;
  let path = route === "/" ? "Home" : route.substring(1);
  console.log("router", router, router.route, "route", route);
  return (
    <div className={styles.searchBar}>
      <span>
        You are Here: <span className={styles.curLink}>{path}</span>
        {route === "/" ? (
          ""
        ) : (
          <span>
            &nbsp; - &nbsp;Back to{" "}
            <Link className={styles.link} href="/">
              Home
            </Link>
          </span>
        )}
      </span>
      <span className={styles.centerBox}>
        - &nbsp;
        {searchBarCenterLink.map((i) => (
          <Link className={styles.centerLink} href={i.link} key={i.name}>
            {i.name}
          </Link>
        ))}
        &nbsp; -
      </span>
      <span>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
        </svg> */}
        <input placeholder="    Search" type="text" />
      </span>
    </div>
  );
};

export default SearchBar;

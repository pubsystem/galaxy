import styles from "./searchBar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
const searchBarCenterLink = [
  {
    name: "Twitter",
    link: "#",
    key: "Twitter",
  },
  {
    name: "Facebook",
    link: "#",
    key: "Facebook",
  },
  {
    name: "Instagram",
    link: "#",
    key: "Insagram",
  },
];

const SearchBar = () => {
  const router = useRouter();
  let { route } = router;
  let { query } = router;
  let path = route === "/" ? "Home" : query.name;

  const [userSearch, setUserSearch] = useState();

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
      <span className={styles.searcherBox}>
        <input placeholder="Search" type="text" value={userSearch} />
        <i className="ri-search-line"></i>
      </span>
    </div>
  );
};

export default SearchBar;

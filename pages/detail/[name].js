import Link from "next/link";
import Head from "next/head";
import styles from "./sunDetail.module.css";

const SunDetail = () => {
  return (
    <div className={styles.detailContainer}>
      <Head>
        <title>sun</title>
      </Head>
      SunDetail
      <Link href="/">back</Link>
    </div>
  );
};

export default SunDetail;

import Link from "next/link";
import Head from "next/head";
import styles from "./detail.module.css";
import { useRouter } from "next/router";
import detailData from "@/pageData/detailPageData";

const DetailPage = () => {
  const router = useRouter();
  let { query } = router;
  let curDetail = query.name;
  console.log("router", router);
  console.log("detailData", detailData);
  return (
    <div className={styles.detailContainer}>
      <Head>
        <title>{query.name || "Sun"}</title>
      </Head>
      <p>{detailData[curDetail].desc}</p>
      <Link href="/">back</Link>
    </div>
  );
};

export default DetailPage;

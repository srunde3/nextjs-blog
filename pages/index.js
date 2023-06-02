import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software engineer, guitarist, music-lover, dickhead coffee snob</p>
        <p><Link href="/posts/first-post">My first post!</Link></p>
      </section>
    </Layout>
  );
}

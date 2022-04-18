import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Audio Player</title>
        <meta name="description" content="Audio Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Audio Player</main>
    </div>
  );
}

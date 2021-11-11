import React, { FC } from "react";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Сказка - Новогодние подарки и кульки 2022</title>
        <meta
          name="description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skazka-podarki.kz/" />
        <meta
          property="og:title"
          content="Сказка - Новогодние подарки и кульки 2022"
        />
        <meta
          property="og:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="og:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skazka-podarki.kz/" />
        <meta
          property="twitter:title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          property="twitter:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="twitter:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerTop}>
          <img src="/logo.png" alt="Логотип Сказка" />
        </div>
        <div className={styles.headerBottom}>
          <span>Новогодние подарки</span>
        </div>
      </header>
      <main className={styles.main}>{children}</main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;

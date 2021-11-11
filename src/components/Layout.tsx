import React, { FC } from "react";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
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

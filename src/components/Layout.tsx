import React, {FC, PropsWithChildren} from "react";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";

interface ILayoutProps {
  pageTitle: string;
  children: any;
}

const Layout = (props: ILayoutProps) => {
  const {
    pageTitle,
    children,
  } = props;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <img src="/logo.png" alt="Логотип Сказка" />
        </div>
        <div className={styles.headerBottom}>
          <span>{pageTitle}</span>
        </div>
      </header>
      <main className={styles.main}>{children}</main>

      <footer>

      </footer>
    </div>
  );
};

export default Layout;

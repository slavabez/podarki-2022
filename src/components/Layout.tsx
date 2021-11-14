import React from "react";
import styles from "../styles/Layout.module.css";

interface ILayoutProps {
  pageTitle: string;
  children: any;
}

const Layout = (props: ILayoutProps) => {
  const { pageTitle, children } = props;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.shadow} />
        <div className={styles.headerTopMobile}>
          <img src="/logo.png" alt="Логотип Сказка" />
        </div>
        <div className={styles.headerTopDesktop}>
          <a href="">
            Скачать
            <br />
            каталог
          </a>
          <img src="/logo_large.png" alt="Логотип Сказка" />
          <a href="">
            Наши
            <br />
            контакты
          </a>
        </div>

        <div className={styles.headerBottom}>
          <span>{pageTitle}</span>
        </div>
      </header>
      <div className={styles.mobileLinks}>
        <a href="">
          Скачать
          <br />
          каталог
        </a>
        <a href="">
          Наши
          <br />
          контакты
        </a>
      </div>

      <main className={styles.main}>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;

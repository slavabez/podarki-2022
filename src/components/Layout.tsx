import React from "react";
import styles from "../styles/Layout.module.css";

interface ILayoutProps {
  pageTitle: string;
  children: any;
  catalogueURL: string;
  footerHeading: string;
  addressOneHeading: string;
  addressOneText: string;
  addressTwoHeading: string;
  addressTwoText: string;
}

const Layout = (props: ILayoutProps) => {
  const {
    pageTitle,
    children,
    catalogueURL,
    footerHeading,
    addressOneHeading,
    addressTwoHeading,
    addressTwoText,
    addressOneText,
  } = props;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.shadow} />
        <div className={styles.headerTopMobile}>
          <img src="/logo.svg" alt="Логотип Сказка" width="180px" />
        </div>
        <div className={styles.headerTopDesktop}>
          <a href={catalogueURL}>
            Скачать
            <br />
            каталог
          </a>
          <img src="/logo.svg" alt="Логотип Сказка" width="180px" />
          <a href="#footer">
            г.Кокшетау,
            <br/>
            Ауезова 191/1
          </a>
        </div>

        <div className={styles.headerBottom}>
          <span>{pageTitle}</span>
        </div>
      </header>
      <div className={styles.mobileLinks}>
        <a href={catalogueURL}>
          Скачать
          <br />
          каталог
        </a>
        <a href="#footer">
          г.Кокшетау,
          <br/>
          Ауезова 191/1
        </a>
      </div>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer} id="footer">
        <div className={styles.footerHeader}>
          <h2>{footerHeading}</h2>
          <hr />
        </div>
        <div className={styles.footerAddressWrapper}>
          <div className={styles.footerAddressBlock}>
            <h3>{addressOneHeading}</h3>
            <span>{addressOneText}</span>
          </div>
          <div className={styles.footerAddressBlock}>
            <h3>{addressTwoHeading}</h3>
            <span>{addressTwoText}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React from "react";
import styles from "../styles/Content.module.css";

interface IContentProps {
  heading: string;
  text: string;
}

function ContentSection(props: IContentProps) {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.headingWrapper}>
        <h2>{props.heading}</h2>
      </div>
      <div className={styles.contentWrapper}>
        <p>{props.text}</p>
      </div>
    </section>
  );
}

export default ContentSection;

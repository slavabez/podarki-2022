import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import styles from "../styles/Gallery.module.css";
import { IPresent } from "../helpers/types";
import { generateImageUrl } from "../helpers/functions";

interface IGalleryProps {
  presents: IPresent[];
}

function GallerySection(props: IGalleryProps) {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHeader}>
        <h1>Каталог</h1>
      </div>
      <div className={styles.presentsGrid}>
        {props.presents.map((present) => {
          const description = `Новогодний подарок "${present.title}", ${present.weight}гр за ${present.price} тенге.`;
          return (
            <SimpleReactLightbox key={present._id}>
              <SRLWrapper
                options={{
                  caption: {
                    captionFontFamily: "'Montserrat', sans-serif",
                  },
                }}
              >
                <div className={styles.cardWrapper}>
                  <div className={styles.cardImageWrapper}>
                    <a
                      href={generateImageUrl({
                        image: present.cover,
                        height: 1000,
                      })}
                      data-attribute="SRL"
                    >
                      <img
                        key={present._id}
                        src={generateImageUrl({
                          image: present.cover,
                          height: 140,
                        })}
                        alt={description}
                      />
                    </a>
                  </div>
                  <div className={styles.otherImagesWrapper}>
                    {present?.images?.map((img) => (
                      <div
                        key={img.asset._ref}
                        className={styles.miniImageWrapper}
                      >
                        <a
                          href={generateImageUrl({
                            image: img,
                            height: 1000,
                          })}
                        >
                          <img
                            key={present._id}
                            src={generateImageUrl({
                              image: img,
                              height: 43,
                            })}
                            alt={description}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className={styles.metaDataWrapper}>
                    <span className={styles.title}>{present.title}</span>
                    <span className={styles.weight}>{present.weight}г</span>
                    <span className={styles.price}>{present.price}₸</span>
                  </div>
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          );
        })}
      </div>
    </section>
  );
}

export default GallerySection;

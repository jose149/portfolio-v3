import Image from "next/image";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          Frontend Engineer - Product-minded Developer
        </p>

        <h1 id="hero-heading" className={styles.heading}>
          <span>I design.</span>
          <span>I build.</span>
          <em>I ship results.</em>
        </h1>

        <p className={styles.lede}>
          I build elegant, accessible and high-performance digital products
          that turn complex requirements into clear user experiences.
        </p>

        <div className={styles.actions} aria-label="Hero calls to action">
          <a className={styles.primaryAction} href="#contact">
            Let&apos;s connect
          </a>
          <a className={styles.secondaryAction} href="#projects">
            View projects
          </a>
        </div>

        <p className={styles.metadata}>
          Mallorca - CET/CEST - Remote-friendly
        </p>
      </div>

      <div className={styles.visual} aria-label="Portrait of Jose Crespi">
        <span className={styles.visualRing} aria-hidden="true" />
        <span className={styles.visualRule} aria-hidden="true" />
        <Image
          className={styles.portrait}
          src="/portrait-hero.png"
          alt="Portrait of Jose Crespi"
          width={758}
          height={568}
          priority
        />
      </div>
    </section>
  );
}

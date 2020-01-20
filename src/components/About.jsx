import React from 'react';
import styles from '../css/main.scss';

const About = () => (
  <React.Fragment>
    <section className={styles['about-me']} id="about">
      <h2 className={styles['section__title section__title--about']}>Who I am</h2>
      <p className={styles['section__subtitle section__subtitle--about']}>
Designer & developer based out of
        NYC
      </p>

      <div className={styles['about-me__body']}>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <img src="img/dev-jane-02.jpg" alt="" className={styles['about-me__img']} />
    </section>
  </React.Fragment>
);

export default About;

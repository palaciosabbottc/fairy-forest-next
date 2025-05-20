'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import styles from './page.module.css';
import Particles from '@/components/Particles';

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (wrapperRef.current && contentRef.current) {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current
      });
    }

    const handleScroll = () => {
      document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.content} ref={contentRef}>
        <header className={styles.mainHeader}>
          <div className={styles.layers}>
            <div className={styles.layerHeader}>
              <div className={styles.layersCaption}>Welcome to Paralax</div>
              <div className={styles.layersTitle}>Fairy Forest</div>
            </div>
            <div 
              className={`${styles.layer} ${styles.layersBase}`}
              style={{ backgroundImage: 'url(/img/layer-base.png)' }}
            />
            <div 
              className={`${styles.layer} ${styles.layersMiddle}`}
              style={{ backgroundImage: 'url(/img/layer-middle.png)' }}
            />
            <Particles color="#E8DE9A" />
            <div 
              className={`${styles.layer} ${styles.layersFront}`}
              style={{ backgroundImage: 'url(/img/layer-front.png)' }}
            />
          </div>
        </header>

        <article 
          className={styles.mainArticle}
          style={{ backgroundImage: 'url(/img/dungeon.jpg)' }}
        >
          <div className={styles.mainArticleContent}>
            <h2 className={styles.mainArticleHeader}>To be continued</h2>
            <p className={styles.mainArticleParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolorum, 
              dolore illo natus reprehenderit tempore iure asperiores enim facere non dicta 
              pariatur exercitationem, officia tenetur! Enim, distinctio perferendis nisi 
              itaque laudantium molestias?
            </p>
          </div>
          <div className={styles.copy}>© GdoubleA</div>
        </article>
      </div>
    </div>
  );
}

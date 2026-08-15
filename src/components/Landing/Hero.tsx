import { useEffect, useState } from 'react'
import { CONTACT } from '../../config/contact'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const openContact = () => {
    window.open(CONTACT[CONTACT.preferred], '_blank')
  }

  return (
    <section className={styles.hero} aria-label="Welcome to Memora">
      <div className={styles.bg} />

      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        <div className={styles.text}>
          <div className={styles.brand}>
            <h1 className={styles.title}>MEMORA</h1>
            <p className={styles.byline}>by Intellexy</p>
          </div>

          <h2 className={styles.headline}>
            More than a message.<br />
            <span className={styles.accent}>A memory they'll treasure.</span>
          </h2>

          <p className={styles.sub}>
            Turn your special moments into<br className={styles.brDesktop} />
            a beautiful digital experience.
          </p>

          <button onClick={openContact} className={styles.cta}>
            <span>Talk to us</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.phoneContainer}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.greetingPreview}>
                <div className={styles.greetingHeader}>
                  <div className={styles.greetingDecor} />
                  <p className={styles.greetingFor}>For You</p>
                </div>
                <div className={styles.greetingPhotos}>
                  <div className={`${styles.photo} ${styles.photo1}`}>
                    <div className={styles.photoInner} />
                  </div>
                  <div className={`${styles.photo} ${styles.photo2}`}>
                    <div className={styles.photoInner} />
                  </div>
                  <div className={`${styles.photo} ${styles.photo3}`}>
                    <div className={styles.photoInner} />
                  </div>
                </div>
                <p className={styles.greetingMessage}>
                  "A little something made just for you..."
                </p>
                <div className={styles.greetingAccent} />
              </div>
            </div>
            <div className={styles.phoneGlow} />
          </div>

          {/* Floating elements */}
          <div className={`${styles.floatingHeart} ${styles.float}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--rose)" opacity="0.4"/>
            </svg>
          </div>
          <div className={`${styles.floatingStar} ${styles.float} ${styles.floatDelay1}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 1l2.39 6.17H19l-5.3 4.08 1.98 6.37L10 13.77l-5.68 3.85 1.98-6.37L1 7.17h6.61L10 1z" fill="var(--rose)" opacity="0.3"/>
            </svg>
          </div>
          <div className={`${styles.floatingDot} ${styles.float} ${styles.floatDelay2}`} />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

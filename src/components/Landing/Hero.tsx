import { useEffect, useState, useRef } from 'react'
import { CONTACT } from '../../config/contact'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [line1Visible, setLine1Visible] = useState(false)
  const [line2Visible, setLine2Visible] = useState(false)
  const [subVisible, setSubVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [phoneVisible, setPhoneVisible] = useState(false)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cinematic entrance sequence
    setTimeout(() => setLoaded(true), 200)
    setTimeout(() => setLine1Visible(true), 600)
    setTimeout(() => setLine2Visible(true), 1000)
    setTimeout(() => setSubVisible(true), 1400)
    setTimeout(() => setCtaVisible(true), 1700)
    setTimeout(() => setPhoneVisible(true), 800)
  }, [])

  const openContact = () => {
    window.open(CONTACT[CONTACT.preferred], '_blank')
  }

  return (
    <section className={styles.hero} aria-label="Welcome to Memora">
      <div className={styles.bg} />
      <div className={styles.bgGlow} />

      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        <div className={styles.text}>
          <div className={styles.brand}>
            <h1 className={styles.title}>MEMORA</h1>
            <p className={styles.byline}>by Intellexy</p>
          </div>

          <div className={styles.headlines}>
            <h2 className={`${styles.headline} ${line1Visible ? styles.lineVisible : ''}`}>
              <span className={styles.headlineInner}>MORE THAN</span>
            </h2>
            <h2 className={`${styles.headline} ${line1Visible ? styles.lineVisible : ''}`}>
              <span className={styles.headlineInner}>A MESSAGE.</span>
            </h2>
            <div className={styles.headlineSpacer} />
            <h2 className={`${styles.headlineAccent} ${line2Visible ? styles.lineVisible : ''}`}>
              <span className={styles.headlineInner}>A MEMORY</span>
            </h2>
            <h2 className={`${styles.headlineAccent} ${line2Visible ? styles.lineVisible : ''}`}>
              <span className={styles.headlineInner}>THEY'LL TREASURE.</span>
            </h2>
          </div>

          <p className={`${styles.sub} ${subVisible ? styles.subVisible : ''}`}>
            Personalized digital experiences<br />
            made for someone special.
          </p>

          <button
            onClick={openContact}
            className={`${styles.cta} ${ctaVisible ? styles.ctaVisible : ''}`}
          >
            <span>Talk to us</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div
          ref={phoneRef}
          className={`${styles.phoneContainer} ${phoneVisible ? styles.phoneVisible : ''}`}
        >
          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.greetingPreview}>
                {/* Greeting content */}
                <div className={styles.greetingHeader}>
                  <div className={styles.greetingDecorLeft} />
                  <p className={styles.greetingFor}>For Sarah</p>
                  <div className={styles.greetingDecorRight} />
                </div>

                <div className={styles.greetingHero}>
                  <p className={styles.greetingHeroText}>
                    Happy Birthday
                  </p>
                  <div className={styles.greetingHeroLine} />
                </div>

                <div className={styles.greetingPhotos}>
                  <div className={`${styles.photo} ${styles.photo1}`}>
                    <div className={styles.photoOverlay} />
                  </div>
                  <div className={`${styles.photo} ${styles.photo2}`}>
                    <div className={styles.photoOverlay} />
                  </div>
                  <div className={`${styles.photo} ${styles.photo3}`}>
                    <div className={styles.photoOverlay} />
                  </div>
                </div>

                <div className={styles.greetingStory}>
                  <p className={styles.greetingStoryText}>
                    "From the very first moment, you made everything better."
                  </p>
                </div>

                <div className={styles.greetingQuote}>
                  <div className={styles.greetingQuoteLine} />
                  <p className={styles.greetingQuoteText}>
                    The best things in life are the people you love.
                  </p>
                  <div className={styles.greetingQuoteLine} />
                </div>

                <div className={styles.greetingFooter}>
                  <div className={styles.greetingHeart} />
                  <p className={styles.greetingFooterText}>With love, always</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phoneShadow} />
          <div className={styles.phoneGlow} />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

import { useInView } from '../../hooks/useInView'
import styles from './WhatIsMemora.module.css'

export default function WhatIsMemora() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [demoRef, demoVisible] = useInView<HTMLDivElement>()

  return (
    <section id="about" className={styles.section} aria-label="What is Memora">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            What if a greeting could feel<br />
            <span className={styles.accent}>like an experience?</span>
          </h2>
        </div>

        <div
          ref={demoRef}
          className={`${styles.demo} ${demoVisible ? styles.visible : ''}`}
        >
          <div className={styles.phoneContainer}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.greetingFlow}>
                  {/* Hero section */}
                  <div className={styles.flowSection}>
                    <div className={styles.flowDecor} />
                    <p className={styles.flowName}>For Sarah</p>
                    <p className={styles.flowTitle}>Happy Birthday</p>
                    <div className={styles.flowLine} />
                  </div>

                  {/* Photo section */}
                  <div className={styles.flowSection}>
                    <div className={styles.flowPhotos}>
                      <div className={styles.flowPhoto} />
                      <div className={styles.flowPhoto} />
                    </div>
                    <p className={styles.flowCaption}>June 14, 2025</p>
                  </div>

                  {/* Story section */}
                  <div className={styles.flowSection}>
                    <p className={styles.flowStory}>
                      "From the very first moment, you made everything better."
                    </p>
                  </div>

                  {/* Quote section */}
                  <div className={styles.flowSection}>
                    <div className={styles.flowQuoteDecor} />
                    <p className={styles.flowQuote}>
                      The best things in life are the people you love.
                    </p>
                    <div className={styles.flowQuoteDecor} />
                  </div>

                  {/* Timeline section */}
                  <div className={styles.flowSection}>
                    <p className={styles.flowTimelineLabel}>Our Journey</p>
                    <div className={styles.flowTimeline}>
                      <div className={styles.flowTimelineDot} />
                      <div className={styles.flowTimelineLine} />
                      <div className={styles.flowTimelineDot} />
                      <div className={styles.flowTimelineLine} />
                      <div className={styles.flowTimelineDot} />
                    </div>
                  </div>

                  {/* Final message */}
                  <div className={styles.flowSection}>
                    <div className={styles.flowHeart} />
                    <p className={styles.flowFinal}>
                      Here's to many more memories together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={styles.featureName}>Photos</span>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={styles.featureName}>Stories</span>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className={styles.featureName}>Music</span>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                </svg>
              </div>
              <span className={styles.featureName}>Video</span>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={styles.featureName}>Timeline</span>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.featureName}>Messages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

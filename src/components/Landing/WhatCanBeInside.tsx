import { useInView } from '../../hooks/useInView'
import styles from './WhatCanBeInside.module.css'

const features = [
  { name: 'Photos', icon: '📸', position: 'top-left' },
  { name: 'Stories', icon: '📝', position: 'middle-left' },
  { name: 'Music', icon: '🎵', position: 'top-right' },
  { name: 'Videos', icon: '🎬', position: 'middle-right' },
  { name: 'Timelines', icon: '📅', position: 'bottom-left' },
  { name: 'Messages', icon: '💌', position: 'bottom-right' },
  { name: 'Quotes', icon: '❝', position: 'bottom-center' }
]

export default function WhatCanBeInside() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [phoneRef, phoneVisible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="What can be inside">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>Make it yours.</h2>
          <p className={styles.subtitle}>Everything you need to create something special.</p>
        </div>

        <div
          ref={phoneRef}
          className={`${styles.phoneLayout} ${phoneVisible ? styles.visible : ''}`}
        >
          {features.map((feature, i) => (
            <div
              key={feature.name}
              className={`${styles.feature} ${styles[feature.position]}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className={styles.featureIcon} role="img" aria-hidden="true">{feature.icon}</span>
              <span className={styles.featureName}>{feature.name}</span>
            </div>
          ))}

          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneContent}>
                <div className={styles.phoneDecor} />
                <p className={styles.phoneTitle}>Happy Birthday</p>
                <p className={styles.phoneSubtitle}>A gift made just for you</p>
                <div className={styles.phonePhotos}>
                  <div className={styles.phonePhoto} />
                  <div className={styles.phonePhoto} />
                </div>
                <div className={styles.phoneLine} />
                <p className={styles.phoneQuote}>Every moment with you is a gift.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

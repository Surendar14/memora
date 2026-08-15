import { useInView } from '../../hooks/useInView'
import styles from './WhatCanBeInside.module.css'

const features = [
  {
    name: 'Photos',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M25 19l-7-7L5 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    position: 'top-left'
  },
  {
    name: 'Stories',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 7h18M5 14h18M5 21h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    position: 'middle-left'
  },
  {
    name: 'Music',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M11 21V7l14-2.5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="21" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="21" cy="18.5" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    position: 'top-right'
  },
  {
    name: 'Video',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <polygon points="12,9 19,14 12,19" fill="currentColor"/>
      </svg>
    ),
    position: 'middle-right'
  },
  {
    name: 'Timeline',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    position: 'bottom-left'
  },
  {
    name: 'Messages',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M25 14a10 10 0 01-10 10 9.86 9.86 0 01-4.5-1.1L3 25l2.1-6.3A9.86 9.86 0 014 14 10 10 0 0114 4h.5a10.14 10.14 0 0110 10v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    position: 'bottom-right'
  }
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
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className={styles.featureIcon}>{feature.icon}</span>
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
                <div className={styles.phoneTimeline}>
                  <div className={styles.phoneTimelineDot} />
                  <div className={styles.phoneTimelineLine} />
                  <div className={styles.phoneTimelineDot} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

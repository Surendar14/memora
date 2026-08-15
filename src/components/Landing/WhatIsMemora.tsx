import { useInView } from '../../hooks/useInView'
import styles from './WhatIsMemora.module.css'

const steps = [
  { label: 'Photos', icon: '📸', description: 'Your favorite moments' },
  { label: 'Stories', icon: '📝', description: 'The words that matter' },
  { label: 'Music', icon: '🎵', description: 'The soundtrack of you' },
  { label: 'Memories', icon: '💭', description: 'Moments preserved' },
  { label: 'A moment they\'ll remember', icon: '✨', description: 'Forever' }
]

export default function WhatIsMemora() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [descRef, descVisible] = useInView<HTMLParagraphElement>()
  const [stepsRef, stepsVisible] = useInView<HTMLDivElement>()

  return (
    <section id="about" className={styles.section} aria-label="What is Memora">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <span className={styles.label}>What is Memora?</span>
          <h2 className={styles.title}>
            Transform your moments into<br />
            <span className={styles.accent}>something beautiful.</span>
          </h2>
        </div>

        <p
          ref={descRef}
          className={`${styles.description} ${descVisible ? styles.visible : ''}`}
        >
          Memora transforms your photos, stories, messages and special moments
          into a beautiful digital experience made for someone special.
        </p>

        <div
          ref={stepsRef}
          className={`${styles.steps} ${stepsVisible ? styles.visible : ''}`}
        >
          {steps.map((step, i) => (
            <div key={step.label} className={styles.step} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.stepIcon}>
                <span role="img" aria-hidden="true">{step.icon}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepLabel}>{step.label}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.connector}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

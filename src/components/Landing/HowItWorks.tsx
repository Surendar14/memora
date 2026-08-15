import { useInView } from '../../hooks/useInView'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Tell us your story',
    description: 'Share the occasion, memories, photos and message you want to give them.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M28 16a12 12 0 01-12 12 11.86 11.86 0 01-5.5-1.4L4 28l2-6.5A11.86 11.86 0 014 16 12 12 0 0116 4h.5a12.14 12.14 0 0112 12v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="16" r="1" fill="currentColor"/>
        <circle cx="16" cy="16" r="1" fill="currentColor"/>
        <circle cx="21" cy="16" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'We create your Memora',
    description: 'We turn your moments into a beautiful personalized digital experience.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.88L16 19.77l-6.18 3.25L11 16.14l-5-4.87 6.91-1.01L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Share the surprise',
    description: 'Send them one simple link and let the moment unfold.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M28 16l-7.5-7.5M28 16l-7.5 7.5M28 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
]

export default function HowItWorks() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [stepsRef, stepsVisible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="How it works">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <span className={styles.label}>How it works</span>
          <h2 className={styles.title}>Three simple steps.</h2>
        </div>

        <div
          ref={stepsRef}
          className={`${styles.steps} ${stepsVisible ? styles.visible : ''}`}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={styles.step}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {i < steps.length - 1 && (
                <div className={styles.stepConnector}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M8 20H32M32 20L26 14M32 20L26 26" stroke="var(--warm-beige)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

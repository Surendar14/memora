import { useInView } from '../../hooks/useInView'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Tell us your story',
    description: 'Share the occasion, memories, photos and message you want to give them.',
    icon: '💬'
  },
  {
    number: '02',
    title: 'We create your Memora',
    description: 'We turn your moments into a beautiful personalized digital experience.',
    icon: '✨'
  },
  {
    number: '03',
    title: 'Share the surprise',
    description: 'Send them one simple link and let the moment unfold.',
    icon: '🎁'
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
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepLine} />
              </div>
              <div className={styles.stepIcon}>
                <span role="img" aria-hidden="true">{step.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

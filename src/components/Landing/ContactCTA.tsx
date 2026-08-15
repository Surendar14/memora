import { useInView } from '../../hooks/useInView'
import { CONTACT } from '../../config/contact'
import styles from './ContactCTA.module.css'

export default function ContactCTA() {
  const [ref, visible] = useInView<HTMLDivElement>()

  const openContact = () => {
    window.open(CONTACT[CONTACT.preferred], '_blank')
  }

  return (
    <section className={styles.section} aria-label="Contact us">
      <div className={styles.bg} />

      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.content} ${visible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            Have someone special<br />
            <span className={styles.accent}>in mind?</span>
          </h2>

          <p className={styles.subtitle}>
            Tell us the occasion.<br />
            We'll create something memorable.
          </p>

          <button onClick={openContact} className={styles.cta}>
            <span>Talk to us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

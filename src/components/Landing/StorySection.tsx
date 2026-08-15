import { useInView } from '../../hooks/useInView'
import styles from './StorySection.module.css'

export default function StorySection() {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="Your story">
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.content} ${visible ? styles.visible : ''}`}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <span className={styles.label}>Every story deserves a place</span>

              <div className={styles.quote}>
                <span className={styles.quoteMark}>❝</span>
                <p className={styles.text}>
                  From the first conversation to all the little moments in between,
                  every memory became a part of our story.
                </p>
              </div>

              <div className={styles.signature}>
                <div className={styles.signatureLine} />
                <span className={styles.signatureText}>With love, always</span>
              </div>
            </div>

            <div className={styles.cardShadow} />
          </div>
        </div>
      </div>
    </section>
  )
}

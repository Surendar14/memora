import { useInView } from '../../hooks/useInView'
import styles from './StorySection.module.css'

export default function StorySection() {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="Your story">
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.content} ${visible ? styles.visible : ''}`}>
          <div className={styles.letter}>
            <div className={styles.letterHeader}>
              <div className={styles.letterDecor} />
              <span className={styles.letterDate}>June 14, 2025</span>
              <div className={styles.letterDecor} />
            </div>

            <div className={styles.letterBody}>
              <p className={styles.letterText}>
                From the very first moment,<br />
                you made everything better.
              </p>

              <div className={styles.letterDivider} />

              <p className={styles.letterQuote}>
                "The best things in life are<br />
                the people you love."
              </p>
            </div>

            <div className={styles.letterFooter}>
              <div className={styles.letterSignature}>
                <div className={styles.signatureLine} />
                <span className={styles.signatureText}>With love, always</span>
              </div>
            </div>

            <div className={styles.letterTexture} />
          </div>

          <div className={styles.letterShadow} />
        </div>
      </div>
    </section>
  )
}

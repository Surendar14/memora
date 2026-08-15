import { useInView } from '../../hooks/useInView'
import styles from './ScrollTransition.module.css'

export default function ScrollTransition() {
  const [ref1, visible1] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [ref2, visible2] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className={styles.section} aria-label="Introduction">
      <div className={styles.inner}>
        <div
          ref={ref1}
          className={`${styles.message} ${visible1 ? styles.visible : ''}`}
        >
          <p className={styles.text}>
            Some moments deserve<br />
            more than a text.
          </p>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
        </div>

        <div
          ref={ref2}
          className={`${styles.message} ${visible2 ? styles.visible : ''}`}
        >
          <p className={styles.textLarge}>
            They deserve<br />
            <span className={styles.italic}>an experience.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

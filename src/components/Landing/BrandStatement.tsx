import { useInView } from '../../hooks/useInView'
import styles from './BrandStatement.module.css'

export default function BrandStatement() {
  const [ref1, visible1] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [ref2, visible2] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [ref3, visible3] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className={styles.section} aria-label="Brand statement">
      <div className={styles.inner}>
        <div
          ref={ref1}
          className={`${styles.line} ${visible1 ? styles.visible : ''}`}
        >
          <p className={styles.text}>
            We believe the best gifts<br />
            aren't always things.
          </p>
        </div>

        <div
          ref={ref2}
          className={`${styles.line} ${visible2 ? styles.visible : ''}`}
        >
          <p className={styles.textLarge}>
            Sometimes, they're <span className={styles.accent}>moments.</span>
          </p>
        </div>

        <div
          ref={ref3}
          className={`${styles.brand} ${visible3 ? styles.visible : ''}`}
        >
          <div className={styles.brandLine} />
          <p className={styles.brandText}>Memora by Intellexy</p>
          <div className={styles.brandLine} />
        </div>
      </div>
    </section>
  )
}

import { useInView } from '../../hooks/useInView'
import styles from './EmotionalMoment.module.css'

export default function EmotionalMoment() {
  const [ref1, visible1] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [ref2, visible2] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className={styles.section} aria-label="Emotional moment">
      <div className={styles.bg} />

      <div className={styles.inner}>
        <div
          ref={ref1}
          className={`${styles.message} ${visible1 ? styles.visible : ''}`}
        >
          <p className={styles.text}>
            Some things are too special<br />
            to be sent as just a message.
          </p>
        </div>

        <div className={styles.pause}>
          <div className={styles.pauseLine} />
        </div>

        <div
          ref={ref2}
          className={`${styles.message} ${visible2 ? styles.visible : ''}`}
        >
          <p className={styles.textLarge}>
            Give them something<br />
            <span className={styles.accent}>they'll remember.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

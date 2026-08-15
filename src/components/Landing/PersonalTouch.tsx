import { useInView } from '../../hooks/useInView'
import styles from './PersonalTouch.module.css'

export default function PersonalTouch() {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="Personal touch">
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.content} ${visible ? styles.visible : ''}`}
        >
          <div className={styles.layout}>
            <div className={styles.photoContainer}>
              <div className={styles.photo}>
                <div className={styles.photoOverlay} />
              </div>
              <div className={styles.photoDecor1} />
              <div className={styles.photoDecor2} />
            </div>

            <div className={styles.text}>
              <span className={styles.label}>Made for one person</span>

              <h2 className={styles.title}>
                Every Memora is created around<br />
                <span className={styles.accent}>the person, the story</span><br />
                and the moment that makes it special.
              </h2>

              <div className={styles.example}>
                <div className={styles.exampleDecor} />
                <p className={styles.exampleFor}>For Sarah</p>
                <p className={styles.exampleText}>
                  A little something<br />
                  made just for you.
                </p>
                <div className={styles.exampleDecor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

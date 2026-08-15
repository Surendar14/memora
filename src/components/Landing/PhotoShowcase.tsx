import { useInView } from '../../hooks/useInView'
import styles from './PhotoShowcase.module.css'

const photos = [
  { id: 1, ratio: 'tall', color: 'var(--blush)' },
  { id: 2, ratio: 'wide', color: 'var(--rose)' },
  { id: 3, ratio: 'square', color: 'var(--warm-beige)' },
  { id: 4, ratio: 'tall', color: 'var(--rose-deep)' },
  { id: 5, ratio: 'wide', color: 'var(--blush)' },
  { id: 6, ratio: 'square', color: 'var(--rose)' }
]

export default function PhotoShowcase() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="Photo showcase">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            Your moments.<br />
            <span className={styles.accent}>Beautifully brought together.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className={`${styles.photo} ${styles[photo.ratio]}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                '--photo-color': photo.color
              } as React.CSSProperties}
            >
              <div className={styles.photoInner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

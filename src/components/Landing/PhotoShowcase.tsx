import { useInView } from '../../hooks/useInView'
import styles from './PhotoShowcase.module.css'

const photos = [
  {
    id: 1,
    caption: 'June 14, 2025',
    note: 'The day everything changed.',
    ratio: 'tall'
  },
  {
    id: 2,
    caption: 'First trip together',
    note: 'We got lost and found ourselves.',
    ratio: 'wide'
  },
  {
    id: 3,
    caption: 'Your birthday',
    note: '365 days of you.',
    ratio: 'square'
  },
  {
    id: 4,
    caption: 'Just because',
    note: 'No reason needed.',
    ratio: 'tall'
  },
  {
    id: 5,
    caption: 'Our place',
    note: 'Where we always return.',
    ratio: 'wide'
  },
  {
    id: 6,
    caption: 'The little things',
    note: 'That became everything.',
    ratio: 'square'
  }
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
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.photoInner}>
                <div className={styles.photoOverlay} />
              </div>
              <div className={styles.photoMeta}>
                <p className={styles.photoCaption}>{photo.caption}</p>
                <p className={styles.photoNote}>{photo.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

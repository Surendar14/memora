import { useInView } from '../../hooks/useInView'
import styles from './Occasions.module.css'

const occasions = [
  {
    name: 'Birthday',
    description: 'Make their day feel\na little more unforgettable.',
    color: 'var(--blush)'
  },
  {
    name: 'Anniversary',
    description: 'Celebrate everything\nyou\'ve shared.',
    color: 'var(--rose)'
  },
  {
    name: 'Proposal',
    description: 'Ask the question\nin a way they\'ll never forget.',
    color: 'var(--warm-beige)'
  },
  {
    name: 'Wedding',
    description: 'A gift as beautiful\nas the moment itself.',
    color: 'var(--sand)'
  },
  {
    name: 'Milestone',
    description: 'Mark the moments\nthat define us.',
    color: 'var(--rose-deep)'
  },
  {
    name: 'Farewell',
    description: 'Say goodbye with something\nthey\'ll keep forever.',
    color: 'var(--burgundy)'
  },
  {
    name: 'Just Because',
    description: 'No reason needed.\nJust love.',
    color: 'var(--blush)'
  }
]

export default function Occasions() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className={styles.section} aria-label="Occasions">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            For every moment<br />
            <span className={styles.accent}>worth remembering.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
        >
          {occasions.map((occasion, i) => (
            <div
              key={occasion.name}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={styles.cardVisual}
                style={{ background: occasion.color }}
              >
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{occasion.name}</h3>
                <p className={styles.cardDesc}>{occasion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

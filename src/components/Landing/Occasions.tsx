import { useInView } from '../../hooks/useInView'
import styles from './Occasions.module.css'

const occasions = [
  {
    name: 'Birthday',
    description: 'Make their day feel a little more unforgettable.',
    gradient: 'linear-gradient(135deg, #e5cfc4 0%, #c9a89c 100%)'
  },
  {
    name: 'Anniversary',
    description: 'Celebrate the journey you\'ve shared together.',
    gradient: 'linear-gradient(135deg, #c9a89c 0%, #a88278 100%)'
  },
  {
    name: 'Wedding',
    description: 'A gift as beautiful as the moment itself.',
    gradient: 'linear-gradient(135deg, #f5efe8 0%, #e8ddd3 100%)'
  },
  {
    name: 'Proposal',
    description: 'Ask the question in a way they\'ll never forget.',
    gradient: 'linear-gradient(135deg, #e8ddd3 0%, #c9a89c 100%)'
  },
  {
    name: 'Milestone',
    description: 'Mark the moments that define us.',
    gradient: 'linear-gradient(135deg, #c9a89c 0%, #e5cfc4 100%)'
  },
  {
    name: 'Farewell',
    description: 'Say goodbye with something they\'ll keep forever.',
    gradient: 'linear-gradient(135deg, #a88278 0%, #8b6f65 100%)'
  },
  {
    name: 'Just Because',
    description: 'No reason needed. Just love.',
    gradient: 'linear-gradient(135deg, #e5cfc4 0%, #f5efe8 100%)'
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
          <span className={styles.label}>Occasions</span>
          <h2 className={styles.title}>
            Made for every moment<br />
            <span className={styles.accent}>that matters.</span>
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
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div
                className={styles.cardVisual}
                style={{ background: occasion.gradient }}
              />
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

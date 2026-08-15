import { useInView } from '../../hooks/useInView'
import styles from './TheExperience.module.css'

const sections = [
  {
    id: 'hero',
    label: '01',
    title: 'For Sarah',
    content: 'Happy Birthday',
    type: 'dark'
  },
  {
    id: 'photo',
    label: '02',
    title: 'A Memory',
    content: 'June 14, 2025',
    type: 'photo'
  },
  {
    id: 'story',
    label: '03',
    title: 'Your Story',
    content: 'From the very first moment, you made everything better.',
    type: 'light'
  },
  {
    id: 'quote',
    label: '04',
    title: 'A Quote',
    content: '"The best things in life are the people you love."',
    type: 'light'
  },
  {
    id: 'timeline',
    label: '05',
    title: 'Our Journey',
    content: 'Every memory, together.',
    type: 'photo'
  },
  {
    id: 'message',
    label: '06',
    title: 'Final Message',
    content: 'Here\'s to many more memories together.',
    type: 'dark'
  }
]

export default function TheExperience() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()

  return (
    <section id="moments" className={styles.section} aria-label="The Memora Experience">
      <div className={styles.inner}>
        <div
          ref={titleRef}
          className={`${styles.titleGroup} ${titleVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.title}>
            It's not just a greeting.
          </h2>
          <p className={styles.subtitle}>
            It's something they get to <span className={styles.italic}>experience.</span>
          </p>
        </div>

        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <div className={styles.stickyLeft}>
              <p className={styles.stickyText}>
                Scroll through<br />
                <span className={styles.stickyAccent}>an actual Memora.</span>
              </p>
            </div>

            <div className={styles.stickyRight}>
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <div className={styles.scrollContent}>
                    {sections.map((section) => (
                      <div
                        key={section.id}
                        className={`${styles.scrollSection} ${styles[section.type]}`}
                      >
                        <span className={styles.scrollLabel}>{section.label}</span>
                        <h3 className={styles.scrollTitle}>{section.title}</h3>
                        {section.type === 'photo' ? (
                          <div className={styles.scrollPhoto}>
                            <div className={styles.scrollPhotoInner} />
                          </div>
                        ) : null}
                        <p className={styles.scrollText}>{section.content}</p>
                        {section.id === 'timeline' && (
                          <div className={styles.scrollTimeline}>
                            <div className={styles.scrollTimelineDot} />
                            <div className={styles.scrollTimelineLine} />
                            <div className={styles.scrollTimelineDot} />
                            <div className={styles.scrollTimelineLine} />
                            <div className={styles.scrollTimelineDot} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

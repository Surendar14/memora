import { useInView } from '../../hooks/useInView'
import styles from './TheExperience.module.css'

const sections = [
  { type: 'hero', content: 'Happy Birthday, Sarah' },
  { type: 'photo', label: 'Memory' },
  { type: 'story', content: 'From the very first moment, you made everything better.' },
  { type: 'quote', content: '"The best things in life are the people you love..."' },
  { type: 'timeline', label: 'Our Journey' },
  { type: 'message', content: 'Here\'s to many more memories together.' }
]

export default function TheExperience() {
  const [titleRef, titleVisible] = useInView<HTMLDivElement>()
  const [cardsRef, cardsVisible] = useInView<HTMLDivElement>()

  return (
    <section id="experiences" className={styles.section} aria-label="The Memora Experience">
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

        <div
          ref={cardsRef}
          className={`${styles.experienceGrid} ${cardsVisible ? styles.visible : ''}`}
        >
          {sections.map((section, i) => (
            <div
              key={section.type + i}
              className={`${styles.card} ${styles[section.type]}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {section.type === 'hero' && (
                <div className={styles.cardHero}>
                  <div className={styles.cardDecor} />
                  <h3 className={styles.cardHeroText}>{section.content}</h3>
                  <div className={styles.cardDecorBottom} />
                </div>
              )}

              {section.type === 'photo' && (
                <div className={styles.cardPhoto}>
                  <div className={styles.cardPhotoInner} />
                  <span className={styles.cardPhotoLabel}>{section.label}</span>
                </div>
              )}

              {section.type === 'story' && (
                <div className={styles.cardStory}>
                  <div className={styles.cardStoryQuote}>❝</div>
                  <p className={styles.cardStoryText}>{section.content}</p>
                </div>
              )}

              {section.type === 'quote' && (
                <div className={styles.cardQuote}>
                  <p className={styles.cardQuoteText}>{section.content}</p>
                  <div className={styles.cardQuoteLine} />
                </div>
              )}

              {section.type === 'timeline' && (
                <div className={styles.cardTimeline}>
                  <span className={styles.cardTimelineLabel}>{section.label}</span>
                  <div className={styles.cardTimelineDots}>
                    <span /><span /><span />
                  </div>
                </div>
              )}

              {section.type === 'message' && (
                <div className={styles.cardMessage}>
                  <p className={styles.cardMessageText}>{section.content}</p>
                  <div className={styles.cardMessageHeart}>♥</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

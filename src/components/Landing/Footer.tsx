import { CONTACT } from '../../config/contact'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>MEMORA</h2>
            <p className={styles.tagline}>Make moments memorable.</p>
          </div>

          <div className={styles.links}>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.link}
            >
              Email
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.company}>
            <p className={styles.companyName}>Memora</p>
            <p className={styles.companyRelation}>A product by Intellexy</p>
          </div>

          <div className={styles.legal}>
            <p className={styles.copyright}>© 2026 Intellexy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

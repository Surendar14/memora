import { useEffect, useState } from 'react'
import { CONTACT } from '../../config/contact'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openContact = () => {
    setMobileOpen(false)
    window.open(CONTACT[CONTACT.preferred], '_blank')
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Memora home">
          MEMORA
        </a>

        <div className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          <button onClick={() => scrollToSection('about')} className={styles.link}>
            About
          </button>
          <button onClick={() => scrollToSection('experiences')} className={styles.link}>
            Experiences
          </button>
          <button onClick={openContact} className={styles.contactBtn}>
            Contact
          </button>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.menuIcon} ${mobileOpen ? styles.menuOpen : ''}`}>
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  )
}

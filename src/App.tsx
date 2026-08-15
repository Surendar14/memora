import { useEffect, useState } from 'react'
import LandingPage from './components/Landing/LandingPage'

function hasGreetingData(): boolean {
  const params = new URLSearchParams(window.location.search)
  return params.has('data')
}

export default function App() {
  const [isGreeting, setIsGreeting] = useState(hasGreetingData())

  useEffect(() => {
    const handlePopState = () => {
      setIsGreeting(hasGreetingData())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (isGreeting) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'var(--font-body)',
        color: 'var(--charcoal)',
        background: 'var(--ivory)'
      }}>
        <p style={{ fontSize: 'var(--text-lg)', opacity: 0.6 }}>
          Loading your greeting...
        </p>
      </div>
    )
  }

  return <LandingPage />
}

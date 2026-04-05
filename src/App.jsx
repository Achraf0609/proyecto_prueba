import { useEffect, useState } from 'react'
import './App.css'
import CreditsPage from './components/CreditsPage'
import MoodPicker from './components/MoodPicker'
import ResultCard from './components/ResultCard'
import { MAX_MOODS, MIN_MOODS, getRandomPokemon, moods, pokemonList } from './data/pokemon'

function App() {
  const getPageFromHash = () => (window.location.hash === '#credits' ? 'credits' : 'home')
  const [page, setPage] = useState(getPageFromHash)
  const [selectedMoods, setSelectedMoods] = useState([])
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [isRevealing, setIsRevealing] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  let moodCountLabel = `${selectedMoods.length}/${MAX_MOODS} vibes selected`

  if (selectedMoods.length < MIN_MOODS) {
    moodCountLabel = `Pick ${MIN_MOODS - selectedMoods.length} more vibe${MIN_MOODS - selectedMoods.length === 1 ? '' : 's'}`
  } else if (selectedMoods.length === MAX_MOODS) {
    moodCountLabel = 'You reached the vibe limit'
  }

  const toggleMood = (moodId) => {
    setError('')

    setSelectedMoods((currentMoods) => {
      if (currentMoods.includes(moodId)) {
        return currentMoods.filter((currentMood) => currentMood !== moodId)
      }

      if (currentMoods.length >= MAX_MOODS) {
        setError(`You can choose up to ${MAX_MOODS} vibes.`)
        return currentMoods
      }

      return [...currentMoods, moodId]
    })
  }

  const revealPokemon = (nextPokemon) => {
    setIsRevealing(true)
    setResult(nextPokemon)

    window.setTimeout(() => {
      setIsRevealing(false)
    }, 520)
  }

  const handleSubmit = () => {
    if (selectedMoods.length < MIN_MOODS) {
      setError(`Choose at least ${MIN_MOODS} vibes to reveal your match.`)
      return
    }

    const scoredPokemon = pokemonList
      .map((pokemon) => ({
        ...pokemon,
        score: selectedMoods.reduce(
          (total, moodId) => total + Number(pokemon.moods.includes(moodId)),
          0,
        ),
      }))
      .filter((pokemon) => pokemon.score > 0)

    const highestScore = Math.max(...scoredPokemon.map((pokemon) => pokemon.score))
    const bestMatches = scoredPokemon.filter((pokemon) => pokemon.score === highestScore)
    const chosenPokemon = bestMatches[Math.floor(Math.random() * bestMatches.length)]

    setError('')
    revealPokemon(chosenPokemon)
  }

  const handleReset = () => {
    setSelectedMoods([])
    setResult(null)
    setError('')
    setIsRevealing(false)
  }

  const handleRandomize = () => {
    setError('')
    revealPokemon(getRandomPokemon())
  }

  const navigateTo = (nextPage) => {
    window.location.hash = nextPage === 'credits' ? 'credits' : ''
    setPage(nextPage)
  }

  if (page === 'credits') {
    return (
      <>
        <header className="top-nav">
          <button className="nav-link" type="button" onClick={() => navigateTo('home')}>
            Vibe matcher
          </button>
          <button className="nav-link active" type="button" onClick={() => navigateTo('credits')}>
            Credits
          </button>
        </header>
        <CreditsPage />
      </>
    )
  }

  return (
    <>
      <header className="top-nav">
        <button className="nav-link active" type="button" onClick={() => navigateTo('home')}>
          Vibe matcher
        </button>
        <button className="nav-link" type="button" onClick={() => navigateTo('credits')}>
          Credits
        </button>
      </header>
      <div className="creator-banner">
        Created by Achraf - <a href="https://x.com/Achraf0609" target="_blank" rel="noreferrer">@Achraf0609</a>
      </div>

      <main className="app-shell">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">A cozy little vibe check for your timeline</p>
            <h1>What Pokemon matches your vibe today?</h1>
            <p className="hero-description">
              Choose the moods that feel most like you right now and uncover a shareable
              Pokemon match inspired by the first 151.
            </p>
          </div>

          <div className="hero-orb">
            <div className="orb-card">
              <span className="orb-glow" />
              <span className="orb-center" />
              <p>Made for screenshots, moodboards, and posting on X.</p>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel selector-panel">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">Step 1</p>
                <h2>Pick your current vibes</h2>
              </div>
              <span className="selection-pill">{moodCountLabel}</span>
            </div>

            <p className="panel-copy">
              Mix soft, chaotic, brave, sleepy, or mysterious energy. The app works best
              when you pick between {MIN_MOODS} and {MAX_MOODS} moods.
            </p>

            <MoodPicker moods={moods} selectedMoods={selectedMoods} onToggleMood={toggleMood} />

            <div className="action-row">
              <button className="primary-button" type="button" onClick={handleSubmit}>
                Show me my Pokemon
              </button>
              <button className="secondary-button" type="button" onClick={handleReset}>
                Reset vibes
              </button>
              <button className="ghost-button" type="button" onClick={handleRandomize}>
                Randomize
              </button>
            </div>

            {error ? <p className="helper-message error-message">{error}</p> : null}

          </div>

          <div className="panel result-panel">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">Step 2</p>
                <h2>Your Pokemon reveal</h2>
              </div>
            </div>

            <ResultCard result={result} isRevealing={isRevealing} onRandomize={handleRandomize} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

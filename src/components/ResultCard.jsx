const fallbackResult = {
  name: 'Your match is waiting',
  image: '/pokemon/placeholder.svg',
  description:
    'Choose a few moods and we will reveal a Pokemon vibe card ready for screenshots.',
  moods: ['cozy', 'playful', 'mysterious'],
}

function ResultCard({ result, isRevealing, onRandomize }) {
  const activeResult = result ?? fallbackResult

  return (
    <article className={`result-card ${isRevealing ? 'revealing' : ''}`}>
      <div className="result-art-wrap">
        <div className="result-art-bg" />
        <img
          className="result-art"
          src={activeResult.image}
          alt={result ? `${activeResult.name} artwork` : 'Pokemon placeholder silhouette'}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/pokemon/placeholder.svg'
          }}
        />
      </div>

      <div className="result-content">
        <div>
          <p className="result-label">{result ? 'Your vibe match' : 'Awaiting your reveal'}</p>
          <h3>{activeResult.name}</h3>
        </div>

        <p className="result-description">{activeResult.description}</p>

        <div className="tag-row">
          {activeResult.moods.map((mood) => (
            <span key={mood} className="result-tag">
              {mood}
            </span>
          ))}
        </div>

        <button className="mini-button" type="button" onClick={onRandomize}>
          Surprise me instead
        </button>
      </div>
    </article>
  )
}

export default ResultCard

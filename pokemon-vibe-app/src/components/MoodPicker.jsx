function MoodPicker({ moods, selectedMoods, onToggleMood }) {
  return (
    <div className="mood-grid" role="list" aria-label="Mood options">
      {moods.map((mood) => {
        const isSelected = selectedMoods.includes(mood.id)

        return (
          <button
            key={mood.id}
            className={`mood-chip ${isSelected ? 'selected' : ''}`}
            type="button"
            onClick={() => onToggleMood(mood.id)}
            aria-pressed={isSelected}
          >
            <span className="mood-emoji" aria-hidden="true">
              {mood.emoji}
            </span>
            <span className="mood-name">{mood.label}</span>
            <span className="mood-hint">{mood.note}</span>
          </button>
        )
      })}
    </div>
  )
}

export default MoodPicker

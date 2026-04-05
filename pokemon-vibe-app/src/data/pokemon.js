export const MIN_MOODS = 3
export const MAX_MOODS = 5

export const moods = [
  { id: 'cozy', label: 'cozy', emoji: '☁', note: 'gentle comfort energy' },
  { id: 'chaotic', label: 'chaotic', emoji: '✦', note: 'messy but magnetic' },
  { id: 'sleepy', label: 'sleepy', emoji: '☾', note: 'dreamy and low-key' },
  { id: 'brave', label: 'brave', emoji: '⚔', note: 'ready to face things' },
  { id: 'soft', label: 'soft', emoji: '❀', note: 'sweet and tender' },
  { id: 'loyal', label: 'loyal', emoji: '♥', note: 'steady heart energy' },
  { id: 'introvert', label: 'introvert', emoji: '◌', note: 'quiet inner world' },
  { id: 'playful', label: 'playful', emoji: '★', note: 'bouncy and bright' },
  { id: 'mysterious', label: 'mysterious', emoji: '☄', note: 'enigmatic aura' },
  { id: 'emotional', label: 'emotional', emoji: '☼', note: 'big feelings today' },
  { id: 'energetic', label: 'energetic', emoji: '⚡', note: 'go-go-go mode' },
  { id: 'calm', label: 'calm', emoji: '◠', note: 'grounded and serene' },
]

export const pokemonList = [
  {
    id: 25,
    name: 'Pikachu',
    image: '/pokemon/pikachu.png',
    description: 'You are bright, loyal, and impossible to ignore once you show up.',
    moods: ['playful', 'energetic', 'loyal', 'brave'],
  },
  {
    id: 39,
    name: 'Jigglypuff',
    image: '/pokemon/jigglypuff.png',
    description: 'Soft, emotional, and adorable, with a little dramatic flair.',
    moods: ['soft', 'emotional', 'playful', 'cozy'],
  },
  {
    id: 54,
    name: 'Psyduck',
    image: '/pokemon/psyduck.png',
    description: 'Your brain is doing ten things at once, but your charm keeps it cute.',
    moods: ['chaotic', 'sleepy', 'emotional', 'introvert'],
  },
  {
    id: 58,
    name: 'Growlithe',
    image: '/pokemon/growlithe.png',
    description: 'Warm, dependable, and brave enough to protect your people.',
    moods: ['loyal', 'brave', 'energetic', 'cozy'],
  },
  {
    id: 79,
    name: 'Slowpoke',
    image: '/pokemon/slowpoke.png',
    description: 'You are unbothered, cozy, and moving at exactly the right pace.',
    moods: ['sleepy', 'calm', 'cozy', 'soft'],
  },
  {
    id: 94,
    name: 'Gengar',
    image: '/pokemon/gengar.png',
    description: 'Playful mischief, mysterious sparkle, and just enough chaos.',
    moods: ['chaotic', 'mysterious', 'playful', 'energetic'],
  },
  {
    id: 131,
    name: 'Lapras',
    image: '/pokemon/lapras.png',
    description: 'Calm, loyal, and quietly magical in the way you carry others.',
    moods: ['calm', 'loyal', 'soft', 'cozy'],
  },
  {
    id: 133,
    name: 'Eevee',
    image: '/pokemon/eevee.png',
    description: 'Adaptable, sweet, and full of main-character potential.',
    moods: ['soft', 'playful', 'introvert', 'cozy'],
  },
  {
    id: 143,
    name: 'Snorlax',
    image: '/pokemon/snorlax.png',
    description: 'You are comfy, iconic, and fully committed to protecting your peace.',
    moods: ['sleepy', 'cozy', 'calm', 'loyal'],
  },
  {
    id: 150,
    name: 'Mewtwo',
    image: '/pokemon/mewtwo.png',
    description: 'Mysterious, intense, and operating on a wavelength all your own.',
    moods: ['mysterious', 'introvert', 'brave', 'emotional'],
  },
  {
    id: 151,
    name: 'Mew',
    image: '/pokemon/mew.png',
    description: 'Light, curious, playful, and a little unreal in the best way.',
    moods: ['playful', 'soft', 'mysterious', 'energetic'],
  },
]

export function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)]
}

const sentences = [
  'The newly planted trees were held up by wooden frames in hopes they could survive the next storm',
  'The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go',
  'The sky is clear; the stars are twinkling',
  'The light that burns twice as bright burns half as long',
  'I think I will buy the red car, or I will lease the blue one',
  'She let the balloon float up into the air with her hopes and dreams',
  'Tomorrow will bring something new, so leave today as a memory',
  'He put heat on the wound to see what would grow',
  'As he waited for the shower to warm, he noticed that he could hear water change temperature',
  'Today I heard something new and unmemorable',
  'Lucifer was surprised at the amount of life at Death Valley',
  'She had some amazing news to share but nobody to share it with',
  'Sometimes you have to just give up and win by cheating',
  'He ended up burning his fingers poking someone else\'s fire',
  'There have been days when I wished to be separated from my body, but today wasn’t one of those days',
  'Today arrived with a crash of my car through the garage door'
];

const words = [
  'Positive',
  'Hill',
  'President',
  'Pack',
  'Nun',
  'Publication',
  'Expose',
  'Remember',
];

export function generateSentence(): string {
  return sentences[getRandomIndex(sentences.length)];
}

export function generateWord(): string {
  return words[getRandomIndex(words.length)];
}

function getRandomIndex(elementsCount: number): number {
  return Math.floor(Math.random() * (sentences.length));
}

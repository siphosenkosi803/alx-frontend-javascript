export default function updateUniqueItems(map) {
  const itenary = map;

  if (itenary instanceof Map) {
    for (const [key, value] of itenary) {
      if (value === 1) {
        itenary.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return itenary;
}

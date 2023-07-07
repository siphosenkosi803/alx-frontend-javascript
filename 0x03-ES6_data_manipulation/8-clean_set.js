export default function cleanSet(set, startString) {
  const myList = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      myList.push(item.slice(startString.length));
    }
  }

  return myList.join('-');
}

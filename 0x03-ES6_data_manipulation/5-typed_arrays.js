export default function createInt8TypedArray(length, position, value) {
  const theArray = new ArrayBuffer(length);
  const theValue = new DataView(theArray);

  try {
    theValue.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return theValue;
}

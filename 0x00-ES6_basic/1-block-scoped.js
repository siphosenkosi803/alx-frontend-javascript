export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;
    const task2 = false;
    return [task, task2];
  }

  return [task, task2];
}

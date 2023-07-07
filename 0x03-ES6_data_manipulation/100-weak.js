export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let calculator = weakMap.get(endpoint) || 0;
  calculator += 1;

  if (calculator >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, calculator);
  }
}

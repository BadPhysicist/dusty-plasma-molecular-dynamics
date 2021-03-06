export const boundedValue = (from, to, value) => (
  ((((value - from) % (to - from)) + (to - from)) % (to - from)) + from
)

export const generateArray = (length, generator) => (
  [...new Array(length)].map((_, i) => generator(i))
)

export const norm = (x, y) => Math.sqrt((x ** 2) + (y ** 2))

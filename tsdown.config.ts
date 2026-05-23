import { lib } from 'tsdown-preset-sxzz'

export default lib(
  {
    entry: 'shallow',
  },
  {
    attw: true,
    minify: true,
    publint: true,
    sourcemap: true,
  },
)

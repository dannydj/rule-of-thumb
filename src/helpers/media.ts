const sizes = {
  xs: 350,
  xsm: 426,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const media = {
  xs: `@media (min-width: ${sizes.xs}px)`,
  xsm: `@media (min-width: ${sizes.xsm}px)`,
  sm: `@media (min-width: ${sizes.sm}px)`,
  md: `@media (min-width: ${sizes.md}px)`,
  lg: `@media (min-width: ${sizes.lg}px)`,
  xl: `@media (min-width: ${sizes.xl}px)`
}

export default media

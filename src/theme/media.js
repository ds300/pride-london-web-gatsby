import { css } from 'styled-components'
import theme from './theme'

export const media = {
  tablet: function() {
    return `@media (min-width: ${theme.breakpoints[1]}) {
      ${css.apply(null, arguments)}
    }`
  },
  desktop: function() {
    return `@media (min-width: ${theme.breakpoints[2]}) {
      ${css.apply(null, arguments)}
    }`
  },
  desktopHD: function() {
    return `@media (min-width: ${theme.breakpoints[3]}) {
      ${css.apply(null, arguments)}
    }`
  },
}

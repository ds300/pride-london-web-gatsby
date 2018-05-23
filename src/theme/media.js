import { css } from 'styled-components'
import theme from './theme'

export const media = {
  tablet() {
    return `@media (min-width: ${theme.breakpoints[1]}) {
      ${css(...arguments)}
    }`
  },
  desktop() {
    return `@media (min-width: ${theme.breakpoints[2]}) {
      ${css(...arguments)}
    }`
  },
  desktopHD() {
    return `@media (min-width: ${theme.breakpoints[3]}) {
      ${css(...arguments)}
    }`
  },
}

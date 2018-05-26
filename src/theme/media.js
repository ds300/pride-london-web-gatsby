import { css } from 'styled-components'
import theme from './theme'

export const media = {
  tablet: (...args) => css`
    @media (min-width: ${theme.breakpoints[1]}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      ${css(...args)};
    }
  `,

  desktopHD: (...args) => css`
    @media (min-width: ${theme.breakpoints[3]}) {
      ${css(...args)};
    }
  `,
}

import styled from 'styled-components'
import media from '../../helpers/media'

export const ThumbButton = styled.button`
  height: 30px;
  width: 30px;
  ${media.lg} {
    height: 45px;
    width: 45px;
  }

  &.icon-button {
    .thumb {
      padding: 7px;
      height: 16px;
      width: 16px;
      ${media.lg} {
        padding: 11px;
        height: 24px;
        width: 24px;
      }
    }
  }
`

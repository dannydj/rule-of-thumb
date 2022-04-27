import styled from 'styled-components'
import media from '../../../helpers/media'

export const Button = styled.button`
  border: 1px solid #fff;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  width: 107px;
  height: 38px;
  ${media.lg} {
    height: 45px;
    width: 135px;
    font-size: 18px;
  }
`

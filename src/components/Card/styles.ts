import styled from 'styled-components'
import media from '../../helpers/media'

export const CardContent = styled.div`
  width: 351px;
  height: 351px;
  flex: 0 0 auto;
  margin-right: 1rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow-y: hidden;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ backgroundImage }: { backgroundImage: string }) => backgroundImage});
  ${media.md} {
    max-height: 140px;
    width: 100%;
    margin-bottom: 20px;
  }

  &:last-child {
    margin-right: 0;
  }

  .thumb-position {
    position: absolute;
    top: 41.5%;
    ${media.md} {
      top: 0;
    }
  }
`

export const Rectangle = styled.div`
  z-index: 0;
  height: 252px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  ${media.md} {
    z-index: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }

  .left-separation {
    margin-left: 1rem;
  }

  .white-text {
    color: #fff;
    font-weight: 400;
  }

  .text-box {
    width: 279px;
  }

  .margin-bottom-12 {
    margin-bottom: 12px;
  }

  .white-border.icon-button {
    outline: 2px solid #fff;
  }
`

export const Name = styled.div`
  height: 74px;
  width: 281px;
  margin: 7px 0 7px 0;
  font-size: 30px;
  display: flex;
  align-items: flex-end;
`

export const Description = styled.div`
  height: 36px;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Message = styled.div`
  text-align: end;
`

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Button = styled.button`
  border: 1px solid #fff;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  width: 107px;
  height: 38px;
`

export const GaugeBarContainer = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  span {
    padding-left: 0.5rem;
    font-size: 18px;
  }
`

export const GaugeBarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ percentage }: { percentage: number }) => percentage}%;

  &.green {
    background: rgba(60, 187, 180, 0.6);
    height: 100%;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  &.yellow {
    background: rgba(249, 173, 29, 0.6);
    height: 100%;
    justify-content: flex-end;
    padding-right: 1rem;
  }
`

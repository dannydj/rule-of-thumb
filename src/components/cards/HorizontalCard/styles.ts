import styled from 'styled-components'
import { gradient } from '../../../assets/img'
import media from '../../../helpers/media'

export const CardContent = styled.div`
  height: 140px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  max-height: 140px;
  width: 100%;
  margin-bottom: 20px;
  margin-right: 0;
  background: url(${({ image }: { image: string }) => image}) no-repeat;
  background-size: contain;
  ${media.lg} {
    height: 170px;
    max-height: 170px;
  }

  .white-text {
    color: #fff;
    font-weight: 400;
  }

  &:last-child {
    margin-right: 0;
  }

  .thumb-position {
    position: absolute;
    top: 0;
  }
`

export const Rectangle = styled.div`
  margin-left: 2rem;
  z-index: 0;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: url(${gradient}) no-repeat;
  background-size: 100% 100%;
  padding-left: 9rem;
  ${media.lg} {
    margin-left: 6rem;
    &>div.data {
      padding-left: 4.5rem;
    }
    &>div.controls {
      padding-left: 2rem;
    }
  }
  ${media.xl} {
    margin-left: 0;
    width: 100%;
  }

  .left-separation {
    margin-left: 1rem;
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
  margin: 7px 0 7px 0;
  display: flex;
  font-size: 25px;
  margin-top: 0.05rem;
  height: auto;
  align-items: flex-start;
  padding-bottom: 1rem;
  width: 300px;
  ${media.lg} {
    margin-top: 1rem;
    font-size: 36px;
    width: 425px;
    padding-bottom: 0.2rem;
  }
  ${media.xl} {
    width: 100%;
  }

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: auto;
  font-size: 12px;
  ${media.lg} {
    font-size: 18px;
  }

  &.text-box {
    width: 350px;
    ${media.lg} {
      width: 425px;
    }
    ${media.xl} {
      width: 550px;
    }
  }
`

export const Message = styled.div`
  text-align: end;
  &.text-box {
    width: 220px;
    font-size: 12px;
    padding-top: 0.5rem;
    ${media.lg} {
      font-size: 15px;
      width: 100%;
    }
  }
  ${media.lg} {
    padding-bottom: 0.5rem;
  }
`

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  &.text-box {
    width: 220px;
    ${media.lg} {
      width: 260px;
    }
  }
`

export const GaugeBarContainer = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  ${media.lg} {
    height: 50px;
  }

  span {
    padding-left: 0.5rem;
    font-size: 18px;
    ${media.lg} {
      font-size: 24px;
    }
  }
`

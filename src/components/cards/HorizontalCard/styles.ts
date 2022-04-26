import styled from 'styled-components'
import { gradient } from '../../../assets/img'

export const CardContent = styled.div`
  height: 351px;
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
  &.text-box {
    width: 350px;
  }
`

export const Message = styled.div`
  text-align: end;
  &.text-box {
    width: 220px;
    font-size: 12px;
    padding-top: 0.5rem;
  }
`

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  &.text-box {
    width: 220px;
  }
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
  position: absolute;

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
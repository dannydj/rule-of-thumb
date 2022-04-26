import styled from 'styled-components'
import { triangle } from '../../assets/img'
import media from '../../helpers/media'

export const TopContent = styled.div`
  padding-bottom: 24px;
  ${media.md} {
    display: flex;
    padding-bottom: 28px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ${media.lg} {
    padding-bottom: 36px;
  }

  .title {
    color: #464646;
    font-weight: 300;
    font-size: 24px;
    ${media.md} {
      font-size: 29px;
    }
    ${media.lg} {
      font-size: 45px;
    }
  }

  .select-container {
    display: none;
    ${media.md} {
      display: block;
      height: 28px;

      .select__control {
        display: flex;
        flex-direction: row;
        border: 2px solid #333333;
        border-radius: 0;
        width: 131px;
        height: 28px;
        min-height: 28px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        box-shadow: none;

        .select__value-container {
          height: 100%;
          padding: 0;

          .select__single-value {
            font-size: 10.5px;
            font-weight: 400;
            width: 93px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .select__indicators {
          height: 100%;

          span {
            display: none;
          }

          .select__indicator {
            background: url(${triangle}) no-repeat right 0.82rem center;
            padding: 16px;

            svg {
              display: none;
            }
          }
        }
      }

      .select__menu {
        border-radius: 0;
        margin-top: -2px;
        margin-bottom: 0;
        border: 2px solid #333333;

        .select__menu-list {
          padding: 0;
          overflow-y: hidden;

          .select__option {
            font-size: 10.5px;
            font-weight: 400;
            height: 28px;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            &:first-child {
              border-bottom: 2px solid #333333;
            }

            &.select__option--is-focused {
              background-color: transparent;
              color: #333333;
            }
          }
        }
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  flex-wrap: nowrap;
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-overflow-scrolling: touch;
  ${media.md} {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    padding-left: 0;
    margin-right: 0;
    padding-right: 0;
    overflow: hidden;
  }
`

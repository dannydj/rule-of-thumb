import styled from "styled-components";
import media from "../../../helpers/media";

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

  ${media.lg} {
    img {
      height: 24px;
    }
  }
`
